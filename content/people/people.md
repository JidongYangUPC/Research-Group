---
# An instance of the Contact widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 10

title: Group
subtitle:

design:
  columns: '1'

---

<style>
.orial-people-logo { margin: 1.25rem auto 2.5rem; text-align: center; }
.orial-people-logo img { display: block; width: min(70%, 300px); height: auto; margin: 0 auto; }
.orial-people-group { display: grid; gap: .85rem; margin: 0 0 2.25rem; }
.orial-people-group .orial-people-card {
  display: grid;
  grid-template-columns: clamp(108px, 19vw, 152px) minmax(0, 1fr);
  align-items: start;
  gap: clamp(.9rem, 2.5vw, 1.5rem);
  padding: clamp(.9rem, 2.5vw, 1.4rem);
  border: 1px solid rgba(110, 128, 150, .35);
  border-radius: .85rem;
  background: rgba(110, 128, 150, .06);
}
.orial-people-card .orial-people-portrait { display: block; width: 100%; height: auto; margin: 0; border-radius: .5rem; }
.orial-people-card .orial-people-name { margin: 0 0 .3rem; font-size: 1.08rem; line-height: 1.35; }
.orial-people-card .orial-people-research { margin: 0 0 .65rem; font-size: .92rem; font-weight: 600; }
.orial-people-card .orial-people-bio { margin: 0; line-height: 1.6; }
.orial-people-card { overflow-wrap: anywhere; }
h4.orial-people-alumni { font-size: clamp(1.3rem, 3vw, 1.65rem); }
h5.orial-people-cohort { margin: 1.5rem 0 .85rem; font-size: 1.25rem; font-weight: 700; line-height: 1.35; }
@media (max-width: 575px) {
  .orial-people-group .orial-people-card { grid-template-columns: minmax(0, 1fr); }
  .orial-people-card .orial-people-portrait { width: min(100%, 132px); }
}
</style>

<div class="orial-people-logo" id="group-logo">
  <img src="people.assets/grouplogo.png" alt="Group logo">
</div>

### Group Members

<nav class="rg-people-directory" aria-label="Group sections">
  <ul class="rg-directory">
    <li><a href="#doctoral-students">Doctoral students</a></li>
    <li><a href="#master39s-students">Master's students</a></li>
    <li><a href="#alumni">Alumni</a></li>
    <li><a href="#openings">Openings</a></li>
  </ul>
</nav>

#### Doctoral Students

<div class="orial-people-group">
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/sulaiyuan1.jpg" alt="Laiyuan Su" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Laiyuan Su</h5>
    <p class="orial-people-research">2023-Present · Passive source imaging</p>
    <p class="orial-people-bio">Laiyuan Su graduated from China University of Petroleum (East China) with a Master&#39;s Degree in June 2023. He is currently a PhD candidate. His research interest includes 1) Exploration seismology: least-squares source imaging, full waveform inversion; 2) Earthquake seismology: earthquake rupture imaging.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/84c2fdffc57eee258f60937f3bff68b_%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg" alt="Shanyuan Qin" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Shanyuan Qin</h5>
    <p class="orial-people-research">2023-Present · Anisotropic modeling and imaging</p>
    <p class="orial-people-bio">Shanyuan Qin graduated from China University of Petroleum (East China) with a bachelor degree in Geophysics and a double bachelor degree in Law in June 2021 and started pursuing master&#x27;s degree in the same year. He is interested in wave modelling, seismic migration and structural seismology. He is currently working on acoustic forward modeling and inverse time migration in complex media such as anisotropy and attenuation. In free time, he likes cycling and reading.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/20230219133629.jpg" alt="Fan Yan" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Fan Yan</h5>
    <p class="orial-people-research">2023-Present · Time-domain least-squares migration</p>
    <p class="orial-people-bio">Fan Yan received his Bachelor&#39;s Degree in Prospecting Technology and Engineering from China University of Petroleum (East) in June 2022.In the same year, he studied for a master&#x27;s degree in the university.He is now studying for a doctor&#x27;s degree in geophysics.His research topics include wave equation migration and deep learning.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/20230219135421.jpg" alt="Youcai Yu" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Youcai Yu</h5>
    <p class="orial-people-research">2024-Present · Full waveform inversion</p>
    <p class="orial-people-bio">Youcai Yu  graduated from Shandong University of Science and Technology with a bachelor&#x27;s degree in exploration technology and engineering in 2021. His main research interest is full-waveform inversion, and he is currently working on new full-waveform inversion objective functions. He enjoys music and traveling.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/yukunpeng.jpg" alt="Kunpeng Yu" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Kunpeng Yu</h5>
    <p class="orial-people-research">2024-Present · Ambient seismic noise cross-correlation inversion</p>
    <p class="orial-people-bio">Kunpeng Yu graduated from China University of Petroleum (East China) with a bachelor degree in Geophysics in June 2023. In the same year, he studied for a master&#39;s degree in the university. He is currently researching on the cross-correlation inversion of seismic ambient noise. In his spare time he prefers to watch movies and videos.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/461fdab4a6846b6a521fcc003396f28.jpg" alt="Pengfei Wang" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Pengfei Wang</h5>
    <p class="orial-people-research">2025-Present · Elastic imaging</p>
    <p class="orial-people-bio">Pengfei Wang received a bachelor&#x27;s degree in exploration technology and engineering from Xi&#x27;an Shiyou University in 2022, and is now studying at China University of Petroleum (East China) as a master&#x27;s degree in geological resources and geological engineering, and usually likes sports, such as badminton, basketball and other sports.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/fd0a1b32f44812d3b1ab952abcf0382_%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg" alt="TianTao Shan" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">TianTao Shan</h5>
    <p class="orial-people-research">2025-Present · Gaussian Beam Migration Imaging for VTI Media</p>
    <p class="orial-people-bio">Tiantao Shan graduated from Shandong University of Technology in 2023 with a bachelor&#x27;s degree in exploration technology and engineering. His main research area is Gaussian Beam Migration Imaging for VTI Media. He enjoys traveling and playing basketball.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/liuyang.jpg" alt="Yang Liu" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Yang Liu</h5>
    <p class="orial-people-research">2025-Present · Time-domain least-squares migration</p>
    <p class="orial-people-bio">Yang Liu earned his bachelor&#x27;s degree in geophysics from Xi&#x27;an Shiyou University in 2024. He&#x27;s now pursuing a PhD at China University of Petroleum (East China), where his research focuses on Time-domain least-squares migration. In his free time, he enjoys natural bodybuilding.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/石绍琳.png" alt="Yang Liu" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Shaolin Shi</h5>
    <p class="orial-people-research">2025-Present · Intelligent Elastic Full-Waveform Inversion</p>
    <p class="orial-people-bio">Shaolin Shi is currently pursuing his Ph.D. in Geological Resources and Geological Engineering at China University of Petroleum (East China). His research focuses on elastic full-waveform inversion, with particular interests in novel model parameterization, optimization methods, and the application of artificial intelligence to seismic exploration. He is dedicated to developing efficient and accurate methods for subsurface imaging and characterization.</p>
  </div>    
</article>
</div>

#### Master&#39;s Students

<div class="orial-people-group">
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/yanxin.jpg" alt="Xin Yan" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Xin Yan</h5>
    <p class="orial-people-research">2024-2027 · Full waveform inversion</p>
    <p class="orial-people-bio">Xin Yan graduated from China University of Petroleum (East China) with a bachelor&#x27;s degree in geophysics in 2024. Currently, he is undertaking a master&#x27;s degree at the same university, and his current research is concentrated on intelligent full waveform inversion. During his leisure time, he enjoys watching movies or episodes and taking walks.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/guowenjing%20-%20%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg" alt="Wenjing Guo" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Wenjing Guo</h5>
    <p class="orial-people-research">2024-2027 · Deep Learning for seismic imaging</p>
    <p class="orial-people-bio">Wenjing Guo graduated from China Univerity of petroleum(East China) with a bachelor&#39;s degree in geophysics in 2024.Her main research interests is &quot;Application of artificial intelligence to least-squares migration methods in imaging domains&quot;.She enjoys various outdoor sports such as running, playing badminton, and prefers to be close to nature.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/wangzhaoxing.jpg" alt="Zhaoxing Wang" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Zhaoxing Wang</h5>
    <p class="orial-people-research">2025-2027 · Helical fiber optic cable forward modeling and noise suppression</p>
    <p class="orial-people-bio">Zhaoxing Wang received the Bachelor&#39;s Degree in Exploration Geophysics from China University of Petroleum (East China) in June 2025. He is currently studying the attenuation of helical fiber optic cable forward modeling and noise suppression. In his free time, he loves outdoor activities such as skiing and runing.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/%E8%91%9B%E5%B0%8F%E5%B7%9D.jpg" alt="Xiaochuan Ge" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Xiaochuan Ge</h5>
    <p class="orial-people-research">2025-2028 · Seismic imaging resolution</p>
    <p class="orial-people-bio">Xiaochuan Ge graduated from China University of petroleum(East China) with a bachelor&#39;s degree in geophysics in 2025.Currently, he is undertaking a master&#39;s degree at the same university.His main research is concentrated on seismic imaging resolution currently.In his spare time,he enjoys hiking and experiencing culture.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/weizihan.jpg" alt="Zihan Wei" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Zihan Wei</h5>
    <p class="orial-people-research">2025-2028 · Wavefield separation and Denoising</p>
    <p class="orial-people-bio">Zihan Wei graduated from China University of Petroleum (East China) with a bachelor&#39;s degree in geophysics in 2024 and worked at SINOPEC Shengli Oilfield as a professional engineer from 2024 to 2025.His main research interest lies in the research on wavefield separation methods for DAS data based on high-resolution Radon transform and geometric mode decomposition.He usually excels in calligraphy, writing, and making friends.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/panjianjun.jpg" alt="Jianjun Pan" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Jianjun Pan</h5>
    <p class="orial-people-research">2025-2028 · Deep Learning for DAS Data Denoising</p>
    <p class="orial-people-bio">Jianjun Pan graduated from Xi&#x27;an Shiyou University with a bachelor&#x27;s degree in Prospecting Technology and Engineering in 2025. She is currently pursuing a master&#x27;s degree. Her research focuses on DAS data denoising using deep learning. In her leisure time, she enjoys listening to music, traveling, and hiking.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/wenxiaokang.jpg" alt="Xiaokang Wen" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Xiaokang Wen</h5>
    <p class="orial-people-research">2025-2028 · Deep Learning for Seismic Event Analysis</p>
    <p class="orial-people-bio">Xiaokang Wen graduated from China University of Geosciences (Beijing) in 2025 with a Bachelor of Engineering degree in Exploration Technology and Engineering. His main research interest is &quot;Application of deep learning in seismic event clustering analysis and microseismic monitoring&quot;. He loves life, enjoys music and sports, is outgoing yet unostentatious, and follows his heart yet not arbitrary.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/zuoqi.jpg" alt="Zuo Qi" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Zuo Qi</h5>
    <p class="orial-people-research">2025-2028 · Ambient noise imaging</p>
    <p class="orial-people-bio">Zuo Qi graduated from Xi&#x27;an Shiyou University with a bachelor&#x27;s degree in Exploration Technology and Engineering in 2025. Currently, she is undertaking a master&#x27;s degree at the China University of Petroleum (East China), and her current research is concentrated on ambient noise imaging. During her leisure time, she enjoys walking and appreciating the natural scenery.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/%E6%9B%B9%E7%82%AB%E6%98%8A.jpg" alt="Xuanhao Cao" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Xuanhao Cao</h5>
    <p class="orial-people-research">2026–2029 · Intelligent Imaging</p>
    <p class="orial-people-bio">Xuanhao Cao graduated from Xi&#39;an Shiyou University with a bachelor&#39;s degree in Exploration Technology and Engineering in 2026. In the same year, he joined the School of Geosciences at China University of Petroleum (East China) and started pursuing a master&#39;s degree in Geological Resources and Geological Engineering. His current research focuses on intelligent imaging. In his spare time, he enjoys walking and playing badminton.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/%E5%BC%A0%E6%AF%85.jpg" alt="Yi Zhang" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Yi Zhang</h5>
    <p class="orial-people-research">2026-2029 · Wave-equation modeling and imaging with temperature-dependent attenuation</p>
    <p class="orial-people-bio">Yi Zhang graduated from the University of Emergency Management with a bachelor&#x27;s degree in Geophysics in 2026. He is currently pursuing a master&#x27;s degree in Geophysics at China University of Petroleum (East China). His research topics include wave-equation forward modeling and imaging that take temperature-dependent absorption and attenuation effects into account. Personally, he is a fitness enthusiast who loves sports and keeps an active lifestyle.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/%E4%BB%BB%E8%89%B3%E4%B8%BD.jpg" alt="Yanli Ren" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Yanli Ren</h5>
    <p class="orial-people-research">2026-2029 · Intelligent diffraction wave separation and imaging</p>
    <p class="orial-people-bio">Yanli Ren graduated from Xi&#x27;an Shiyou University with a bachelor&#x27;s degree in Exploration Technology and Engineering. Her research topics include intelligent separation and imaging of diffraction waves. Personally, she is a music lover who enjoys listening to music and singing in her free time.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/%E5%88%98%E9%91%AB.jpg" alt="Xin Liu" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Xin Liu</h5>
    <p class="orial-people-research">2026-2029 · Seismic Data Processing</p>
    <p class="orial-people-bio">Xin Liu earned his bachelor&#39;s degree in geophysics from China University of Petroleum (East China) in 2026 and went on to pursue postgraduate studies at the same institution. His research is currently focused on seismic data processing. Beyond his academic pursuits, he is an avid reader and amateur fiction writer.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/Guihu%20Fan.jpg" alt="Guihu Fan" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Guihu Fan</h5>
    <p class="orial-people-research">2026-2029 · Full Waveform Inversion about Q</p>
    <p class="orial-people-bio">Guihu Fan graduated from China University of Petroleum (East China) with bachelor&#39;s degree in Exploration Technology and Engineering in 2026. He is currently pursuing his master&#39;s degree at the same university. His main research interest is Full Waveform Inversion about Q. In his spare time, he enjoys fitness and listening to music.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/%E5%88%98%E4%B8%B9%E9%9B%AF.jpg" alt="Danwen Liu" loading="lazy" decoding="async">
  <div>
    <h5 class="orial-people-name">Danwen Liu</h5>
    <p class="orial-people-research">2026-2029 · Helically wound fiber-optic cables for Distributed Acoustic Sensing</p>
    <p class="orial-people-bio">Danwen Liu received the Bachelor&#39;s Degree in Geophysics from China University of Petroleum (East China) in 2026. She is currently focusing on forward modeling and seismic imaging of helically wound fiber-optic cables for Distributed Acoustic Sensing . In her free time, she loves travelling and playing badminton.</p>
  </div>
</article>
</div>

<h4 class="orial-people-alumni" id="alumni">Alumni</h4>

<h5 class="orial-people-cohort" id="class-of-2024">Class of 2024</h5>

<div class="orial-people-group">
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/sunjiaxing.jpg" alt="Jiaxing Sun" loading="lazy" decoding="async">
  <div>
    <h6 class="orial-people-name">Jiaxing Sun</h6>
    <p class="orial-people-research">2020-2024 · Deep Learning for seismic imaging and inversion</p>
    <p class="orial-people-bio">Jiaxing Sun graduated from China University of Petroleum (Beijing) with a master&#39;s degree in Geoscience in June 2020. She joined the China University of Petroleum (East China) in September 2020 and started pursuing Ph.D. Her current work mainly focused on using the deep learning for seismic AVO inversion, least-squares migration, diffraction/reflection separation and wavefield separation. In her free time, she loves outdoor activities such as climbing and skiing.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/image-20230218220503532.png" alt="Jie Xu" loading="lazy" decoding="async">
  <div>
    <h6 class="orial-people-name">Jie Xu</h6>
    <p class="orial-people-research">2021-2024 · Full-wavefield imaging</p>
    <p class="orial-people-bio">Jie Xu graduated from China Univerity of petroleum(East China) with a bachelor&#x27;s degree in exploration technology and engineering in 2021. Her main research interests are in Marchenko imaging using multiples to image. She likes to travel and experience the customs and characteristics of different places.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/20230219144815.jpg" alt="Zhiwen Shi" loading="lazy" decoding="async">
  <div>
    <h6 class="orial-people-name">Zhiwen Shi</h6>
    <p class="orial-people-research">2021-2024 · DAS-related modeling and imaging</p>
    <p class="orial-people-bio">Zhiwen Shi graduated from Chang&#39;an University with a bachelor&#39;s degree geophysics and engineering in 2021. His main research interesting is numerical simulation and imaging of distributed acoustic sensing. He likes playing basketball and cycling.</p>
  </div>
</article>
</div>

<h5 class="orial-people-cohort" id="class-of-2025">Class of 2025</h5>

<div class="orial-people-group">
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/image-20230219124536953.png" alt="Hao Zhang" loading="lazy" decoding="async">
  <div>
    <h6 class="orial-people-name">Hao Zhang</h6>
    <p class="orial-people-research">2022-2025 · Removal of &quot;black triangle&quot; noise</p>
    <p class="orial-people-bio">Hao Zhang received his Bachelor&#39;s Degree in Exploration Geophysics from China University of Petroleum (East China) in June 2022. He is currently a master&#x27;s student interested in seismic processing. He is currently studying the attenuation of black triangle noise caused by undulating surface environments.In his free time, he loves outdoor activities such as skiing and badminton.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/a508fd1e6aa5c49969a20fcc02fd152.jpg" alt="Xuanhao Chen" loading="lazy" decoding="async">
  <div>
    <h6 class="orial-people-name">Xuanhao Chen</h6>
    <p class="orial-people-research">2023-2025 · Deep learning for diffraction separation and imaging</p>
    <p class="orial-people-bio">Xuanhao Chen holds a master&#39;s degree in geophysics from China University of Petroleum (East China). Her research focuses on deep learning-based diffraction wave separation and imaging. In her spare time, she likes playing badminton and table tennis.</p>
  </div>
</article>
</div>

<h5 class="orial-people-cohort" id="class-of-2026">Class of 2026</h5>

<div class="orial-people-group">
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/20230220171640.jpg" alt="Kevin Mba" loading="lazy" decoding="async">
  <div>
    <h6 class="orial-people-name">Kevin Mba</h6>
    <p class="orial-people-research">2021-2026 · Earthquake and volcano monitoring</p>
    <p class="orial-people-bio">Kevin Zebaze graduated from University of Buea and Douala (Cameroon) with a double master degree in Applied Geology and Sustainable  Management of Coastal and Marine Environment. He join the the University of Petroleum (East China) in 2021 and majored in geological resources and geological engineering for PH.D currently. His research topics include Time-reversal techniques (i.e. back-projection), and numerical modelling . He is an anime fan, humorous, and like sports activities such as Handball and Football.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/image-20230218185042951.png" alt="Yiwei Tian" loading="lazy" decoding="async">
  <div>
    <h6 class="orial-people-name">Yiwei Tian</h6>
    <p class="orial-people-research">2022-2026 · Poroelastic modeling and imaging</p>
    <p class="orial-people-bio">Yiwei Tian graduated from Nankai University with a bachelor&#x27;s degree in Mathematics in 2015. He joined the Geoscience and Technology Department in China University of Petroleum (East China) in 2020 and majored in geological resources and geological engineering for Ph.D currently. His research topics include poroelastic forward modeling and reverse time migration. Personally,He is an anime fan and a humorous man who is good at discovering interesting things in life.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/image-20230218222926546.png" alt="Weiqi Wang" loading="lazy" decoding="async">
  <div>
    <h6 class="orial-people-name">Weiqi Wang</h6>
    <p class="orial-people-research">2022-2026 · Signal processing and Sparse-domain seismic imaging</p>
    <p class="orial-people-bio">Weiqi Wang received his Bachelor&#39;s Degree in Process Equipment &amp; Control Engineering from the Shenyang University of Technology China in June 2018, and his Master&#39;s Degree in China University of Petroleum (East China) in June 2022, and started pursuing Ph.D. in geological resources and geological engineering in 2022. His research topics include compressed sensing denoising and reconstruction, empirical mode decomposition technique, strong scattering noise suppression, and other seismic data preprocessing. He is good at playing badminton and table tennis.</p>
  </div>
</article>
<article class="orial-people-card">
  <img class="orial-people-portrait" src="people.assets/image-20230218222444995.png" alt="Chong Zhao" loading="lazy" decoding="async">
  <div>
    <h6 class="orial-people-name">Chong Zhao</h6>
    <p class="orial-people-research">2022-2026 · Least-squares migration with Point-spread function</p>
    <p class="orial-people-bio">Chong Zhao received his Bachelor&#x27;s degree and Master&#x27;s degree in Xi&#39;an Shiyou University in June 2015 and June 2022 respectively. He joined the Geosciences department at China University of Petroleum (East China) in 2022 and started pursuing Ph.D. in Geophysics. His current work includes Least-squares migration with Point-spread function and Strike-slip faults imaging in Western China.</p>
  </div>
</article>
</div>

### Openings

We are looking for qualified students with strong motivation on seismology and geophysics. Please feel free to contact Dr. Jidong Yang ([jidong.yang@upc.edu.cn](mailto:jidong.yang@upc.edu.cn)) if you have any questions about master and doctoral application at China University of Petroleum.

