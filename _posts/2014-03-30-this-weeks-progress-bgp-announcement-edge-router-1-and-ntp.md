---
id: 125
title: 'This week&#8217;s progress: BGP announcement, edge-router 1, and NTP!'
date: 2014-03-30T20:09:18+00:00
author: ryan_turner
layout: post
guid: http://memhamwan.org/?p=125
permalink: /this-weeks-progress-bgp-announcement-edge-router-1-and-ntp/
dsq_thread_id:
  - 3728935087
post_views_count:
  - 259
categories:
  - Uncategorized
---
This week has been a fun week for the team. We received our letter of authorization from Amateur Radio Digital Communications Inc for our 44.34.128.0/21 address space, and thanks to the folks at [Threshold Communications](http://thresholdcommunications.com) and [HamWAN PSDR](http://www.hamwan.org), [it is now being announced](http://bgp.he.net/net/44.34.128.0/21)! This setup gets us right to the edge of HamWAN PSDR, so it&#8217;s convenient for working with them. For getting in/out to the rest of the internet, it&#8217;s sub-optimal due to the added latency (Seattle isn&#8217;t terribly close to Memphis). We still need to find a local partner to announce the space and bandwidth for edge routing.

Currently on network there is only the two edge routers (Memphis Metro&#8217;s and PSDR&#8217;s) and an NTP server setup using anycast, reachable at 44.34.132.2 and 44.34.133.2.

We&#8217;re shopping for an affordable server for our first cell site. Still on the to-buy list for cell 1 is: server, 2x sector antennas, and uplink PtP gear. Almost there!