class Particle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.acceleration = createVector(0, 0);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(0.5, 6));
        // this.mass = 1;
        this.r  = random(10, 50);
        this.lifetime = random(20, 150);
    }

    finished() {
        return(this.lifetime < 0);
    }

    applyForce(force) {
        let f = force.copy();
        f.div(this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.set(0, 0);
        this.lifetime -= 1;
    }
    
    show() {
        stroke(255);
        strokeWeight(1);
        fill(random(0,250), random(0,250), random(0,250), 100)
        ellipse(this.position.x, this.position.y, this.r);
    }

    edges() {
        if(this.position.y <= 0 + this.r) {
            this.position.y = this.r;
            this.velocity.y *= -1;
        }
        if(this.position.y >= height - this.r) {
            this.position.y = height - this.r;
            this.velocity.y *= -1;
        }
        if(this.position.x >= width - this.r) {
            this.position.x = width - this.r;
            this.velocity.x *= -1;
        }
        if(this.position.x <= 0 + this.r) {
            this.position.x = this.r;
            this.velocity.x *= -1;
        }
    }
}