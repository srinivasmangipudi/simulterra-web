var myCanvas;
function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent('mysketch');
}


function draw() {
background(255);

 var locY = (mouseY / height - 0.5) * (-2);
 var locX = (mouseX / width - 0.5) * 2;

 ambientLight(50);
 directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
 pointLight(0, 0, 200, locX, locY, 0);
 pointLight(200, 200, 0, -locX, -locY, 0);

 translate(250, 0, 0);
 ambientMaterial(250);
 sphere(120, 64);
}
