let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let font;
function preload() {
  font = loadFont("fonts/ComicNeue-Bold.ttf");
  img = loadImage("images/rocket.PNG");
  img1 = loadImage("images/sun.PNG");
  img2 = loadImage("images/mercury.PNG");
  img3 = loadImage("images/venus.PNG");
  img4 = loadImage("images/earth.PNG");
  img5 = loadImage("images/mars.PNG");
  img6 = loadImage("images/jupiter.PNG");
  img7 = loadImage("images/saturn.PNG");
  img8 = loadImage("images/uranus.PNG");
  img9 = loadImage("images/neptune.PNG");
  img10 = loadImage("images/moon.PNG");
}

let NUM_OF_PARTICLES = 300
let particles = [];

function setup() {
  img1.resize(400, 0);
  img2.resize(180, 0);
  img3.resize(200, 0);
  img4.resize(250, 0);
  img5.resize(250, 0);
  img6.resize(280, 0);
  img7.resize(270, 0);
  img8.resize(200, 0);
  img9.resize(200, 0);
  img10.resize(300, 0);
  img.resize(100, 0);
  noCursor();
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0, 7, 111);

  textAlign(CENTER);
  textSize(120);
  textFont(font);
  fill(255, 255, 255);
  text("OUR", windowWidth / 2, windowHeight * 0.35);
  text("SOLAR", windowWidth / 2, windowHeight * 0.5);
  text("SYSTEM", windowWidth / 2, windowHeight * 0.65);


  //Stars
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.display();
  }

  //Sun
  image(img1, 5, windowHeight * 0.01);


  //Mercury
  image(img2, 20, windowHeight * 0.47);

  //Venus
  image(img3, 250, windowHeight * 0.45);


  //Earth
  image(img4, 350, windowHeight * 0.01);

  //Moon
  image(img10, 900, windowHeight * 0.01);

  //Mars
  image(img5, 100, windowHeight * 0.65);

  //Jupiter
  image(img6, 950, windowHeight * 0.6);


  //Saturn
  image(img7, 1150, windowHeight * 0.03);


  //Uranus
  image(img8, 1100, windowHeight * 0.3);


  //Neptune
  image(img9, 1200, windowHeight * 0.53);


  //Rocket Cursor
  image(img, mouseX - 30, mouseY - 30);

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
