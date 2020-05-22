var border1 , border2
var outer1, outer2
var inner1, inner2
var center
function setup() {
  createCanvas(400,400);
  center=createSprite(200, 300, 50, 50,50);
  border1=createSprite(50,250,20,300,);
  border2=createSprite(350,250,20,300,);
  outer1=createSprite(90,300,50,250);
  outer2=createSprite(310,300,50,250);
  inner1=createSprite(140,300,40,200);
  inner2=createSprite(260,300,40,200);
}

function draw() {
  background("black");  
  border1.shapeColor=("red");
  border2.shapeColor=("red");
  outer1.shapeColor=("orange");
  outer2.shapeColor=("orange");
  inner1.shapeColor=("pink");
  inner2.shapeColor=("pink");
  center.shapeColor=("green");
  drawSprites();
}










