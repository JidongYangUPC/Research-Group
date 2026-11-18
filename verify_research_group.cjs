const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const project = path.resolve(process.argv[2] || '.');
const origin = 'http://127.0.0.1:8830';
const layouts = ['', 'research', 'people', 'publication', 'datasets', 'post', 'contact'];
const extensions = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.svg': 'image/svg+xml', '.pdf': 'application/pdf', '.woff': 'font/woff', '.woff2': 'font/woff2',
};

function target(root, address) {
  const decoded = decodeURIComponent(address.pathname);
  const direct = path.resolve(root, `.${decoded}`);
  if (direct !== root && !direct.startsWith(`${root}${path.sep}`)) return null;
  const candidate = fs.statSync(direct, { throwIfNoEntry: false })?.isDirectory() ? path.join(direct, 'index.html') : direct;
  return fs.statSync(candidate, { throwIfNoEntry: false })?.isFile() ? candidate : null;
}

function descendants(root, directory = root) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return descendants(root, file);
    if (entry.name === '404.html') return ['/404.html'];
    if (entry.name !== 'index.html') return [];
    const page = path.relative(root, directory).split(path.sep).map(encodeURIComponent).join('/');
    if (page.startsWith('admin') || /(?:^|\/)page\/1$/.test(page)) return [];
    return [page ? `/${page}/` : '/'];
  }).sort();
}

function sumImages(root, urls) {
  return [...new Set(urls)].reduce((total, url) => total + fs.statSync(target(root, new URL(url))).size, 0);
}

async function review(browser, key, serverState, routes) {
  serverState.root = path.join(project, '.qa', key);
  const checks = [];
  const capture = key === 'updated';
  for (const width of capture ? [1360, 390, 320] : [1360]) {
    const context = await browser.newContext({ viewport: { width, height: 940 }, colorScheme: 'light', reducedMotion: 'reduce' });
    await context.route('**/*', (request) => new URL(request.request().url()).origin === origin ? request.continue() : request.abort());
    const page = await context.newPage();
    for (const url of routes) {
      const response = await page.goto(origin + url, { waitUntil: 'load' });
      assert.equal(response.status(), 200, url);
      const info = await page.evaluate(async ({ checkImages }) => {
        const root = document.querySelector('.page-body');
        const images = [...(root?.querySelectorAll('img') || [])];
        const imageFailures = [];
        if (checkImages) {
          for (const image of images) image.loading = 'eager';
          await Promise.all(images.map((image) => image.decode().catch(() => imageFailures.push(image.currentSrc || image.src))));
        }
        const overflow = document.documentElement.scrollWidth - innerWidth;
        const offscreen = overflow > 1 ? [...root.querySelectorAll('*')].filter((element) => {
          const box = element.getBoundingClientRect();
          return box.width && box.right > innerWidth + 1 && getComputedStyle(element).position !== 'absolute';
        }).slice(0, 8).map((element) => `${element.localName}.${element.className?.baseVal || element.className}`) : [];
        const links = [...document.querySelectorAll('a[href]')].map((link) => link.href);
        const ids = [...document.querySelectorAll('[id]')].map((element) => element.id);
        return {
          title: document.title, overflow, offscreen, links, ids, imageFailures,
          ink: getComputedStyle(document.body).getPropertyValue('--rg-ink').trim(),
          bodyClass: document.body.className,
          images: images.map((image) => image.currentSrc || image.src),
          figures: [...document.querySelectorAll('.rg-figure img')].map((image) => image.currentSrc || image.src),
          figureOriginals: [...document.querySelectorAll('.rg-figure > a')].map((link) => link.href),
          people: document.querySelectorAll('.orial-people-card').length,
          cohorts: [...document.querySelectorAll('.orial-people-cohort')].map((heading) => heading.textContent),
          researchEntries: document.querySelectorAll('#research-overview .rg-directory li').length,
          citations: [...document.querySelectorAll('.rg-citations ol')].map((list) => list.children.length),
          news: document.querySelectorAll('.rg-news .view-card').length,
          datasetCards: document.querySelectorAll('.rg-datasets .stream-item').length,
          bibtex: document.querySelectorAll('code.language-bibtex').length,
          contact: Boolean(document.querySelector('form[netlify][name="contact"] input[type="email"]')),
          map: Boolean(document.querySelector('#map-lat')),
        };
      }, { checkImages: width === 1360 });
      checks.push({ url, width, ...info });
      const main = layouts.find((name) => url === (name ? `/${name}/` : '/'));
      if (capture && width !== 320 && main !== undefined) {
        await page.screenshot({ path: path.join(project, '.qa', 'screens', `${main || 'home'}-${width}.png`), animations: 'disabled' });
      }
      if (capture && width === 1360 && /^(\/post\/.+|\/datasets\/.+)\/$/.test(url)) {
        const slug = decodeURIComponent(url.split('/').at(-2));
        await page.screenshot({ path: path.join(project, '.qa', 'screens', `${slug.substring(0, 85)}.png`), animations: 'disabled' });
      }
    }
    if (capture && width === 390) {
      await page.goto(origin, { waitUntil: 'load' });
      await page.getByRole('button', { name: 'Toggle navigation' }).click();
      await page.locator('#navbar-content').getByRole('link', { name: 'Research', exact: true }).click();
      await page.waitForURL('**/research/');
      await page.getByRole('navigation', { name: 'Research topics' }).getByRole('link').first().click();
      assert.ok(new URL(page.url()).hash);
    }
    await context.close();
  }
  return checks;
}

function invalidLinks(rows, root) {
  const ids = new Map(rows.map((row) => [row.url, new Set(row.ids)]));
  const issues = new Set();
  for (const row of rows) {
    for (const href of row.links) {
      const address = new URL(href);
      if (address.origin !== origin) continue;
      const hrefWithoutOrigin = `${address.pathname}${address.hash}`;
      const file = target(root, address);
      const route = address.pathname.endsWith('/') || address.pathname.endsWith('.html') ? address.pathname : `${address.pathname}/`;
      const missingHash = address.hash && ids.has(route) && !ids.get(route).has(decodeURIComponent(address.hash.slice(1)));
      if (!file || missingHash) issues.add(`${row.url} → ${hrefWithoutOrigin}`);
    }
  }
  return [...issues].sort();
}

(async () => {
  const baselineRoot = path.join(project, '.qa', 'baseline');
  const updatedRoot = path.join(project, '.qa', 'updated');
  const routes = descendants(updatedRoot);
  assert.deepEqual(routes, descendants(baselineRoot), 'public HTML route parity');
  const state = { root: baselineRoot };
  const server = http.createServer((request, response) => {
    try {
      const file = target(state.root, new URL(request.url, origin));
      if (!file) return response.writeHead(404).end();
      if (path.basename(file) === 'index.html' && !new URL(request.url, origin).pathname.endsWith('/') && !new URL(request.url, origin).pathname.endsWith('.html')) {
        return response.writeHead(308, { Location: `${new URL(request.url, origin).pathname}/` }).end();
      }
      response.setHeader('Content-Type', extensions[path.extname(file).toLowerCase()] || 'application/octet-stream');
      fs.createReadStream(file).pipe(response);
    } catch {
      response.writeHead(400).end();
    }
  });
  await new Promise((resolve) => server.listen(8830, '127.0.0.1', resolve));
  fs.mkdirSync(path.join(project, '.qa', 'screens'), { recursive: true });
  const browser = await chromium.launch({ headless: true, ...(process.env.EDGE_BINARY ? { executablePath: process.env.EDGE_BINARY } : {}) });
  try {
    const baseline = await review(browser, 'baseline', state, routes);
    const updated = await review(browser, 'updated', state, routes);
    const desktop = updated.filter((row) => row.width === 1360);
    const row = (url) => desktop.find((item) => item.url === url);
    const brokenBefore = invalidLinks(baseline, baselineRoot);
    const brokenAfter = invalidLinks(desktop, updatedRoot);
    const report = {
      publicRoutes: routes.length,
      viewportChecks: updated.length,
      overflow: updated.filter((item) => item.overflow > 1).map(({ url, width, overflow, offscreen }) => ({ url, width, overflow, offscreen })),
      brokenBefore, brokenAfter,
      newBroken: brokenAfter.filter((item) => !brokenBefore.includes(item)),
      baselineImages: baseline.flatMap((item) => item.imageFailures.map((image) => [item.url, image])),
      updatedImages: desktop.flatMap((item) => item.imageFailures.map((image) => [item.url, image])),
      researchBefore: sumImages(baselineRoot, baseline.find((item) => item.url === '/research/').images),
      researchAfter: sumImages(updatedRoot, row('/research/').figures),
      originals: sumImages(updatedRoot, row('/research/').figureOriginals),
      researchEntries: row('/research/').researchEntries,
      figures: row('/research/').figures.length,
      publications: row('/publication/').citations,
      people: row('/people/').people,
      news: row('/post/').news,
      datasets: row('/datasets/').datasetCards,
    };
    fs.writeFileSync(path.join(project, '.qa', 'results.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
    assert.deepEqual(report.overflow, []);
    assert.deepEqual(report.newBroken, []);
    assert.deepEqual(report.updatedImages, []);
    assert.ok(desktop.every((item) => item.ink));
    assert.equal(report.researchEntries, 14);
    assert.equal(report.figures, 20);
    assert.deepEqual(report.publications, [38, 25]);
    assert.equal(report.people, 31);
    assert.deepEqual(row('/people/').cohorts, ['Class of 2024', 'Class of 2025', 'Class of 2026']);
    assert.equal(report.news, 5);
    assert.equal(report.datasets, 2);
    assert.equal(row('/datasets/velocity-and-attenuation-models-of-bp-gas-reservoir/').bibtex, 4);
    assert.ok(row('/contact/').contact && !row('/contact/').map);
  } finally {
    await browser.close();
    server.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
