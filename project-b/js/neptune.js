let img;
let img10;
let font;
function preload() {
  font = loadFont("fonts/ComicNeue-Bold.ttf");
  img = loadImage("images/rocket.PNG");
  img11 = loadImage("images/neptune-1.PNG");
}

let particles = [];
function setup() {
  noCursor()
  createCanvas(windowWidth, windowHeight);
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
  
  textAlign(CENTER);
  textSize(60);
  textFont(font);
  fill(255, 255, 255);
  text("This is NEPTUNE", windowWidth / 2, windowHeight * 0.2);
  
 //Planet
  push();
  imageMode(CENTER)
  image(img11, windowWidth/2, windowHeight*0.6);
  img11.resize(400,0)
  pop();

  //Rocket Cursor
  image(img, mouseX - 30, mouseY - 30);
  img.resize(100, 0);
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
