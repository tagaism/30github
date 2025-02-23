class Wave {
    constructor(amp, period, phase) {
        this.amplitude = amp;
        this.period = period;
        this.phase = phase;
    }

    evaluate(x) {
        console.log(x);
        return sin(this.phase + TWO_PI * x / this.period) * this.amplitude;
    }

    update(x) {
        this.phase += x;
    }
}

let waves = [];
function setup() {
    createCanvas(1700, 800);
    for(let i = 0; i < 20; i++) {
        waves[i] = new Wave(random(20, 80), random(100, 200), random(TWO_PI));
    }
}

function draw() {
    background(0);
    for(let x = 0; x < width; x+=10) {
        let y = 0;
        for(let wave of waves) {
            y += wave.evaluate(x);
            // wave.update();
        }
        // noStroke();
        ellipse(x, y + height/2, 10);
    }
    for(let wave of waves){
        wave.update(0.1);
    }
}