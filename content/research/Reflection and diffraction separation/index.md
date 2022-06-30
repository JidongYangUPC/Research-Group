---
title: "Reflection and diffraction separation"
subtitle: Reflection and diffraction separation in the dip-angle common-image gathers using convolutional neural network
summary: We present an efficient and accurate diffraction separation and imaging method using convolutional neural network (CNN).  
authors:
- Jidong Yang

# Schedule page publish date (NOT publication's date).
publishDate: "2022-05-13"

tags: [Deep-Learning]

weight: 110

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

![featured1](index.assets/featured1.png)

In exploration seismology, the reflections have been extensively used for imaging and inversion to detect hydrocarbon and mine resources, which are generated from subsurface continuous impedance interfaces. When the reflector is not continuous and its size reduces to less than half wavelength, the reflected wave becomes scattering, which is also known as the diffraction. Both reflection and diffraction can be used to image subsurface structures, and the latter is helpful to resolve small-scale discontinuities, such as fault plane, pinch-out, Karst caves and salt edge. However, the amplitudes of diffractions are usually much weaker than that of reflections. This makes it difficult to directly identify and extract diffractions from common-shot gathers. On the other hand, they have different geometrical characteristics in the dip-angle common-image gathers (DACIGs), which provides one opportunity to separate diffractions and reflections. In this study, we present an efficient and accurate diffraction separation and imaging method using convolutional neural network (CNN). The labeled data of DACIGs are generated using one pass of seismic modeling and migration for velocity models with and without artificial scatterers. Then, a simplified end-to-end CNN is trained to identify and extract reflections from the DACIGs that contain both reflections and diffractions. Next, two adaptive subtraction strategies are presented to compute diffraction DACIGs and stacked images.
