class Emitter {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.particles = [];
    }

    emit(num) {
        for(let i = 0; i < num; i++) {
            this.particles.push(new Particle(this.position.x, this.position.y));
        }
    }

    applyForce(force) {
        for(let p of this.particles) {
            p.applyForce(force);
        }
    }

    update() {
        for(let p of this.particles) {
            let gravity = createVector(0, 0.2);
            p.edges();
            p.update();
        }
        for(let i = this.particles.length - 1; i>=0; i--) {
            if(this.particles[i].finished()) {
                this.particles.splice(i, 1);
            }
        }
    }

    show() {
        for(let p of this.particles) {
            p.show();
        }
    }
}