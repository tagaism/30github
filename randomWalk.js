let ball;

function setup() {
    createCanvas(1500, 900);
    ball = new Walker(3, 2, 2);
    ball1 = new Walker(width - 4, 4, 4);
    background(0);
}

function draw() {
    
    
    if(mouseIsPressed) {
        let wind = createVector(-0.3, 0);
        ball.applyForce(wind);
        ball1.applyForce(wind);
    }
    let gravity = createVector(0, 0.1);

    let weight = p5.Vector.mult(gravity, ball.mass);
    let weight1 = p5.Vector.mult(gravity, ball1.mass);

    ball.applyForce(weight);
    ball1.applyForce(weight1);

    ball.update();
    ball1.update();
    ball.edges();
    ball1.edges(    );
    ball.show();
    ball1.show();
}