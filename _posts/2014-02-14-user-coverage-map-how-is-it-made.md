---
id: 80
title: 'User Coverage Map: How is it Made?'
date: 2014-02-14T04:53:52+00:00
author: ryan_turner
layout: post
guid: http://memhamwan.org/?p=80
permalink: /user-coverage-map-how-is-it-made/
dsq_thread_id:
  - 3593388841
post_views_count:
  - 1040
categories:
  - Uncategorized
---
Today I document how I generate my coverage maps, and I want to take my maps a step farther to calculate which amateurs fall in the coverage area. I&#8217;ll describe the complete process using a potential cell site &#8220;Crosstown&#8221;.

<h3 style="clear: both;">
  Model the coverage
</h3>

[<img class="size-medium wp-image-90 alignleft" alt="Crosstown" src="http://memhamwan.org/wp-content/uploads/2014/02/Crosstown1-300x300.png" width="300" height="300" srcset="http://memhamwan.org/wp-content/uploads/2014/02/Crosstown1-150x150.png 150w, http://memhamwan.org/wp-content/uploads/2014/02/Crosstown1-300x300.png 300w, http://memhamwan.org/wp-content/uploads/2014/02/Crosstown1-1024x1024.png 1024w, http://memhamwan.org/wp-content/uploads/2014/02/Crosstown1-60x60.png 60w" sizes="(max-width: 300px) 100vw, 300px" />](http://memhamwan.org/wp-content/uploads/2014/02/Crosstown1.png)
  
For RF modelling, I use [Radio Mobile](http://www.cplus.org/rmw/english1.html). With measured performance data of the antennas and specified radio performance, I&#8217;m able to use accurate models values for our equipment. I use [SRTM](http://www2.jpl.nasa.gov/srtm/) as the elevation data source.  I generate combined Cartesian radio coverage maps for all 3 sectors using these settings: [radio-mobile-coverage-files](http://memhamwan.org/wp-content/uploads/2014/02/radio-mobile-coverage-files.zip).
  
_Quick stats: Crosstown&#8217;s antenna height is 57.302 m AGL, mobile node is 10 m AGL; systems freq range is 5845 &#8211; 5925 MHz; default surface refractivity, ground conductivity, and relative ground permittivity; the systems tx power is 1.3 watts, receiver threshold is 70.7946 uV; client nodes antenna gain is 29 dBi; sector&#8217;s antenna gain is 14 dBi. _

Then I combined these images and converted them to grayscale to yield 1 raster for the site&#8217;s coverage area. The final output is pictured to the left.

<h3 style="clear: both;">
  Get the FCC ULS data
</h3>

I&#8217;ve also exported the ULS database for active hams with mailing addresses in Arkansas, Mississippi, and Tennessee. Using Bing! and a [short script](https://gist.github.com/ryanturner/8996225) that I wrote in Python, I geolocated all of the addresses for the records, yielding a massive [csv file (actually it&#8217;s a TSV)](http://memhamwan.org/wp-content/uploads/2014/02/tristate_amateurs_12_feb_14_with_geolocation.csv) with callsign, name, address, city, state, latitude, and longitude for every active licensed amateur operator in the tristate area.

### Get Quantum GIS setup with data

[<img class="alignright size-medium wp-image-92" alt="coverage-map-hams-overlayed" src="http://memhamwan.org/wp-content/uploads/2014/02/coverage-map-hams-overlayed-300x240.png" width="300" height="240" />](http://memhamwan.org/wp-content/uploads/2014/02/coverage-map-hams-overlayed.png)

I created a project with [US county maps](http://nationalatlas.gov) added for reference, and then using the &#8220;Add Delimited Text Layer&#8221; plugin I imported the CSV files made previously (here&#8217;s the results: [tristate-amateurs-12feb-shapefile](http://memhamwan.org/wp-content/uploads/2014/02/tristate-amateurs-12feb-shapefile.zip)). After adding transparency (85%) to the point symbols, it turned into a sort of &#8220;heat map&#8221;, as pictured to the right:

Next is to import the coverage map from Radio Mobile. Sadly, the auto-generated files do **not** import properly into QGIS, so instead what I did was convert the PNG file into a georeferenced PNG using gdal_translate and the following command (your lat/long of ll and ur should vary!):
  
`gdal_translate -of PNG -a_srs EPSG:4326 \<br />
-a_ullr -90.59023 35.58994 -89.48978 34.69006 \<br />
Crosstown.png Crosstown-geo.png`

I imported the georeferenced PNG file into QGIS as a raster layer. <span style="line-height: 1.5em;">In the Layer Properties I set render to &#8220;single band gray&#8221; with Gray band being &#8220;Band 2&#8221;, and I enabled &#8220;Invert color map&#8221;. I added the transparency pixels to make the white areas transparent. Finally, I added some global transparency to make it easier to see. With that, I got the output pictured to the right.</span>

<h3 style="clear: both;">
  Analyze the raster, join the vectors
</h3>

Now I used the &#8220;point sampling tool&#8221; plugin to find all of the amateurs that fell within the coverage area. This created a point vector layer (download here: [crosstown-coverage-points-feb-12](http://memhamwan.org/wp-content/uploads/2014/02/crosstown-coverage-points-feb-12.zip)) that contained the existing points with a new value: the color that exists at that point. With this data, we get a count of the number of active amateurs who have mailing addresses as geolocated by Bing! that fall within our calculated coverage map. For bonus points, I&#8217;d like to find out who is in coverage and who is not (right now its just a list of points and coverage map color; that doesn&#8217;t give me opportunity for spot checking). Since the point sampling tool created a separate layer, we have to use the vector tool &#8220;Join attributes by location&#8221;.

<h3 style="clear: both;">
  Out comes data
</h3>

With the [result](http://memhamwan.org/wp-content/uploads/2014/02/amateurs-with-coverage-12-feb.csv), we&#8217;re able to finally see all of the data together. In my case, since the coverage map&#8217;s color was inverted, a value of &#8220;255&#8221; meant that the point is in the coverage area. With that, we can conclude that **1,344 active licensed amateurs have their mailing addresses within the coverage area of our first potential site**.

With this new data, we could potentially make a web interface for a user  to query a callsign and return what sites coverage areas they are in. There is more work to be done! I&#8217;ve attached all of the source files I could think of for this work. Be sure to let me know if I missed one or if you have a question about this by leaving a comment below!