class Walker {
    constructor(x, y, m) {
        this.pos = createVector(x,y);
        this.vel = createVector(0, 0);
        this.acc =  createVector(0, 0);
        this.mass = m;
        this.r = sqrt(this.mass) * 10;
    }

    applyForce(force) {
        let f = force.div(this.mass);
        this.acc.add(f);
    }

    edges() {
        if(this.pos.y >= height - this.r) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
        }
        if(this.pos.x >= width - this.r) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
        }
        if(this.pos.x <= 0 + this.r) {
            this.pos.x = this.r;
            this.vel.x *= -1;
        }
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    show() {
        stroke(random(255), random(255), random(255));
        strokeWeight(2);
        fill(100, 100);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}