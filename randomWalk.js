let walker;

function setup() {
    createCanvas(1000, 900);
    walker = new Walker(width / 2, height / 2);
    background(0);
}

function draw() {
    walker.update();
    walker.show();
}