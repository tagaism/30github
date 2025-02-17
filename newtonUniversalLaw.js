let movers = [];
let attractor;

function setup() {
    createCanvas(1500, 900);
    for(let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let m = random(50, 150);
        movers[i] = new Mover(x, y, m);
    }
    mover = new Mover(350, 150, 50);
    attractor = new Attractor(750, 450, 50);
    // background(0);
}

function draw() {
    background(0);
    
    for(let mover of movers) {
        mover.update();
        mover.show();
    }

}