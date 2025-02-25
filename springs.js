let bob;
let anchor;
let velocity;
let restLength = 500;
let k = 0.01;
let gravity;

function setup() {
    createCanvas(1700, 800);
    bob = createVector(990, 400);
    anchor = createVector(750, 0);
    velocity = createVector(0, 0);
    gravity = createVector(0, 0.6);
}

function draw() {
    background(112, 50, 126);
    strokeWeight(4);
    stroke(255);
    line(anchor.x, anchor.y, bob.x, bob.y);
    noStroke();
    fill(45, 197, 244);
    circle(anchor.x, anchor.y, 30);
    circle(bob.x, bob.y, 64);

    if(mouseIsPressed) {
        bob.x = mouseX;
        bob.y = mouseY;
        // velocity.set(0, 0);
    }

    let force = p5.Vector.sub(bob, anchor);
    let x = force.mag() - restLength;
    force.normalize();
    force.mult(-1 * k * x);

    //Newtons 2nd law
    //F = m * a => F = A
    velocity.add(force);
    velocity.add(gravity);
    bob.add(velocity)
    velocity.mult(0.99);
}