---
id: 650
title: 'How Winter Weather Impacts HamWAN: The Past Two Weeks in Review'
date: 2015-03-08T05:44:09+00:00
author: ryan_turner
layout: post
guid: http://memhamwan.org/?p=650
permalink: /how-winter-weather-impacts-hamwan-the-past-two-weeks-in-review/
dsq_thread_id:
  - 3591051669
post_views_count:
  - 255
categories:
  - Uncategorized
---
**Over the last two weeks, Memphis has had some severe weather. While the MemHamWAN network is still small, it does have a pair of point-to-point links and a cell site, with equipment deployed at 3 separate sites currently.**

<div id="attachment_652" style="width: 560px" class="wp-caption aligncenter">
  <a href="http://memhamwan.org/wp-content/uploads/2015/03/2015-03-051.jpg"><img class="wp-image-652 size-large" src="http://memhamwan.org/wp-content/uploads/2015/03/2015-03-051-768x1024.jpg" alt="2015-03-05(1)" width="550" height="733" srcset="http://memhamwan.org/wp-content/uploads/2015/03/2015-03-051-225x300.jpg 225w, http://memhamwan.org/wp-content/uploads/2015/03/2015-03-051-768x1024.jpg 768w" sizes="(max-width: 550px) 100vw, 550px" /></a>
  
  <p class="wp-caption-text">
    Our SCO site had a radio that required rebooting &#8212; we travelled to the site to perform the reboot, which immediately restored the link. This is a troubling issue to encounter, and we expect to troubleshoot the issue soon.
  </p>
</div>

We found that despite heavy freezing rain, our equipment continued to perform as engineered. We had two service outages for the RET to SCO link, which currently is the only route to the internet in our network. We&#8217;re working to revise this by introducing a new uplink north of us that will be connected to the HIL site. Here&#8217;s how our network was impacted by the numbers from 2/16 to 3/7:
  


<div id="attachment_651" style="width: 234px" class="wp-caption alignright">
  <a href="http://memhamwan.org/wp-content/uploads/2015/03/2015-03-05.jpg"><img class="size-medium wp-image-651" src="http://memhamwan.org/wp-content/uploads/2015/03/2015-03-05-224x300.jpg" alt="PTPSCO.RET is currently tree mounted; while this has provided the opportunity for a link not otherwise possible, it has resulted in many two alignment issues so far." width="224" height="300" /></a>
  
  <p class="wp-caption-text">
    PTPSCO.RET is currently tree mounted; while this has provided the opportunity for a link not otherwise possible, it has resulted in many two alignment issues so far.
  </p>
</div>

  * All three sites maintained utility power 100.0000%, and two sites had immediate-failover battery power available with more than a days capacity
  * SCO and HIL sites stayed connected 100.0000%
  * RET site stayed connected to the internet 100.0000%
  * The RET to SCO link had approximately 92% uptime
  * There were no service outages besides those caused from the RET to SCO link

Clearly, the link from RET to SCO is our weakest point in the network. At one point, there was a significant outage as a result of a dish becoming misaligned due to high winds. At another point, there was a small outage as a result of a radio needing to be power cycled.

Going forward, we are working to improve the link quality and stability by introducing an intermediate hop that has line-of-sight to both sites. This will permit the relocation of the link that was blown out of alignment to drastically reduce the risk of recurrence. Additionally, we will be troubleshooting the radio that required power cycling, as this is not an expected behavior.

Overall, the network performed well during the storms. There are lessons learned for the network that we are working to immediately address to improve the network quality; look for more posts in the future providing updates on this situation.