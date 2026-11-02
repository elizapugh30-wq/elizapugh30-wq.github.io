let shade = 0;

function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke();
}

function draw() {
  if (mouseIsPressed && mouseX < width) {
    fill(shade);
    for (let i = 0; i < 5; i++) {
      circle(mouseX + i * 10, mouseY, 10);
    }
    shade = shade + 1;
  }

  if (shade > 200 || keyIsPressed) {
    shade = 0;
  }
}