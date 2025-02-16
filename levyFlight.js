var pos;
var prev;
function setup() {
    createCanvas(1500, 900);
    pos = createVector(750, 450);
    prev = pos.copy();
    background(50);
}

function draw() {
    stroke(255, 100);
    strokeWeight(2);
    // point(pos.x, pos.y);
    line(pos.x, pos.y, prev.x, prev.y);
    prev.set(pos);

    let step = p5.Vector.random2D();
    var r = random(100);

    if(r < 1) {
        step.mult(random(25, 100));
    } else {
        step.setMag(2)
    }

    pos.add(step);
    // switch(r) {
    //     case 0:
    //         pos.x = pos.x + 10
    //         break;
    //     case 1:
    //         pos.x = pos.x - 10
    //         break;
    //     case 2:
    //         pos.y = pos.y + 10
    //         break;
    //     case 3:
    //         pos.y = pos.y - 10
    //         break;
    // }
}