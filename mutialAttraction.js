let movers = [];

function setup() {
    createCanvas(1500, 900);
    // for(let i = 0; i < 2; i++) {
    //     let x = random(width);
    //     let y = random(height);
    //     let vx = 100 + i * 100;
    //     let vy = 200 + i * 100;

    //     let m = random(25, 100);
    //     movers[i] = new Mover(x, y, m);
    // }
    movers[0] = new Mover(300, 200, 0, 5, 10);
    movers[1] = new Mover(100, 200, 0, -5, 10);
    movers[2] = new Mover(200, 300, -5, 0, 10);
    // movers[3] = new Mover(200, 100, 5, 0, 10);
}

function draw() {
    background(0, 10);
    for(let mover of movers) {
        for(let other of movers) {
            if(mover !== other) {
                mover.attract(other);
                stroke(255);
                line(mover.pos.x, mover.pos.y, other.pos.x, other.pos.y);
            }
        }
    }
    for(let mover of movers){
        mover.update();
        mover.show();
    }
}