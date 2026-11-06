let i = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // THe Snowman Body 
  fill(255);
  stroke(200);
  strokeWeight(2);
  circle(200, 240, 160);

  // The Snowmans Head 
  fill(255);
  stroke(200);
  strokeWeight(2);
  circle(200, 120, 110);

  // The Snowmans left eye
  fill(0);
  noStroke();
  circle(175, 105, 14);

  // The Snowmans right eye
  circle(225, 105, 14);

  // The Carrot nose for the snowman
  fill(255, 140, 0); // Ornage colour
  noStroke();
  triangle(200, 120, 185, 125, 200, 130);

  // moving mouth for snowman
fill(0);
  ellipse(200, 145, i, 15);

i = i+1;

// SnowmAns scraf (bottom)
  fill(200, 40, 40)
  noStroke();
  rect(210, 193, 25, 70, 4);

  //SNowmans Scraf (top)
  fill(200,40,40)
  noStroke();
  rect(145, 173, 110, 25, 10);
}
