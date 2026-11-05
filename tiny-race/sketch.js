
let racerXs = [30, 80, 30, 30];
let startY = 50;
let yStep = 80;
let finishX = 560;
function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
  racerXs.push}("70")
function draw() {
  background(240);
  line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 3);
    }
    fill("cornflowerblue");
    circle(racerXs[i], y, 24);
  }
}