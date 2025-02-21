// let angle = 0;
// let r = 150;
// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
//     background(0, 80);
//     translate(200, 200);
//     stroke(255);
//     strokeWeight(4);
//     noFill();
//     // circle(0, 0, r * 2);

//     // let inc = map(mouseX, 0, width, PI, 0.1);
//     let inc = 0.05
//     beginShape();
//     for(let a = 0; a < TWO_PI; a += inc) {
//         let r1 = r + random(-10, 10);
//         let x = r1 * cos(a);
//         let y = r1 * sin(a);
//         vertex(x, y);
//     }
//     endShape(CLOSE);
//     // strokeWeight(10);
//     // stroke(252, 239, 33);
//     // let x = r * cos(angle);
//     // let y = r * sin(angle);
//     // point(x, y);
//     // r -= random(-2, 2);
//     // angle += 0.02//random(-0.1, 0.1);
// }

let angle = 0;
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    translate(200, 200);
    fill(255, 238, 33);
    // let r = map(sin(angle), -1, 1, 0, 200);
    let y = map(sin(angle), -1, 1, -100, 100);
    stroke(255);
    line(0, 0, 0, y);
    circle(0, y, 5);
    angle += 0.08
}