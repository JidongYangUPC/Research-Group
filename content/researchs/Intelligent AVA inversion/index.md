---
title: "Intelligent AVA inversion"
subtitle: Intelligent AVA inversion using a convolution neural network trained with pseudo-well data sets
summary: To mitigate the problem of sparse well locations in AVA inversion, we present a convolution neural network (CNN) trained by pseudo-well logs.   
authors:
- Jidong Yang

# Schedule page publish date (NOT publication's date).
publishDate: "2022-05-14"

tags: [Deep-Learning]

weight: 100
# Display this page in the Featured widget?
featured: false

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

The amplitude-variation-with-angle (AVA) inversion for seismic data has been widely used in hydrocarbon detection of exploration seismology. Traditional AVA analysis estimates the elastic parameters, i.e., P-wave velocity, S-wave velocity and density, using the AVA intercept, gradient, and higher-order AVA terms by solving either a linear or nonlinear inverse problem. Recently, the deep learning has been introduced to the AVA inversion to describe the complicated nonlinear relation between seismic data and elastic parameters. But because of sparse well locations, the application of deep-learning based AVA inversion is limited by few well-log label sets in production. To mitigate this problem, we present a convolution neural network (CNN) trained by pseudo-well data for AVA inversion. By considering spatial correlation and cross-correlation of elastic parameters, we first generate a large number of realistic pseudo-well logs. Then, the angle-domain common-image gathers are computed as source wavelet convolved with reflectivity series, and then are used to train a CNN to predict elastic parameters. Numerical tests for both synthetic and field data demonstrate that the pseudo-well based CNN AVA inversion not only can accurately and efficiently estimate P-wave velocity, S-wave velocity and density, but also has a potential to alleviate the inter-parameter crosstalk artifacts, in comparison with traditional linear and nonlinear AVA inversion methods.
