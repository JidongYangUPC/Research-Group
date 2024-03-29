---
title: "Outlier noise attenuation method using compressive sensing"
summary: We present an outlier denoising method that uses a novel statistics-based mask strategy for compressive sensing(CS). 
subtitle:  "- 2023-01-09" 
authors:
- Weiqi Wang
- Jidong Yang


doi: "10.3390/rs15020447"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-01-09" 

tags: [Processing]

weight: 50

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

<div style="text-align: center;">
  <img src="./Outlier noise attenuation method using compressive sensing.assets/featured.png" alt="Image Alt Text" style="max-width: 100%; height: auto;">
</div>

<br />



Denoising is always an important step in seismic processing, in order to produce high-quality data for subsequent imaging and inversion. Different types of noise can be suppressed using targeted denoising methods. For outlier noise with singular amplitudes, many classical denoising methods suffer from signal leakage. To mitigate this issue, we developed a statistics-based mask method and incorporated it into the compressive sensing (CS) framework, in order to remove outlier noise. A statistical analysis for seismic data amplitudes was first used to identify the locations of traces containing outlier noise. Then, the outlier trace locations were compared with a mask matrix generated by jitter sampling, and we replaced the sampled traces of the jitter mask that had the outlier noise with their nearby unsampled traces. The optimized sampling matrix enabled us to effectively identify and remove outliers. This optimized mask strategy converts an outlier denoising problem into a data reconstruction problem. Finally, a sparsely constrained inverse problem was solved using a soft-threshold iteration solver to recover signals at the null locations. The feasibility and adaptability of our approach were demonstrated through numerical experiments for synthetic and field data. 



A detailed introduction can be downloaded and viewed as a pdf, or [click this link.](https://www.mdpi.com/2072-4292/15/2/447/htm#)
