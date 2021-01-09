//define global variables - helicopter, package, ground
var helicopterIMG, helicopterSprite;
var packageIMG,packageSprite;
var packageBody,ground;
var box1,box2,box3;

//define constants - engine, world, bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
	//load helicopter image
	helicopterIMG = loadImage("helicopter.png");
	
	//load package image
	packageIMG = loadImage("package.png");

}

function setup() {
	
	//create the canvas
	createCanvas(800, 700);
	
	//change the rect mode to center
	rectMode(CENTER);
	
	//define, scale, and add an image to the package sprite
	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.15;

	//define, scale, and add an image to the helicopter sprite
	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	//define and color the ground sprite
	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

	//essential lines to create angine and add the world to the engine
	engine = Engine.create();
	world = engine.world;

	//define package body and add it to the world
	//packageBody radius can change to effect how it collides with the ground
	packageBody = Bodies.circle(width/2,200,20,{restitution : 0.5, isStatic : true});
	World.add(world,packageBody);
	
	//define ground and add it to the world
	ground = Bodies.rectangle(width/2,650,width,15,{isStatic : true});
 	World.add(world,ground);

	//create the boxes
	box1 = new Box(400,650,200,20);
	box2 = new Box(310,610,20,100);
	box3 = new Box(490,610,20,100);
	
	//update "Engine" with the "engine"
	Engine.run(engine);
  
}

function draw() {
  
  //set background color to black (zero)
  background(0);
  
  //make position of package sprite to match the package body
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  
  //call keyPressed() function
  keyPressed();
  
  //display boxes
  box1.display();
  box2.display();
  box3.display();
 
  //function to draw sprites
  drawSprites();

}

function keyPressed() {
 
	//if the down arrow is pressed, the static of the package body becomes false
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
	  
}