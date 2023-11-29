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
  img1.resize(350, 0);
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

let NUM_OF_PARTICLES = 300;
let particles = [];

function setup() {

  img2.resize(80, 0);
  img3.resize(140, 0);
  img4.resize(160, 0);
  img5.resize(120, 0);
  img6.resize(280, 0);
  img7.resize(290, 0);
  img8.resize(200, 0);
  img9.resize(200, 0);
  img10.resize(80, 0);
  noCursor();
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0, 7, 111);

  textAlign(CENTER);
  textSize(40);
  textFont(font);
  fill(255, 255, 255);
  text("Click on the planets to land on them!", windowWidth / 2, windowHeight * 0.13);

  //Stars
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.display();
  }

  //orbit lines
  for (let i = 0; i < 10; i++) {
    let x = 0;
    let y = windowHeight / 2;
    let dia = i * 295;
    noFill();
    stroke(255);
    circle(x, y, dia);
  }

  //Sun
  image(img1, -320, windowHeight * 0.1);
  if (mouseIsPressed) {
    if (
      mouseX >= -320 &&
      mouseX <= -320 + img1.width &&
      mouseY >= windowHeight * 0.1 &&
      mouseY <= windowHeight * 0.1 + img1.height
    ) {
      window.open("sun.html", "_self");
    }
  }

  //Mercury
  image(img2, 230, windowHeight * 0.6);

  if (mouseIsPressed) {
    if (
      mouseX >= 230 &&
      mouseX <= 230 + img2.width &&
      mouseY >= windowHeight * 0.6 &&
      mouseY <= windowHeight * 0.6 + img2.height
    ) {
      window.open("mercury.html", "_self");
    }
  }

  //Venus
  image(img3, 360, windowHeight * 0.3);
  
  if (mouseIsPressed) {
    if (
      mouseX >= 360 &&
      mouseX <= 360 + img3.width &&
      mouseY >= windowHeight * 0.3 &&
      mouseY <= windowHeight * 0.3 + img3.height
    ) {
      window.open("venus.html", "_self");
    }
  }

  //Earth
  image(img4, 500, windowHeight * 0.4);

  if (mouseIsPressed) {
    if (
      mouseX >= 500 &&
      mouseX <= 500 + img4.width &&
      mouseY >= windowHeight * 0.4 &&
      mouseY <= windowHeight * 0.4 + img4.height
    ) {
      window.open("earth.html", "_self");
    }
  }

  //Moon
  image(img10, 600, windowHeight * 0.35);


  if (mouseIsPressed) {
    if (
      mouseX >= 600 &&
      mouseX <= 600 + img10.width &&
      mouseY >= windowHeight * 0.35 &&
      mouseY <= windowHeight * 0.35 + img10.height
    ) {
      window.open("moon.html", "_self");
    }
  }

  //Mars
  image(img5, 670, windowHeight * 0.55);
  
  if (mouseIsPressed) {
    if (
      mouseX >= 670 &&
      mouseX <= 670 + img5.width &&
      mouseY >= windowHeight * 0.55 &&
      mouseY <= windowHeight * 0.55 + img5.height
    ) {
      window.open("mars.html", "_self");
    }
  }

  //Jupiter
  image(img6, 740, windowHeight * 0.2);
 
  if (mouseIsPressed) {
    if (
      mouseX >= 740 &&
      mouseX <= 740 + img6.width &&
      mouseY >= windowHeight * 0.2 &&
      mouseY <= windowHeight * 0.2 + img6.height
    ) {
      window.open("jupiter.html", "_self");
    }
  }

  //Saturn
  image(img7, 870, windowHeight * 0.6);
  
  if (mouseIsPressed) {
    if (
      mouseX >= 870 &&
      mouseX <= 870 + img7.width &&
      mouseY >= windowHeight * 0.6 &&
      mouseY <= windowHeight * 0.6 + img7.height
    ) {
      window.open("saturn.html", "_self");
    }
  }

  //Uranus
  image(img8, 1080, windowHeight * 0.2);

  if (mouseIsPressed) {
    if (
      mouseX >= 1080 &&
      mouseX <= 1080 + img8.width &&
      mouseY >= windowHeight * 0.2 &&
      mouseY <= windowHeight * 0.2 + img8.height
    ) {
      window.open("uranus.html", "_self");
    }
  }

  //Neptune
  image(img9, 1230, windowHeight * 0.45);
  
  if (mouseIsPressed) {
    if (
      mouseX >= 1230 &&
      mouseX <= 1230 + img9.width &&
      mouseY >= windowHeight * 0.45 &&
      mouseY <= windowHeight * 0.45 + img9.height
    ) {
      window.open("neptune.html", "_self");
    }
  }

  //Rocket Cursor
  image(img, mouseX - 30, mouseY - 30);
  img.resize(100, 0);
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