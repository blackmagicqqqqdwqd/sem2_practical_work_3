// создаем изображение смайлик
// рисуем его относительно точки (0, 0)
function drawSmile(svg) {
  let smile = svg.append("g")
      .style("fill", "black")
      .attr("id", "smile");

  smile.append("circle")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r", 47)
      .attr("fill", "#d0e6f9")
      .attr("stroke", "#000")
      .attr("stroke-width", 1);

  smile.append("rect")
      .attr("x", 33)
      .attr("y", 40)
      .attr("width", 13)
      .attr("height", 13)
      .attr("fill", "#333");

  smile.append("rect")
      .attr("x", 47)
      .attr("y", 43)
      .attr("width", 20)
      .attr("height", 10)
      .attr("fill", "#666");

  smile.append("rect")
      .attr("x", 52)
      .attr("y", 37)
      .attr("width", 3)
      .attr("height", 7)
      .attr("fill", "#444");

  smile.append("circle")  
      .attr("cx", 37)
      .attr("cy", 57)
      .attr("r", 3.3)
      .attr("fill", "#000");

  smile.append("circle")  
      .attr("cx", 57)
      .attr("cy", 57)
      .attr("r", 3.3)
      .attr("fill", "#000");

  smile.append("ellipse")
      .attr("cx", 53)
      .attr("cy", 32)
      .attr("rx", 3.3)
      .attr("ry", 1.6)
      .attr("fill", "gray")
      .attr("opacity", 0.5);

  smile.append("line")
      .attr("x1", 37)
      .attr("y1", 57)
      .attr("x2", 57)
      .attr("y2", 57)
      .attr("stroke", "#222")
      .attr("stroke-width", 1);

  smile.append("polygon")
      .attr("points", "67,43 67,53 60,53 60,43")
      .attr("fill", "#555");

  return smile;
}
