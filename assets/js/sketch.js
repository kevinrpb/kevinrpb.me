let canvas,
    circles,
    CENTER,
    BOUNDS;

const MAX_CIRCLES = 1;

function Circle(gen) {
    if (gen)
        this.generator = min(1.0, max(0.0, gen));
    else
        this.generator = random();

    this.position = {
        x: random(BOUNDS.x[0], BOUNDS.x[1]),
        y: random(BOUNDS.y[0], BOUNDS.y[1])
    };

    this.rotation = 0.0;

    this.radius = 100.0 * this.generator;
    if (this.generator > 0.5) this.radius *= 2;
    if (this.generator < 0.9) this.radius += 15;
    if (this.generator < 0.8) this.radius += 15;
    if (this.generator < 0.4) this.radius *= 3;
    if (this.generator < 0.1) this.radius *= 5;

    this.shapes = [];
    this.shapes.push(() => ellipse(this.position.x, this.position.y, this.radius, this.radius) );

    this.tick = (moves) => {
        if (moves) for (let i = 0; i < moves; i++) this.move();
        else this.move();
        this.draw();
    };

    this.draw = () => {
        rotate(this.rotation);
        for (let func of this.shapes) func();
        rotate(-this.rotation);
    };

    this.move = () => {
        let r1 = random(),
            r2 = random();
        if (r1 < 0.33) this.position.x += this.generator;
        else if (r1 < 0.67) this.position.x -= this.generator;
        if (r2 < 0.33) this.position.y += this.generator;
        else if (r2 < 0.67) this.position.y -= this.generator;
    };
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    CENTER = {
        x: windowWidth / 2,
        y: windowHeight / 2
    };
    BOUNDS = {
        x: [-windowWidth / 2, windowWidth / 2],
        y: [-windowHeight / 2, windowHeight / 2]
    };

    circles = [];
    for (let i = 0; i < MAX_CIRCLES; i++) {
        circles[i] = new Circle(0.6);
    }

    console.log(circles);
}

function draw() {
    translate(CENTER.x, CENTER.y);
    background(200);

    noFill();
    for (let circle of circles) {
        circle.tick();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    CENTER = {
        x: windowWidth / 2,
        y: windowHeight / 2
    };
    BOUNDS = {
        x: [-windowWidth / 2, windowWidth / 2],
        y: [-windowHeight / 2, windowHeight / 2]
    };
}

function between(a, b, c) {
    return (a >= b) && (a <= c);
}
