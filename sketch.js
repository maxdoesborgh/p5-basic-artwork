function setup() {
  // Dit maakt het canvas zo groot als je browserscherm
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
  // Een hele lichte transparante achtergrond zorgt voor "trails" (sporen)
  background(20, 10); 
  
  // Teken een cirkel op de plek van je muis
  noStroke();
  fill(0, 255, 200);
  ellipse(mouseX, mouseY, 50, 50);
}

// Zorgt dat het kunstwerk niet kapot gaat als je je scherm herschaalt
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(20);
}