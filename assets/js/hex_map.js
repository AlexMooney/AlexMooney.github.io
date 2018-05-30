var svg = d3.select("svg"),
    margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var hexbin24 = d3.hexbin()
    .radius(24)
    .extent([[0, 0], [width, height]]);

var hexbin6 = d3.hexbin()
    .radius(6)
    .extent([[0, 0], [width, height]]);

g.append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);


g.append("g")
    .attr("class", "hexmesh")
    .attr("clip-path", "url(#clip)")
  .selectAll("path")
  .data([1])
  .enter().append("path")
    .attr("d", hexbin24.mesh());

g.append("g")
    .attr("class", "hexmesh-fine")
    .attr("clip-path", "url(#clip)")
  .selectAll("path")
  .data([1])
  .enter().append("path")
    .attr("d", hexbin6.mesh());
