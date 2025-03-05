let vehicle;
let target;
function setup() {
    createCanvas(1800, 800);
    vehicle = new Vehicle(200, 200);
}

function draw() {
    background(0, 1);
    fill(255, 0, 0);
    target = createVector(mouseX, mouseY);
    circle(target.x, target.y, 15)

    vehicle.seek(target);
    vehicle.update();
    vehicle.show();
}