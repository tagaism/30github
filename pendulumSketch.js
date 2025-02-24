let angle;

let angleV = 0;
let angleA = 0.0001;

let bob;
let len;
let origin;
let gravity = 1;
function setup() {
    createCanvas(1700, 800);
    origin = createVector(850, 0);
    angle = PI/2.2;
    bob = createVector();
    len = 500;
}

function draw() {
    background(0);
    let force = gravity * sin(angle) / len;
    angleA = -1 * force;
    angleV += angleA;
    angle += angleV;
    bob.x = len * sin(angle) + origin.x;
    bob.y = len * cos(angle) + origin.y;

    stroke(255);
    strokeWeight(2);
    line(origin.x, origin.y, bob.x, bob.y);
    circle(bob.x, bob.y, 43);
} 