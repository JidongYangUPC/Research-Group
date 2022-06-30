---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 130

title: Contact
subtitle:

content:
  # Automatically link email and phone or display as text?
  autolink: true
  
  # Email form provider
  form:
    provider: netlify
    formspree:
      id:
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: false

  # Contact details (edit or remove options as required)
  email: jidong.yang@upc.edu.cn
  phone: 15964210517
  address:
    street: No.66 Changjiang West Road
    city: Qingdao
    region: Shandong
    postcode: '94305'
    country: China
    country_code: CN
  coordinates:
    latitude: '118.3218'
    longitude: '37.2750'
  directions: Enter Building Comprehensive laboratory and take the stairs to Office D313 on Floor 3
  appointment_url: 'https://calendly.com'
  contact_links:
    - icon: linkedin
      icon_pack: fab
      name: DM Me
      link: https://www.linkedin.com/in/jidong-yang-144088136/
    - icon: video
      icon_pack: fas
      name: Zoom Me
      link: 'https://zoom.com'

design:
  columns: '2'
---
