let particles = [];
function setup() {
    createCanvas(1700, 900);
}

function draw() {
    background(0);
    for(let i = 0; i < 1; i++) {
        particles.push(new Particle(832, 382));
    }

    let gravity = createVector(0, 1);
    for(let p of particles) {
        p.applyForce(gravity);
        p.update();
        p.edges();
        p.show();
    }
    console.log(particles.length);
    for(let i = particles.length - 1; i >= 0; i--) {
        if(particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}