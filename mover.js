class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x,y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(5);
        this.acc = createVector(0, 0);
        this.mass = m;
        this.r = sqrt(this.mass) * 2;

        this.angle = 0;
        this.angleV = 0;
        this.angleA = 0;
    }

    attract(mover) {
        let force = p5.Vector.sub(this.pos, mover.pos);
        let distanceSqr = constrain(force.magSq(), 25, 2500);
        let G = 100;
        let strength = G * (this.mass * mover.mass) / distanceSqr;
        force.setMag(strength);
        mover.applyForce(force);
    }

    applyForce(force) {
        let f = force.div(this.mass);
        this.acc.add(f);
    }

    friction() {
        let diff = height - (this.pos.y + this.r);
        if(diff < 1) {
            //Direction of friction
            let friction = this.vel.copy();
            friction.normalize();
            friction.mult(-1);
            let normal = this.mass;
            friction.setMag(mu * normal);
            this.applyForce(friction);
        }
    }

    drag(c) {
        let drag = this.vel.copy();
        drag.normalize();
        drag.mult(-1);

        let speed = this.vel.magSq();
        drag.setMag(c * speed);
        this.applyForce(drag);
    }

    edges() {
        if(this.pos.y <= 0 + this.r) {
            this.pos.y = this.r;
            this.vel.y *= -1;
        }
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
        stroke(255);
        strokeWeight(2);
        fill(150, 150);
        push();
        translate(this.pos.x, this.pos.y)
        // ellipse(this.pos.x, this.pos.y, this.r * 2);
        this.angle = this.vel.heading();
        rotate(this.angle);
        triangle(-this.r, -this.r / 2, -this.r, -this.r / 2);
    }
}