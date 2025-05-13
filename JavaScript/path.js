
function createPathCircle(x_start, y_start) {
    
    let data = [];
    let a = 100;

    for (let t = 0; t <= 2 * Math.PI; t += 0.1) {
        data.push({
            x: x_start + a * (2 * Math.sin(t) - Math.sin(2 * t)), // Заменили x и y местами
            y: y_start - a * (2 * Math.cos(t) - Math.cos(2 * t))  // Изменили знак для y
        });
    }

    return data
}

let drawPath = () => {

    // создаем массив точек
    const dataPoints = createPathCircle(300, 200);

    const line = d3.line()
        .x((d) => d.x)
        .y((d) => d.y);
    const svg = d3.select("svg")

    // создаем путь на основе массива точек	  
    const path = svg.append('path')
        .attr('d', line(dataPoints))
        .attr('stroke', 'none')
        .attr('fill', 'none')
        .attr("stroke-width", "2");


    return path;
}

function translateAlong(path) {

    let start_scale = parseFloat(d3.select("#scale").property("value"));
    let start_rotate = parseFloat(d3.select("#rotate").property("value"));
    const length = path.getTotalLength();
    return function () {
        return function (t) {

            const { x, y } = path.getPointAtLength(t * length);
            let rotateAngle = start_rotate + t * (d3.select("#rotate_finish").property("value") - start_rotate); // Угол вращения от 0 до 360
            let scale = start_scale + t * (d3.select("#scale_finish").property("value") - start_scale);

            return `translate(${x - scale * 50}, ${y - scale * 50}) scale(${scale}) rotate(${rotateAngle}, ${50}, ${50})`;

        };
    };
}