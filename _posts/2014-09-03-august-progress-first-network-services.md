---
id: 140
title: 'August Progress: First Network Services'
date: 2014-09-03T02:31:28+00:00
author: ryan_turner
layout: post
guid: http://memhamwan.org/?p=140
permalink: /august-progress-first-network-services/
post_views_count:
  - 289
dsq_thread_id:
  - 3827868298
categories:
  - Uncategorized
---
<div style="width: 410px" class="wp-caption alignleft">
  <img src="http://retmonitor1.memhamwan.net/cacti/graph_image.php?action=view&local_graph_id=27&rra_id=1" alt="" width="400" height="210" />
  
  <p class="wp-caption-text">
    An example graph of network traffic on the WAN port of our edge router; nearly all of this traffic so far is &#8220;white noise&#8221; from automated attackers and scanners on the internet.
  </p>
</div>In August 2014, HamWAN Memphis Metro, Inc began installing the infrastructure necessary to allow for the impending cell site deployments in the greater Memphis, TN region. The following is a brief overview of those activities:

  * The beginning of our server infrastructure came online, comprised of HP Proliant machines so far
  * Authoritative DNS was installed (ns1.memhamwan.net and ns2.memhamwan.net point to the anycast IPs)
  * rDNS for 44.34.128.0/21 was delegated to our authoritative DNS servers
  * Recursive DNS was installed (dns.memhamwan.net, anycast as well; only serving 44/8 IPs)
  * Cacti monitoring tool was installed (retmonitor1.memhamwan.net; this is a low availability service; guest user is hamwan:hamwan)
  * A server for a future D-Star reflector was provisioned (retdstar1.memhamwan.net)
  * The [hamwan portal](http://portal.memhamwan.net/) was installed
  * An application for an FCC Amateur Club Station License was submitted
  * An application for club ARRL affiliation was submitted

<div id="attachment_143" style="width: 310px" class="wp-caption alignright">
  <a href="http://memhamwan.org/wp-content/uploads/2014/09/Screenshot-from-2014-09-02-212139.png"><img class="size-medium wp-image-143" src="http://memhamwan.org/wp-content/uploads/2014/09/Screenshot-from-2014-09-02-212139-300x128.png" alt="The HamWAN Admin Portal controls the authoritative DNS server, and in the future will also be used to control firewall rules for the network." width="300" height="128" /></a>
  
  <p class="wp-caption-text">
    The HamWAN Admin Portal controls the authoritative DNS server, and in the future will also be used to control firewall rules for the network.
  </p>
</div>


  
NTP servers will be setup this week on anycast at ntp.memhamwan.net, and a low-availability asterisk instance will be setup as well. Even before those are in place, though, we have all of the infrastructure pieces necessary to deploy our first cellsite.

Next weekend, the first cell site&#8217;s hardware will be assembled, configured, and brought online in our staging lab. This cell site will be solar-powered, so we plan to keep the site alive in our staging lab until a few days before production deployment.

The HamWAN Portal is the tool used to manage all DNS entries, and in the future it will also be the tool for managing client-node authentication & firewall rules.

HamWAN Memphis Metro, Inc is a Tennessee non-profit that is creating an educational, experimental, and emergency wireless microwave network. Donations of any kind are appreciated, including of time and effort. To get involved today, join our [Google Group](https://groups.google.com/forum/#!forum/memhamwan).