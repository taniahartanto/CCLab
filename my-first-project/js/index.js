let x = 0;
let y = 0;
let angle = 0;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    background(255, 255, 0); //yellow
}

function draw() {
    //background(220);

    //stroke(0,0,0);
    noStroke();
    //stroke(random(255), random(255), random(255));

    // random shades of colors
    // play with more colors!
    let blueShade = color(0, random(200, 255), 225);
    let pinkShade = color(255, random(193), 193);
    let greenShade = color(0, random(200, 255), 0);
    let purpleShade = color(random(100, 200), 0, random(150, 255));

    x = sin(frameCount * 1.5) * 15; // freq, amp
    y = sin(frameCount * 1.0) * 50;
    angle += 72 + 0.1; // angle, 72, 60, 90, 120, ..

    push();
    translate(width / 2, height / 2);
    rotate(angle);

    fill(blueShade);
    circle(x, y, 30); // size

    // rect, line

    fill(pinkShade);
    circle(x, y + 100, 40);

    fill(greenShade);
    circle(x, y + 50, 20);

    fill(purpleShade);
    circle(x, y + 150, 20);
    pop();
}
