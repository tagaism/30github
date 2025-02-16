class Attractor {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.mass = m;
        this.r = sqrt(this.mass) * 3;
    }

    attract(mover) {
        let force = p5.Vector.sub(this.pos, mover.pos);
        let distanceSqr = constrain(force.magSq(), 25, 2500);
        let G = 5;

        let strength = G * (this.mass * mover.mass) / distanceSqr;
        force.setMag(strength);
        mover.applyForce(force);
    }

    show() {
        noStroke();
        fill(255, 0,0);
        ellipse(this.pos.x, this.pos.y, this.r*2);
    }
}