let font;
let colors = [];
let brushColor;
let x, y;

let g;
let planetX, planetY, planetRad;

let buttons = [];

let NUM_OF_PARTICLES = 300;
let particles = [];

function preload() {
  font = loadFont("fonts/ComicNeue-Bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  g = createGraphics(windowWidth, windowHeight);

  planetX = width * 0.5;
  planetY = height * 0.53;
  planetRad = 300;
  g.noStroke();
  g.fill(255);
  g.circle(planetX, planetY, planetRad * 2);

  colors[0] = color(255, 105, 180); // pink;
  colors[1] = color(120, 81, 169); // purple
  colors[2] = color(64, 224, 208); // blue
  colors[3] = color(50, 205, 50); // green
  colors[4] = color(255, 255, 0); // yellow

  brushColor = color(random(255), random(255), random(255));

  let size = 100;
  for (let i = 0; i < colors.length; i++) {
    let c = colors[i];
    let x = 2.5;
    let y = 2.5 + size * i;
    let btn = new Button(x, y, size, c);
    buttons.push(btn);
  }

  for (let n = 0; n < NUM_OF_PARTICLES; n++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0, 7, 111);

  textAlign(CENTER);
  textSize(40);
  textFont(font);
  fill(255, 255, 255);
  text("Create your own planet!", windowWidth * 0.8, windowHeight * 0.1);
  textSize(20)
  text("Press keys 0 to 9 to change color palette.", windowWidth * 0.82, windowHeight * 0.15);
  text("Click on the color you want and start drawing!", windowWidth * 0.805, windowHeight * 0.18)
  text("Press 'ENTER' to save your creation!", windowWidth * 0.835, windowHeight * 0.21)


  //Stars
  for (let n = 0; n < particles.length; n++) {
    let p = particles[n];
    p.display();
  }

  // draw with the brush
  let distance = dist(planetX, planetY, mouseX, mouseY);
  let pdistance = dist(planetX, planetY, pmouseX, pmouseY);

  if (mouseIsPressed && distance < 283 && pdistance < 283) {
    g.stroke(brushColor)
    g.strokeWeight(40);
    g.line(pmouseX, pmouseY, mouseX, mouseY);
  }

  push();
  image(g, 0, 0);
  pop();

  for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.checkMouse();
    btn.display();
  }
}

function keyPressed() {
  if (key == "1") {
    colors[0] = color(255, 105, 180); // pink;
    colors[1] = color(120, 81, 169); // purple
    colors[2] = color(64, 224, 208); // blue
    colors[3] = color(50, 205, 50); // green
    colors[4] = color(255, 255, 0); // yellow
  }
  if (key == "2") {
    colors[0] = color(1, 155, 120);
    colors[1] = color(73, 190, 173);
    colors[2] = color(107, 179, 36);
    colors[3] = color(253, 55, 84);
    colors[4] = color(250, 154, 71);
  }
  if (key == "3") {
    colors[0] = color(255, 62, 111);
    colors[1] = color(255, 124, 72);
    colors[2] = color(220, 255, 0);
    colors[3] = color(0, 244, 255);
    colors[4] = color(243, 0, 255);
  }
  if (key == "4") {
    colors[0] = color(138, 147, 182);
    colors[1] = color(226, 228, 230);
    colors[2] = color(157, 135, 191);
    colors[3] = color(250, 236, 204);
    colors[4] = color(186, 203, 227);
  }
  if (key == "5") {
    colors[0] = color(164, 200, 233);
    colors[1] = color(159, 193, 108);
    colors[2] = color(212, 150, 187);
    colors[3] = color(239, 202, 102);
    colors[4] = color(181, 164, 227);
  }
  if (key == "6") {
    colors[0] = color(238, 204, 99);
    colors[1] = color(241, 96, 35);
    colors[2] = color(173, 224, 28);
    colors[3] = color(68, 222, 234);
    colors[4] = color(26, 118, 169);
  }
  if (key == "7") {
    colors[0] = color(253, 228, 198);
    colors[1] = color(251, 210, 185);
    colors[2] = color(244, 188, 176);
    colors[3] = color(225, 171, 181);
    colors[4] = color(197, 143, 143);
  }
  if (key == "8") {
    colors[0] = color(32, 182, 147);
    colors[1] = color(141, 219, 83);
    colors[2] = color(255, 225, 33);
    colors[3] = color(255, 177, 60);
    colors[4] = color(255, 101, 163);
  }
  if (key == "9") {
    colors[0] = color(140, 216, 197);
    colors[1] = color(170, 218, 186);
    colors[2] = color(204, 45, 103);
    colors[3] = color(239, 183, 207);
    colors[4] = color(244, 173, 33);
  }
  if (key == "0") {
    colors[0] = color(255, 255, 255);
    colors[1] = color(171, 171, 171);
    colors[2] = color(114, 114, 114);
    colors[3] = color(64, 64, 64);
    colors[4] = color(0, 0, 0);
  }

  if (keyCode == ENTER) {
    saveCanvas("MyPlanet", "png");
  }

  // update the whole buttons' colors
  for (let i = 0; i < buttons.length; i++) {
    let clr = colors[i];
    let btn = buttons[i];
    btn.color = clr;
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dia = random(1, 7);
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

class Button {
  constructor(x, y, size, clr) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = clr;
  }
  checkMouse() {
    if (mouseX > this.x && mouseX < this.x + this.size
      && mouseY > this.y && mouseY < this.y + this.size) {
      // in
      if (mouseIsPressed) {
        brushColor = this.color
      }
    } else {
      // out
    }
  }
  display() {
    push();
    stroke("black");
    strokeWeight(5);
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    pop();
  }
}
