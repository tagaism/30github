let x;
let y;
function setup() {
    createCanvas(400, 400);
    x = 200;
    y = 200;
    background(51);
}

function draw() {
    stroke(random() * 255);
    strokeWeight(2);
    point(x,y);

    let r = floor(random(4));
    switch(r) {
        case 0:
            if (x > width) {
                x = 0;
            }
            x += 5;
            break;
        case 1:
            if (x < 0) {
                x = width;
            }
            x -= 5;
            break;
        case 2:
            if (y > height) {
                y = 0;
            }
            y += 5;
            break;
        case 3:
            if (y < 0) {
                y = height;
            }
            y -= 5;
            break;
    }
}