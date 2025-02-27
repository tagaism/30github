let particles = [];
let springs = [];
let spacing = 1;
let gravity;
let k = 0.1;

function setup() {
    createCanvas(1700, 1000);
    for(let i = 0; i < 50; i++) {
        particles[i] = new Particle(600, i * spacing);
        if(i !== 0) {
            let a = particles[i];
            let b = particles[i - 1];
            let spring = new Spring(k, spacing, a, b);
            springs.push(spring);
        }
        particles[0].locked = true;
    }
    gravity = createVector(0, 0.06);
    // bob = new Particle(990, 400);
    // anchor = new Particle(750, 0);
    // velocity = createVector(0, 0);
    // spring = new Spring(0.01, 200, bob, anchor);
}

function draw() {
    background(0);
    for(let s of springs) {
        s.update();
        // s.show();
    }
    noFill()
    stroke(255);
    strokeWeight(4);
    beginShape()
    let head = particles[0];
    curveVertex(head.position.x, head.position.y);
    for(let p of particles) {
        p.applyForce(gravity);
        p.update();
        curveVertex(p.position.x, p.position.y);
        // p.show();
    }
    let tail = particles[particles.length - 1];
    curveVertex(tail.position.x, tail.position.y);
    endShape();
    if(mouseIsPressed) {
        tail.position.x = mouseX;
        tail.position.y = mouseY;
        tail.velocity.set(0, 0);
    }
    // spring.show();
    // spring.update();
    // bob.show();
    // bob.update();
    // anchor.show();
    // anchor.update();
}