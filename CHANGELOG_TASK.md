# Research-Group 全站学术排版

## 路径与边界

- 原始项目：`D:\GPT_codex\hugo网页优化\Research-Group`。
- 独立版本及 Hugo 项目根目录：`D:\GPT_codex\hugo网页优化\001__Research-Group__全站学术排版__20261118_214852`。
- Hugo 没有单独的 `src`。最终内容源码在 `D:\GPT_codex\hugo网页优化\001__Research-Group__全站学术排版__20261118_214852\content`，样式、模板和配置分别在同级的 `assets`、`layouts` 和 `config`。
- 选择性复制 `.github`、`assets`、`config`、`content`、`static`，以及原项目根目录中的 `go.mod`、`go.sum`、`netlify.toml`、`theme.toml`、`README.md`、`LICENSE.md`、`.editorconfig` 和 `.gitignore`。未复制 `.git`、旧 `public`、旧 `resources`、仅用于说明文档的 `README.assets`、空的 `images` 或构建锁；没有软链接。主题仍由原 `go.mod` 锁定；Go 模块缓存放入副本 `.build-cache`。
- `public` 是本次重新生成的生产静态文件。`.qa` 存放基线、预览产物、验证结果、Hugo 测试二进制与截图，不属于发布内容。未部署、未提交、未推送。

## 修改清单

| 位置 | 变更 |
| --- | --- |
| `assets/scss/custom.scss`（新增） | 统一全站配色、字体层级、段落宽度、导航、卡片与响应式间距；样式也覆盖主题生成的辅助页面。 |
| `config/_default/menus.yaml`、`config/_default/params.yaml` | 修复首页导航锚点、清理导航路径格式；去除页脚占位名称，保留原授权声明；关闭错误坐标地图。 |
| `content/home/about.md`、`content/home/contact.md`、`content/home/explore-group.md`（新增） | 优化首页个人简介和经历的层级，增加四个栏目入口，移除无效坐标。 |
| `content/contact/index.md`、`content/contact/contact.md` | 独立联系页增加清晰标题与提示，保留原联系方式和表单，移除无效坐标。 |
| `content/research/index.md`、`content/research/research-overview.md`（新增）、目录内 14 个课题 Markdown；`layouts/shortcodes/research-directory.html`、`layouts/shortcodes/research-figure.html`（均新增） | 增加课题目录，保留原锚点；规范 20 张科研图的容器、图注和加载方式。静态预览转 WebP，保留 GIF 和可打开的原图。 |
| `content/people/index.md`、`content/people/people.md` | 居中缩小 Logo、增加成员分组导航、优化 31 张人物卡片；毕业年份标题大于 Alumni 标题，不添加编号，修复英文撇号。 |
| `content/publication/index.md`、`content/publication/publications.md` | 修正页面标题，为期刊和会议论文增加导航和语义编号列表；优化悬挂缩进、期刊名与行距。 |
| `content/post/_index.md`、`content/post/*/content.md`（既有 5 篇） | 优化新闻列表的卡片布局、文章图注和正文空白，完善获奖新闻图片替代文本。 |
| `content/datasets/_index.md`、`content/datasets/Shengli-model/index.md`、`content/datasets/Velocity-and-attenuation-models-of-BP-Gas-Reservoir/index.md` | 优化数据集列表与详情、预览图和引用区，修正 4 段 BibTeX 的语法，不改变原条目的引用信息。 |
| `.gitignore`、`verify_research_group.cjs`（新增）、`source-sha256.json`（新增） | 隔离本地缓存和验证输出，保留可重复的浏览器检查脚本与原始文件哈希快照。`assets/jsconfig.json` 是 Hugo 在副本中自动生成的编辑器配置。 |

## 实测与复现

在新目录运行；`.qa/baseline` 为编辑前、使用 Hugo 0.111.1 Extended 以同一预览基地址构建的基线。

```powershell
$env:HUGO_CACHEDIR = Join-Path $PWD '.build-cache'
$env:GOFLAGS = '-mod=readonly'
$env:HUGO_ENABLEGITINFO = 'false'
$env:GIT_CONFIG_COUNT = '1'
$env:GIT_CONFIG_KEY_0 = 'core.longpaths'
$env:GIT_CONFIG_VALUE_0 = 'true'
& '.qa/hugo-0.97.3/hugo.exe' --environment production --gc --minify --cleanDestinationDir --destination public
& '.qa/hugo-0.97.3/hugo.exe' --environment production --baseURL 'http://127.0.0.1:8830/' --minify --cleanDestinationDir --destination '.qa/updated'
$env:PLAYWRIGHT_MODULE = 'C:/Users/DELL/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'
$env:EDGE_BINARY = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
node verify_research_group.cjs .
```

- 站点锁定的 Hugo 0.97.3 Extended 成功构建 `public`，保留正式 `baseURL`。无 `.git` 的独立副本关闭了 Git 时间戳读取；未模拟带 Git 历史的 Netlify 构建过程。
- 用 Edge/Playwright 验证 23 个公开 HTML 路径（含 404 及作者、标签等辅助页），前后路径集合相同；在 1360、390、320 px 的 69 次检查中无整页横向溢出。站内链接与锚点无断链、页面图片可解码；验证了 390 px 的移动导航和科研目录跳转。
- 验证保留 14 个课题、20 张研究图、31 张成员卡片、38 条期刊论文、25 条会议论文、5 篇新闻、2 个数据集和 4 段 BibTeX；联系表单仍在。结果见 `.qa/results.json`，21 张截图见 `.qa/screens`。
- 科研页展示图文件合计从 41,850,863 字节降到 14,902,057 字节（约 39.9 → 14.2 MiB，减少 64.4%）；原图仍可打开。该数据是文件体积对比，不代表实际加载速度或可节省的线上流量。
- 重新读取原项目的 139 个快照文件并对比 SHA-256，差异为 0；原项目 `git --no-optional-locks status --porcelain=v1` 无输出。
- 外部网站、线上表单投递及部署未测试。原地图纬度超出合法范围，没有猜测新坐标；联系地址、邮编、通用预约链接和论文列表中的既有作者标记未擅改。

日常预览可在新目录运行 `hugo server --disableFastRender`；若 PATH 上没有 Hugo，可使用随验证产物保留的 `& '.qa/hugo-0.97.3/hugo.exe' server --disableFastRender`。
