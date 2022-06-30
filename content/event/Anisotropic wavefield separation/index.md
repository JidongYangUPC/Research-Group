---
title: "Anisotropic wavefield separation"
summary: Based on the eigenform analysis, we develop an efficient pseudo-Helmholtz decomposition method for the VTI and TTI media, which produces vector *P* and *S* wavefields with the same amplitudes, phases and physical units as the input elastic wavefields. 

authors:
- Jidong Yang
- Houzhu Zhang


doi: "10.1093/gji/ggz085"

# Schedule page publish date (NOT publication's date).
publishDate: "2019-02-13" 

tags: [Modeling]

weight: 10

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org
url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
#slides: example
---

Based on the eigenform analysis, we develop an efficient pseudo-Helmholtz decomposition method for the VTI and TTI media, which produces vector *P* and *S* wavefields with the same amplitudes, phases and physical units as the input elastic wavefields. Starting from the elastic VTI wave equations, we first derive the analytical eigenvalues and eigenvectors, then use the Taylor expansion to approximate the square-root term in the eigenvalues, and finally obtain a zero-order and a first-order pseudo-Helmholtz decomposition operator. Because the zero-order operator is the true solution for the case of  = *δ*, it produces accurate wavefield separation results for elliptical anisotropic media. The first-order separation operator is more accurate for non-elliptical anisotropy. Since the proposed pseudo-Helmholtz decomposition requires solving an anisotropic Poisson’s equation, we propose two fast numerical solvers. One is based on the sparse lower-upper (LU) factorization, which can be repeatedly applied to the input elastic wavefields once computing the lower and upper triangular matrices. The second solver assumes the model parameters are laterally homogeneous within a given migration aperture. This assumption allows us to efficiently solve the anisotropic Poisson’s equation in the *z* − *k**x* domain, where *k**x* and *z* denote the horizontal wavenumber and depth, respectively. Using the coordinate transform, we extend the pseudo-Helmholtz decomposition to the TTI media. The separated vector wavefields are used to produce *PP* and *PS* images by applying a dot-product imaging condition.



A detailed introduction can be downloaded and viewed as a pdf, or [click this link.](https://academic.oup.com/gji/article/217/2/1290/5318621?login=false)
