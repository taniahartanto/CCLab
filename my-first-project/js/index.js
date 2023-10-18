let x = 0;
let y = 0;
let angle = 0;

function setup() {
    createCanvas(700, 600);
    angleMode(DEGREES);
    background("white");
}

function draw() {
    //background(220);

    //stroke(0,0,0);
    noStroke();
    //stroke(random(255), random(255), random(255));

    // random shades of colors
    let blueShade = color(0, random(200, 255), 225);
    let pinkShade = color(255, random(193), 193);
    let greenShade = color(0, random(200, 255), 0);
    let purpleShade = color(random(100, 200), 0, random(150, 255));

    x = sin(frameCount * 1.5) * 15; // freq, amp
    y = sin(frameCount * 1.0) * 50;
    angle += 60 + 0.1; // angle, 72, 60, 90, 120, ..

    // COLOR PALETTES
    //pink square
    noStroke();
    fill(255, 105, 180);
    rect(0, 570, 30, 30);

    //purple square
    noStroke();
    fill(120, 81, 169);
    rect(30, 570, 30, 30);

    //blue square
    noStroke();
    fill(64, 224, 208);
    rect(60, 570, 30, 30);

    //green square
    noStroke();
    fill(50, 205, 50);
    rect(90, 570, 30, 30);

    noStroke();
    fill(1, 155, 120);
    rect(150, 570, 30, 30);

    noStroke();
    fill(73, 190, 173);
    rect(180, 570, 30, 30);

    noStroke();
    fill(107, 179, 36);
    rect(210, 570, 30, 30);

    noStroke();
    fill(253, 55, 84);
    rect(240, 570, 30, 30);

    noStroke();
    fill(250, 154, 71);
    rect(270, 570, 30, 30);

    push();
    translate(width / 2, height / 2);
    rotate(angle);

    if (mouseIsPressed) {
        if (mouseX > 0 && mouseX < 30 && mouseY > 570 && mouseY < 600) {
            fill(pinkShade);
            circle(x, y + 100, 25);
        } else if (mouseX > 30 && mouseX < 60 && mouseY > 570 && mouseY < 600) {
            fill(purpleShade);
            circle(x, y + 150, 10);
        } else if (mouseX > 60 && mouseX < 90 && mouseY > 570 && mouseY < 600) {
            fill(blueShade);
            circle(x, y, 30);
        } else if (mouseX > 90 && mouseX < 120 && mouseY > 570 && mouseY < 600) {
            fill(greenShade);
            circle(x, y + 50, 15);
        }
        pop();
    }

    push();
    translate(width / 2, height / 2);
    rotate(angle);

    if (mouseIsPressed) {
        if (mouseX > 150 && mouseX < 180 && mouseY > 570 && mouseY < 600) {
            fill(1, 155, 120);
            circle(x, y + 100, 25);
        } else if (mouseX > 180 && mouseX < 210 && mouseY > 570 && mouseY < 600) {
            fill(73, 190, 173);
            circle(x, y + 150, 10);
        } else if (mouseX > 210 && mouseX < 240 && mouseY > 570 && mouseY < 600) {
            fill(107, 179, 36);
            circle(x, y, 30);
        } else if (mouseX > 240 && mouseX < 270 && mouseY > 570 && mouseY < 600) {
            fill(253, 55, 84);
            circle(x, y + 50, 15);
        } else if (mouseX > 270 && mouseX < 300 && mouseY > 570 && mouseY < 600) {
            fill(250, 154, 71);
            circle(x, y + 75, 15);
        }
        pop();
    }
}
