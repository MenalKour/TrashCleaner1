
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var side1,side2,side3
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper= new Paper(200,200,35)
	ground= new Ground(100,height,2300,20)
	side1= new Dustbin(800,330,15,120)
	side2=new Dustbin(1000,330,15,120)
	side3=new Dustbin(900,380,185,15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  paper.display();
  ground.display();
  side1.display()
  side2.display()
  side3.display()
  
  keyPressed
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x: 12,
			y: -50
	})
}
}
