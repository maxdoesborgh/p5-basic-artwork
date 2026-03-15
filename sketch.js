function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 50, 50); // Een cirkel die je muis volgt
}