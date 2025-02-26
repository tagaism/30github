class Particle {
    constructor(x, y) {
        this.locked = false;
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.position = createVector(x, y);
        this.mass = 1;
    }

    applyForce(force) {
        let f = force.copy();
        f.div(this.mass);
        this.acceleration.add(f);
    }

    update() {
        if(!this.locked) {
            this.velocity.mult(0.99);
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.acceleration.mult(0);
        }
        // this.lifespan -= 2.0;
    }
    
    show() {
        stroke(255);
        strokeWeight(1);
        fill(255);
        ellipse(this.position.x, this.position.y, 3);
    }
}