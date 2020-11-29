
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;
//var dustbin, paper,ground; 	
//var world;


function setup() {
	createCanvas(1600, 700);
	//rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	//dustbinObj=new dustbin(1200,650);
   paper =new Paper(200,450,40);
	ground = new ground(600,650,2000,20);
	dustbin =  new dustbin(1200,650);

	
}

	
function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  
  paper.display();
  ground.display();
  dustbin.display();
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

   	Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-85});
    
  	}
}





