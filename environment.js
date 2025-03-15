let pursuer;
let target;
function setup() {
    createCanvas(1800, 800);
    pursuer = new Vehicle(200, 200);
    target = new Target(300, 400);
}

function draw() {
    background(0);
    // target = createVector(mouseX, mouseY);
    // circle(target.x, target.y, 15)
    //black square!!

    let steering = pursuer.flee(target);
    pursuer.applyForce(steering);

    // pursuer.seek(target);
    pursuer.update();
    pursuer.show();
    target.update();
    target.show();
    target.edges();
}