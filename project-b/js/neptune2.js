let img;
let img11;
let font;
function preload() {
  font = loadFont("fonts/ComicNeue-Bold.ttf");
  img = loadImage("images/rocket.PNG");
  img11 = loadImage("images/neptune.PNG");
}

let particles = [];
function setup() {
  noCursor()
  createCanvas(windowWidth, windowHeight);
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
  image(img11, 0, 0);
  img11.resize(600,0)
  pop();

  textAlign(CENTER);
  textSize(60);
  textFont(font);
  fill(255, 255, 255);
  text("Neptune", windowWidth*0.70, windowHeight * 0.25);
  textSize (25);
  text("Neptune is the eighth and farthest planet from the Sun", windowWidth * 0.7, windowHeight * 0.32);
  text( "in our solar system. It's located after Uranus and", windowWidth * 0.7, windowHeight * 0.36)
  text( "is about 30 times farther from the Sun than Earth.", windowWidth * 0.7, windowHeight * 0.4)

  text( "Neptune is the coldest and windiest planet in the solar system.", windowWidth * 0.7, windowHeight * 0.47)  
  text( "In addition, they have the most powerful storm", windowWidth * 0.7, windowHeight * 0.51)
  text ("although the biggest storm called the Great Dark Spot disappeared.", windowWidth * 0.7, windowHeight*0.55)

  text( "Neptune is often called the 'Blue Planet'", windowWidth * 0.7, windowHeight * 0.62)  
  text( "because it has a stunning blue color.", windowWidth * 0.7, windowHeight * 0.66)
  text ("Like Uranus, Neptune has methane gas in the atmosphere ", windowWidth * 0.7, windowHeight*0.70)
  text ("that absorbs red light and reflects blue light.", windowWidth * 0.7, windowHeight * 0.74)


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
