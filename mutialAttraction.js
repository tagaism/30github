let movers = [];
let sun;
function setup() {
    createCanvas(1500, 900);

    for(let i = 0; i < 10; i++) {
        let pos = p5.Vector.random2D();
        let vel = pos.copy();
        vel.setMag(10)
        pos.setMag(random(100, 150));
        vel.rotate(PI/2);
        // let x = random(width);
        // let y = random(height);
        let m = random(25, 25);
        movers[i] = new Mover(pos.x, pos.y, vel.x, vel.y, m);
    }
    sun = new Mover(750, 450, 0, 0, 10000);
    // movers[3] = new Mover(200, 100, 5, 0, 10);
}

function draw() {
    background(10, 10);
    // translate(width/2, height/2);
    for(let mover of movers) {
        sun.attract(mover);
        for(let other of movers) {
            if(mover !== other) {
                mover.attract(other);
                // stroke(255);
                // line(mover.pos.x, mover.pos.y, other.pos.x, other.pos.y);
            }
        }
    }
    for(let mover of movers){
        mover.update();
        mover.edges();
        mover.show();
    }
    sun.show()
}