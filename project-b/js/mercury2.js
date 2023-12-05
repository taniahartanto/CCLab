let img;
let img2;
let font;
function preload() {
  font = loadFont("fonts/ComicNeue-Bold.ttf");
  img = loadImage("images/rocket.PNG");
  img4 = loadImage("images/mercury.PNG");
  
}

let particles = [];
function setup() {
  noCursor();
  createCanvas(windowWidth, windowHeight);
  img4.resize(600,0)
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
 
 //mercury
 imgYOffset += imgYSpeed;
  if (imgYOffset > 15 || imgYOffset < -15) {
    imgYSpeed *= -1;
  }
  push();
  translate(imgX, imgY + imgYOffset);
  imageMode(CENTER)
  image(img4, 0, 0);
  pop();

  textAlign(CENTER);
  textSize(60);
  textFont(font);
  fill(255, 255, 255);
  text("Mercury", windowWidth*0.70, windowHeight * 0.25);
  textSize (25);
  text("Mercury is one of the smallest planets in our solar system.", windowWidth * 0.7, windowHeight * 0.32);
  text( "It's even smaller than some moons,", windowWidth * 0.7, windowHeight * 0.36)
  text( "like Jupiter's moon Ganymede and Saturn's moon Titan.", windowWidth * 0.7, windowHeight * 0.4)

  text( "Mercury has a rocky surface covered in craters. ", windowWidth * 0.7, windowHeight * 0.47)  
  text( "It's a bit like Earth's Moon.", windowWidth * 0.7, windowHeight * 0.51)
  text ("These craters were created by rocks and debris", windowWidth * 0.7, windowHeight*0.55)
  text ("crashing into the planet's surface a long time ago.", windowWidth * 0.7, windowHeight * 0.59)

  text( "Mercury has extreme temperatures. ", windowWidth * 0.7, windowHeight * 0.66)  
  text( "During the day, it gets super hot,", windowWidth * 0.7, windowHeight * 0.70)
  text ("like standing next to a blazing bonfire.", windowWidth * 0.7, windowHeight*0.74)
  text( "But at night, it gets extremely cold,", windowWidth * 0.7, windowHeight * 0.78)
  text ("like being in a freezer.", windowWidth * 0.7, windowHeight*0.82)

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
