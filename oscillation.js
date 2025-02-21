let angles = [];
let angleV = 0.05;
let r = 8;

function setup() {
    createCanvas(1700, 800);
    let total = floor(width / (r * 2));
    for(let i = 0; i < total + 1; i++) {
        angles[i] = map(i, 0, total, 0, 2 * TWO_PI);
        angleV[i] = 0.01 + i / 100;
    }
}

function draw() {
    background(0, 1);
    translate(850, 400);
    // fill(252, 234, 24);
    noFill();
    stroke(252, 234, 24);
    beginShape;
    for(let i = 0; i < angles.length; i++) {
        let y = map(sin(angles[i]), -1, 1, -400, 400);
        strokeWeight(4);
        let x = map(i, 0, angles.length, -850, 850);
        // line(x, 0, x, y);
        // circle(x, y, r * 2);
        vertex(x, y);
        angles[i] += 0.02;
        // angles[i] += angleV[i];
    }
    // endShape;
}