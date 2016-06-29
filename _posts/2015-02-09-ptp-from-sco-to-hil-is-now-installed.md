---
id: 597
title: PtP from SCO to HIL is now installed
date: 2015-02-09T04:33:05+00:00
author: ryan_turner
layout: post
guid: http://memhamwan.org/?p=597
permalink: /ptp-from-sco-to-hil-is-now-installed/
dsq_thread_id:
  - 3592234994
post_views_count:
  - 777
categories:
  - Physical Plant
---
[<img class="alignleft size-medium wp-image-598" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4774-200x300.jpg" alt="IMG_4774" width="200" height="300" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4774-200x300.jpg 200w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_4774-683x1024.jpg 683w" sizes="(max-width: 200px) 100vw, 200px" />](http://memhamwan.org/wp-content/uploads/2015/02/IMG_4774.jpg)[<img class="alignright size-medium wp-image-599" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4777-300x200.jpg" alt="IMG_4777" width="300" height="200" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4777-300x200.jpg 300w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_4777-1024x683.jpg 1024w" sizes="(max-width: 300px) 100vw, 300px" />](http://memhamwan.org/wp-content/uploads/2015/02/IMG_4777.jpg)
  
Today, K0RET, K4SOF, K4VIA, and KK4IOH installed the link connecting the Southern College of Optometry (SCO) and our East Memphis (HIL) cell sites. The link is comprised of a Ubiquiti 5G30 dish and Mikrotik Netmetal on each side. It is the first 802.11 ac link in our network, dual polarity with 80 MHz channel width. It operates as an FCC part 15 link, encrypted and unrestricted from part 97 regulations.

This link will serve as a way to extend our network, as we add additional cell sites to the north and east. Initially, before we deploy the cellular equipment at HIL, it will serve as a network connection for the D-Star repeater that Tri-State Repeater Association has currently at HIL.

Additionally, at the same time Sam focused on improving cable management at the SCO site. He created new cables that were appropriate length for the cabinet, and he installed the new replacement RB2011-UiAS router for SCO. This replaces two previously daisy chained 100 Mbit switches.

While the East Memphis side of the link was quite straightforward, with an available mast easily accepting the dish and radio, SCO&#8217;s link was on a Rohn 25G tower. Sadly, the tower is 1.25&#8243; diameter, and the dishes cannot mount to such small diameter masts. As a result, additional mounting hardware is required; Superstrut and 2-3/8&#8243; mast are bolted to the tower using 1&#8243; diameter U bolts, and then the antenna and radio are mounted to the mast. This makes for a small standoff from the tower, but added weight and complexity of installation. This site additionally needed to be mounted low to ensure windload is transferred to lower, more stable sections of the tower. It just slightly above the parapet.

<div id='gallery-4' class='gallery galleryid-597 gallery-columns-3 gallery-size-thumbnail'>
  <dl class='gallery-item'>
    <dt class='gallery-icon portrait'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/2015-02-08-1/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/2015-02-08-1-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="2015-02-08 (1)" srcset="http://memhamwan.org/wp-content/uploads/2015/02/2015-02-08-1-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/2015-02-08-1-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/dwugpbt-1/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/dWUGPbT-1-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="dWUGPbT (1)" srcset="http://memhamwan.org/wp-content/uploads/2015/02/dWUGPbT-1-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/dWUGPbT-1-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/img_4781/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4781-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_4781" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4781-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_4781-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <br style="clear: both" />
</div>

Update on 2/14/2015
  
Michael, Ryan, and Sam worked again today to improve the link. It was brought to the point of link saturation, requiring that the radio power levels be turned down! The links are now running around -52 dBm received signal, dual polarity transmitting at 22 dBm. Speed tests indicate that the useful speed of the link is greater than 100 Mbps, but there is no way to properly determine the link&#8217;s maximum throughput until we have more equipment &#8212; the CPU on the radios simply can&#8217;t generate traffic quickly enough to run it at full capacity.

<div id='gallery-5' class='gallery galleryid-597 gallery-columns-3 gallery-size-thumbnail'>
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/img_20150214_142005/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_142005-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20150214_142005" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_142005-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_142005-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/img_20150214_142001/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_142001-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20150214_142001" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_142001-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_142001-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/img_20150214_141957/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141957-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20150214_141957" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141957-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141957-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <br style="clear: both" />
  
  <dl class='gallery-item'>
    <dt class='gallery-icon portrait'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/img_20150214_141949/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141949-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20150214_141949" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141949-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141949-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon portrait'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/img_20150214_141944/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141944-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20150214_141944" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141944-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141944-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon portrait'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/img_20150214_141938/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141938-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20150214_141938" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141938-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_141938-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <br style="clear: both" />
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/img_20150214_153207/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_153207-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20150214_153207" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_153207-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_20150214_153207-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/img_4793/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4793-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_4793" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4793-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_4793-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/img_4791/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4791-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_4791" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4791-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_4791-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <br style="clear: both" />
  
  <dl class='gallery-item'>
    <dt class='gallery-icon portrait'>
      <a href='http://memhamwan.org/ptp-from-sco-to-hil-is-now-installed/img_4790/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4790-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_4790" srcset="http://memhamwan.org/wp-content/uploads/2015/02/IMG_4790-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2015/02/IMG_4790-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <br style='clear: both' />
</div>