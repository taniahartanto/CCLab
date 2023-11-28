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
var button;

function setup() {
  noCursor();
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push(new Particle(random(width), random(height)));
  }

  button = createButton('Back');
  button.position(windowWidth*0.05, windowHeight*0.9);
  button.mousePressed(openBack);
}

function openBack(){
  window.open("https://taniahartanto.github.io/CCLab/project-b/index.html")
}

function draw() {
  background(0, 7, 111);

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

  //Mercury
  image(img2, 230, windowHeight * 0.6);
  img2.resize(80, 0);

  //Venus
  image(img3, 360, windowHeight * 0.3);
  img3.resize(140, 0);

  //Earth
  image(img4, 500, windowHeight * 0.4);
  img4.resize(160, 0);

  //Moon
  image(img10, 600, windowHeight * 0.35);
  img10.resize(80, 0);

  //Mars
  image(img5, 670, windowHeight * 0.55);
  img5.resize(120, 0);

  //Jupiter
  image(img6, 740, windowHeight * 0.2);
  img6.resize(280, 0);

  //Saturn
  image(img7, 870, windowHeight * 0.6);
  img7.resize(290, 0);

  //Uranus
  image(img8, 1080, windowHeight * 0.2);
  img8.resize(200, 0);

  //Neptune
  image(img9, 1230, windowHeight * 0.45);
  img9.resize(200, 0);

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
