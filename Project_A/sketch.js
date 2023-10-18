let colors = []; // empty array
let selectedIndex = -1;
let x = 0;
let y = 0;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  colors[0] = color(255, 105, 180); // pink;
  colors[1] = color(120, 81, 169); // purple
  colors[2] = color(64, 224, 208); // blue
  colors[3] = color(50, 205, 50); // green
  colors[4] = color(255, 255, 0); // yellow

  background(255);
}

function draw() {
  if (keyIsPressed) {
    if (key == "y") {
      noStroke();
      //stroke(random(255), random(255), random(255));
      fill("yellow");
      circle(mouseX, mouseY, (180 + sin(frameCount * 0.05) * 50));
    }
    if (key == "p") {
      noStroke();
      //stroke(random(255), random(255), random(255));
      fill("pink");
      circle(mouseX, mouseY, (180 + sin(frameCount * 0.05) * 50));
    }
  }

  // COLOR PALETTES
  for (let i = 0; i < colors.length; i++) {
    let x = i * 30;
    let y = height - 30;
    noStroke();
    fill(colors[i]);
    rect(x, y, 30, 30);
  }

  x = sin(frameCount * 1.5) * 15; // freq, amp
  y = sin(frameCount * 1.0) * 50;
  angle += 60 + 0.1; // angle, 72, 60, 90, 120, ..

  push();
  translate(width / 2, height / 2);
  rotate(angle);

  if (mouseIsPressed && selectedIndex >= 0) {
    let c = colors[selectedIndex];
    fill(
      red(c) + random(-15, 15),
      green(c) + random(-15, 15),
      blue(c) + random(-15, 15)
    );
    if (selectedIndex == 0) {
      circle(x, y + 100, 25);
    } else if (selectedIndex == 1) {
      circle(x, y + 150, 10);
    } else if (selectedIndex == 2) {
      circle(x, y, 30);
    } else if (selectedIndex == 3) {
      circle(x, y + 50, 15);
    } else if (selectedIndex == 4) {
      circle(x, y + 200, 30);
    }
  }

  pop();
}

function mousePressed() {
  selectedIndex = -1;
  for (let i = 0; i < colors.length; i++) {
    let x = i * 30;
    let y = height - 30;
    if (mouseX > x && mouseX < x + 30 && mouseY > y && mouseY < y + 30) {
      console.log(i);
      selectedIndex = i;
    }
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
  //white background
  if (key == " ") {
    background(255);
  }
  //black background
  if (key == "b") {
    background(0);
  }
  //random background
  if (key == "r") {
    background(color(random(255), random(255), random(255)));
  }
}
