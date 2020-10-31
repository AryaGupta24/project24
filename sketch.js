const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var paper1;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1 = new paper(150, 350);


}


function draw() {
  //circleMode(CENTER);
  background(0);
  Engine.update(engine);
  paper1.display();
  drawSprites();
 
}



