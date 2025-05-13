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

    //let pict = drawSmile(svg);
    //pict.attr("transform", `translate(${option.x_start-option.x_margin},${option.y_start-option.y_margin})`); 

});

function clear2() {
    const svg = d3.select("svg");
    svg.selectAll('*').remove();
}
function clear3() {
    d3.select("#smile")
}




function f() {


    const svg = d3.select("svg")
    let pict = drawSmile(svg);
    //let pict = d3.select("#smile");

    console.log(d3.select("#rotate_finish").property("value"));
    path = drawPath();
    pict.attr("transform", `rotate(${d3.select("#rotate").property("value")},0, 0) scale(${d3.select("#scale").property("value")})`)
        .transition()
        .ease(d3.easeLinear)
        .duration(parseFloat(d3.select("#speedAnimation").property("value")))
        .attrTween('transform', translateAlong(path.node()));

    /*let path = drawPath();	
    pict.transition()
    .ease(d3.easeLinear) // установить в зависимости от настроек формы
    .duration(d3.select("#speedAnimation").property("value"))
    .attrTween('transform', translateAlong(path.node()));
    */

}

