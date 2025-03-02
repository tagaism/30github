let emitters = [];

function mousePressed() {
    emitters.push(new Emitter(mouseX, mouseY))
}

function setup() {
    createCanvas(1700, 900);
}

function draw() {
    background(0);
    let force = createVector(0, -0.4);
    for(let e of emitters) {
        e.applyForce(force);
        e.emit(1);
        e.show();
        e.update();
    }
}