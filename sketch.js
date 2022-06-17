
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var block1;
var block2;
var block3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var block1_options = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0
	}

	var block2_options = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1
	}

	var block3_options = {
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3
	}

	var ground_options = {
		isStatic: true
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	block1 = Bodies.circle(150,10,40, block1_options)
	World.add(world,block1)

	block2 = Bodies.rectangle(110,50,40,40, block2_options)
	World.add(world,block2)

	block3 = Bodies.rectangle(290,50,40,80, block3_options)
	World.add(world,block3)

	ground = Bodies.rectangle(600,580,1200,2, ground_options)
	World.add(world,ground)

	

	rectMode(CENTER);
	ellipseMode(RADIUS);
	fill("green");
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("brown")

  rect(ground.position.x,ground.position.y,1200)

  ellipse(block1.position.x,block1.position.y,40);

  rect(block2.position.x,block2.position.y,40,40)
  rect(block3.position.x,block3.position.y,40,80)
  
  
  drawSprites();
 


}



