let angle = 0;
let r = 150;
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0, 10);
    stroke(255);
    strokeWeight(4);
    noFill();
    translate(200, 200);
    let r = 150;
    circle(0, 0, r * 2);

    strokeWeight(35);
    stroke(252, 239, 33);
    let x = r * cos(angle);
    let y = r * sin(angle);
    point(x, y);
    r -= 2;
    angle += 0.01
}