---
id: 250
title: Midtown Memphis Cell Site Live!
date: 2014-10-20T17:29:45+00:00
author: ryan_turner
layout: post
guid: http://memhamwan.org/?p=250
permalink: /midtown-memphis-cell-site-live/
dsq_thread_id:
  - 3673161110
post_views_count:
  - 526
categories:
  - Uncategorized
---
### [<img class="alignright size-medium wp-image-246" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_1757352-300x222.jpg" alt="IMG_20141019_175735~2" width="300" height="222" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_1757352-300x222.jpg 300w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_1757352-1024x758.jpg 1024w" sizes="(max-width: 300px) 100vw, 300px" />](http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_1757352.jpg)In cooperation with [Tri-State Repeater Association](https://sites.google.com/site/tristaterepeaterassociation/), HamWAN Memphis Metro is pleased to announce the deployment of our first cell site, located in midtown Memphis, TN.

Three sectors and one point-to-point link have been installed on the tower above the Southern College of Optometry, offering strong coverage of midtown and downtown Memphis, West Memphis, and even parts of Bartlett and Germantown. The equipment was funded out of pocket by the board members. The [10 MHz channel plan](https://www.hamwan.org/t/tiki-index.php?page=Spectrum+Allocation&structure=HamWAN) has been selected, with the router configurations [published on Github](https://github.com/ryanturner/memhamwan-net-configs). If you&#8217;re in the red area on the map below, you potentially have line of sight to the cell site! Read on for more details about the installation and how to get connected. Currently, network connectivity speeds are limited due to tree obstruction of the PtP link; over the coming weeks we will be updating equipment to address this issue.

### The Installation

Over the 19th and 20th of October, K0RET, KK4IOH, and Sam (future ham!) spent their weekend cleaning up the tower on SCO by removing two antennas and a dish, as well as numerous runs of bad coax and hardline. With this work complete, they then mounted the cell site hardware on the tower, ran wiring to it, and attached it all. [<img class="aligncenter size-large wp-image-200" src="http://memhamwan.org/wp-content/uploads/2014/10/DSC03777-1024x681.jpg" alt="SONY DSC" width="550" height="365" />](http://memhamwan.org/wp-content/uploads/2014/10/DSC03777.jpg)   Parts used in the installation include:

  * 3x Mikrotik Metal 5SHPN with power adapter
  * 2x Ubiquiti Antenna AM-5G19 5Ghz 19dBi 120-deg Dual-Pol Sector with SMA jumpers _(dual polarity for future use; we get less than 19 dBi since we&#8217;re off the center frequency)_
  * 2x SMA to N connector adapter
  * 1x Laird SAH58-120-16DB 16dBi 120 Deg sector _(single polarity, this is the north sector)_
  * ~150 ft Ubiquiti TOUGHCable Carrier, 8x shielded Ubiquiti cat5e 8p8c connectors
  * 4x 16&#8243; section of SuperStrut
  * 8x 1&#8243; OD U Bolts, each with two nuts, plates, washers, and lockwashers
  * 6x 2&#8243; strut-mount pipe clamps
  * 3x 16ga mast
  * 1x Mikrotik SEXTANT G 5HPnD with power adapter
  * 4x RiteAV 10/100/1000 RJ-45 Shielded Surge Protector for Lightning
  * 1x Mikrotik RB260GS Switch
  * Various zipties, vinyl tape, mastic tape, velcro cable wrap, cat6 1 ft cables

### Next Steps

In the coming weeks, we&#8217;ll be helping Tri-State with some additional maintenance, fixing the downtilt of the sectors (right now they have too high of a downtilt angle), replacing the PtP link with something higher gain (right now it is severely limited due to trees), installing Flighttracker 24 receiver hardware, converting the WB4KOG-4 APRS digipeater to an igate on the HamWAN network, and adding an exterior network camera. Additionally, we&#8217;d like to return to the site to put all of the equipment on battery backup, install a server, and replace the switch with a router. We&#8217;d also like to put a PtP link from SCO to East Memphis to get WB4KOG&#8217;s D-Star repeater on the network, marking the first HamWAN connected repeater!

<https://www.youtube.com/watch?v=NyD3I_jAcJ0>

### How do I join?

HamWAN is open to the public! To learn more, join us on our [Google Group](https://groups.google.com/forum/#!forum/memhamwan). In order to connect, you&#8217;ll need some specific hardware: we recommend a [Mikrotik Metal 5SHPN](http://www.balticnetworks.com/routerboard-metal-5shpn.html) and a [Poynting 31db grid antenna](http://www.titanwirelessonline.com/Poynting-5-8GHz-31dBi-Grid-p/at-30gr-58.htm). With those on hand, configure the modem with [this guide](https://www.hamwan.org/t/tiki-index.php?page=Client+Node+Configuration&structure=HamWAN).

<div id='gallery-1' class='gallery galleryid-250 gallery-columns-5 gallery-size-thumbnail'>
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141019_144143/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144143-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141019_144143" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144143-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144143-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141019_144138/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144138-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141019_144138" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144138-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144138-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141019_144133/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144133-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141019_144133" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144133-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144133-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141019_144130/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144130-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141019_144130" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144130-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144130-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141019_144126/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144126-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141019_144126" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144126-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144126-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <br style="clear: both" />
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141019_144119/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144119-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141019_144119" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144119-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144119-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141019_144112/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144112-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141019_144112" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144112-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144112-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141019_144106/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144106-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141019_144106" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144106-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144106-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141019_144104/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144104-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141019_144104" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144104-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144104-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141019_144102/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144102-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141019_144102" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144102-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_144102-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <br style="clear: both" />
  
  <dl class='gallery-item'>
    <dt class='gallery-icon portrait'>
      <a href='http://memhamwan.org/img_20141012_173849/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141012_173849-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141012_173849" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141012_173849-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141012_173849-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/sony-dsc-21/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/DSC03785-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="SONY DSC" srcset="http://memhamwan.org/wp-content/uploads/2014/10/DSC03785-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/DSC03785-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/sony-dsc-22/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/DSC03786-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="SONY DSC" srcset="http://memhamwan.org/wp-content/uploads/2014/10/DSC03786-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/DSC03786-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141012_172321/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141012_172321-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141012_172321" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141012_172321-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141012_172321-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/img_20141012_172322/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141012_172322-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141012_172322" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141012_172322-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141012_172322-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <br style="clear: both" />
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/midtown-memphis-cell-site-live/img_20141019_1757352/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_1757352-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="IMG_20141019_175735~2" srcset="http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_1757352-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/IMG_20141019_1757352-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/sony-dsc-19/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/DSC03783-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="SONY DSC" srcset="http://memhamwan.org/wp-content/uploads/2014/10/DSC03783-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/DSC03783-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/sony-dsc-2/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/DSC03758-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="SONY DSC" srcset="http://memhamwan.org/wp-content/uploads/2014/10/DSC03758-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/DSC03758-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://memhamwan.org/sony-dsc-3/'><img width="150" height="150" src="http://memhamwan.org/wp-content/uploads/2014/10/DSC03762-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="SONY DSC" srcset="http://memhamwan.org/wp-content/uploads/2014/10/DSC03762-150x150.jpg 150w, http://memhamwan.org/wp-content/uploads/2014/10/DSC03762-60x60.jpg 60w" sizes="(max-width: 150px) 100vw, 150px" /></a>
    </dt>
  </dl>
  
  <br style='clear: both' />
</div>