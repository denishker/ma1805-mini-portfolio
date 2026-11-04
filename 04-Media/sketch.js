// The Royal Holloway Chapel that I have included carries traditional history, tradition and heritage. 
// Putting it inside a ps.js canvas presents historic architeture though a modern digital screen.

let img; 

function preload() {
  img = loadImage("chapel.jpg");
}



function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  // drawing the imhage.
  image(img, 0, 0);
}
