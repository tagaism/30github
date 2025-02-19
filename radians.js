let angle = 0;
let angleV = -0.9;
let angleA = 0.001;

function setup() {
    createCanvas(400, 400);
    angleMode(RADIANS);
}

function draw() {
    background(146, 84, 159);
    noStroke();
    fill(240, 99, 145);
    rectMode(CENTER);
    translate(200, 200);
    rotate(angle);
    rect(0, 0, 128, 32)
    angleV += angleA;
    angle += angleV;
}