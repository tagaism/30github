let walker;

function setup() {
    createCanvas(1000, 900);
    walker = new Walker(width / 2, height / 2);
}

function draw() {
    background(0);
    walker.update();
    walker.show();
}