let img;
let img7;
let font;
function preload() {
  font = loadFont("fonts/ComicNeue-Bold.ttf");
  img = loadImage("images/rocket.PNG");
  img7 = loadImage("images/earth.PNG");
}

let particles = [];
function setup() {
  noCursor();
  createCanvas(windowWidth, windowHeight);
  img7.resize(600,0)
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
  
 //Planet
 imgYOffset += imgYSpeed;
 if (imgYOffset > 15 || imgYOffset < -15) {
   imgYSpeed *= -1;
 }
 push();
 translate(imgX, imgY + imgYOffset);
 imageMode(CENTER);
 image(img7, 0, 0);
 pop();

 textAlign(CENTER);
  textSize(60);
  textFont(font);
  fill(255, 255, 255);
  text("Earth", windowWidth*0.70, windowHeight * 0.2);
  textSize (25);
  text("Earth is our home planet!", windowWidth * 0.7, windowHeight * 0.27);
  text( "It's the only planet in our solar system known to have life.", windowWidth * 0.7, windowHeight * 0.31)
  text( "We have beautiful forests, towering mountains,", windowWidth * 0.7, windowHeight * 0.35)
  text( "and diverse ecosystems all around.", windowWidth * 0.7, windowHeight * 0.39)

  text( "Earth's atmosphere is made up of different gases,", windowWidth * 0.7, windowHeight * 0.46)  
  text( "with the most abundant being nitrogen and oxygen.", windowWidth * 0.7, windowHeight * 0.50)
  text ("Oxygen is crucial for us and many other organisms", windowWidth * 0.7, windowHeight*0.54)
  text ("to breathe and survive.", windowWidth * 0.7, windowHeight*0.58)

  text( "Earth has one moon, simply called 'the Moon.'", windowWidth * 0.7, windowHeight * 0.65)  
  text( "It's Earth's only natural satellite and orbits around our planet.", windowWidth * 0.7, windowHeight * 0.69)
  text ("The Moon's gravity affects the tides in our oceans.", windowWidth * 0.7, windowHeight*0.73)
 
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
