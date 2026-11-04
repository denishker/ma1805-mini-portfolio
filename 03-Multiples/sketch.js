let theText = ["Snow", "Cold", "Winter", "Vibes"];
let word = theText[0];
let i = 0;


function setup() {
  createCanvas(600, 400);
  frameRate(2);
}

function draw() {
  background(0);

  // Text display
  fill("red");
  textSize(50);
  text(word, random(400), height/2);
  
  // value of word
word = theText[i];
i=i+1;
if(i>=theText.length){
  i=0;
}
  console.log(i)

  

}
