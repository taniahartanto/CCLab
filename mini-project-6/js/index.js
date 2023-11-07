let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
}

function draw() {
    background(0);

    //gradient background
    let purple = color(147, 78, 167);
    let black = color(0);
    let blue = color(19, 16, 84);

    for (let i = 0; i < height; i++) {
        let mergeColor = lerpColor(black, blue, i / height);
        mergeColor = lerpColor(mergeColor, purple, i / height);
        stroke(mergeColor);
        line(0, i, width, i);
    }

    //moon
    push();
    noStroke();
    fill(255, 246, 143);
    circle(windowWidth - 120, 90, 80);
    fill(0);
    circle(windowWidth - 140, 90, 80);
    pop();

    //generate stars
    if (mouseIsPressed) {
        particles.push(new Particle(mouseX, mouseY, random(1, 15)));
        particles.push(new Particle(mouseX, mouseY, random(1, 15)));
        particles.push(new Particle(mouseX, mouseY, random(1, 15)));
    }

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.move();
        p.display();
    }

    //land
    noStroke();
    fill(0);
    rect(0, 550, windowWidth, windowHeight * 0.5);

    //house body
    rect(260, 450, 200, 100);
    rect(260, 350, 200, 100);

    //house roof
    let rectX = 260;
    let rectY = 350;
    let rectWidth = 200;
    let rectHeight = 100;
    // left roof
    fill(0);
    triangle(
        rectX,
        rectY,
        rectX,
        rectY + rectHeight,
        rectX - rectHeight / 2,
        450
    );
    //right roof
    triangle(
        rectX + rectWidth,
        rectY,
        rectX + rectWidth,
        rectY + rectHeight,
        rectX + rectWidth + rectHeight / 2,
        450
    );
}

class Particle {
    constructor(startX, startY, startDia) {
        this.x = startX;
        this.y = startY;
        this.xSpeed = random(-5, 5);
        this.ySpeed = random(-5, 5);
        this.dia = startDia;
    }
    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    checkEdges() {
        if (this.x < 0 || this.x > width) {
            this.isDone = true;
        }
        if (this.y < 0 || this.y > height) {
            this.isDone = true;
        }
    }
    display() {
        push();
        noStroke();
        let randomBrightness = random(100, 255);
        fill(255, 255, randomBrightness);
        translate(this.x, this.y);
        rotate(PI / 4);
        rectMode(CENTER);
        star(0, 0, this.dia / 2, this.dia, 5);
        pop();
    }
}
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
