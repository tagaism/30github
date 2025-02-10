class Walker {
    constructor(x, y) {
        this.pos = createVector(x,y);
        // random 2D
        //
        let angle = Math.random() * Math.PI;
        let xx = Math.cos(angle);
        let yy = Math.sin(angle);
        this.vel = createVector(xx, yy);
        //
        // random 2D
        this.vel.mult(random(3));
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
    
        // random 2D
        //
        let angle = Math.random() * Math.PI;
        let xx = Math.cos(angle);
        let yy = Math.sin(angle);
        this.acc = mouse.sub(this.pos);
        //
        // random 2D


        this.vel.setMag(1)
        // this.acc.setMat(0.1);
        this.vel.add(this.acc);
        this.vel.limit(5);

        // this.vel.limit(2);
        this.pos.add(this.vel);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, 32);
    }
}