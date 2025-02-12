let balls = [];
let mu = 0.1;
function setup() {
    createCanvas(1500, 900);
    for(let i = 0; i < 10; i++) {
        balls[i] = new Walker(random(width), 50, random(1, i * 2.5));
    }
}

function draw() {
    background(0);

    for(let ball of balls) {
        if(mouseIsPressed) {
            let wind = createVector(-0.3, 0);
            ball.applyForce(wind);
        }
        let gravity = createVector(0, 0.5);
        let weight = p5.Vector.mult(gravity, ball.mass);
    
        ball.applyForce(weight);
    
        ball.update();
        ball.friction();
        ball.edges();
        ball.show();
    }
}