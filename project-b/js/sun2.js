let img;
let img2;
let font;
let imgX;
let imgY;
let imgYOffset;
let imgYSpeed;

function preload() {
  font = loadFont("fonts/ComicNeue-Bold.ttf");
  img = loadImage("images/rocket.PNG");
  img3 = loadImage("images/sun.PNG");
}

let particles = [];
function setup() {
  noCursor();
  createCanvas(windowWidth, windowHeight);
  img3.resize(700, 0);
  img.resize(100, 0);
  imgX = windowWidth * 0.25;
  imgY = windowHeight * 0.47;
  imgYOffset = 0;
  imgYSpeed = 2;
}

function draw() {
  background(0, 7, 111);

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
 //Sun
  imgYOffset += imgYSpeed;
  if (imgYOffset > 15 || imgYOffset < -15) {
    imgYSpeed *= -1;
  }
  push();
  translate(imgX, imgY + imgYOffset);
  imageMode(CENTER);
  image(img3, 0, 0);
  pop();

  //Rocket Cursor
  push();
  image(img, mouseX - 30, mouseY - 30);
  pop();
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
