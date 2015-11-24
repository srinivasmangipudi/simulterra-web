var myCanvas;
function setup() {
  var myCanvas = createCanvas(displayWidth, displayHeight);
  myCanvas.parent('mysketch');
}


function draw() {
  background(237, 34, 93);
  fill(0);

  //move the canvas to the horizontal mouse position
  //relative to the window
  myCanvas.position(winMouseX+1, windowHeight/2);

  //the y of the square is relative to the canvas
  rect(20,mouseY,60,60);
}
