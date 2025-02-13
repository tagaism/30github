let balls = [];
let mu = 0.01;
let dragC = 0.3;
function setup() {
    createCanvas(1500, 900);
    for(let i = 0; i < 10; i++) {
        balls[i] = new Walker(random(width), 50, random(1, i * 2.5));
    }
}

function draw() {
    background(0);

    fill(255, 115);
    noStroke();
    rect(0, height/2, width, height / 2);


    for(let ball of balls) {
        if(mouseIsPressed) {
            let wind = createVector(-0.3, 0);
            ball.applyForce(wind);
        }
        let gravity = createVector(0, 0.5);
        let weight = p5.Vector.mult(gravity, ball.mass);
    
        ball.applyForce(weight);
        if(ball.pos.y > height / 2) {
            ball.drag(dragC);
        }
        ball.update();
        // ball.friction();
        ball.edges();
        ball.show();
    }
}