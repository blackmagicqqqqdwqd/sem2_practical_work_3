d3.select(window).on("load", function () {
    const width = 800;
    const height = 800;

    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height);

    let option = {
        x_start: 300,
        y_start: 100,
        x_margin: 10,
        y_margin: 10
    }

});

function clear2() {
    const svg = d3.select("svg");
    svg.selectAll('*').remove();
}


function startAnimation() {

    const svg = d3.select("svg")
    let pict = drawSmile(svg);
   
    path = drawPath();
    pict.attr("transform", `rotate(${d3.select("#rotate").property("value")},0, 0) scale(${d3.select("#scale").property("value")})`)
        .transition()
        .ease(d3.easeLinear)
        .duration(parseFloat(d3.select("#speedAnimation").property("value")))
        .attrTween('transform', translateAlong(path.node()));

}

