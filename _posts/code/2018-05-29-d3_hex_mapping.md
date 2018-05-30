---
title: D3 Hex Mapping
layout: default
date: '2018-05-29T19:40:28 -07:00'
categories: [web, rpgs]
---

<style>
svg {
  background: #fff;
}

.hexmesh {
  stroke: #000;
  stroke-width: 0.5px;
  fill: none;
}

.hexmesh-fine {
  stroke: #000;
  stroke-width: 0.25px;
  fill: none;
}
</style>

I've been looking at a good number of old school RPG hex maps lately, and was
wondering what kind of effort it would take to make on in D3, that would
ultimately read the hex information from a text file and then render it to the
screen.

<svg width="600" height="460"></svg>

I discovered that [d3-hexbin][1] is a plugin that can do a lot of the lifting
for you.  Unfortunately, it does not yet support [rotating the hexes][2].
There were relatively few examples online of using the mesh feature, but it
is just another method that produces an SVG path.  I'm not very proud of the
"data" that I used to attach it to the groups, but it's just a demo, so I'll
live with the hack.

A super useful resource for working with hex maps is over on the [Red Blob
Games Blog][3].  I may try to use the handy math they provide to construct a
hex overlay on the earth using geojson.  If that works out, one could make
really interesting gaming maps by using real GIS data.

[1]: https://github.com/d3/d3-hexbin
[2]: https://github.com/d3/d3-hexbin/issues/8
[3]: https://www.redblobgames.com/grids/hexagons/

<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://d3js.org/d3-hexbin.v0.2.min.js"></script>
<script src="{{ '/assets/js/hex_map.js?v=' | append: site.github.build_revision | relative_url }}"></script>
