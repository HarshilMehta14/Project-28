
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj, groundObject, launcherObject;
var mango1, rope1;
var world;
var boy, stone;

function preload(){
	boy = loadImage("images/boy.png");
	stone = loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	stoneObj = new Stone(230, 430);

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);
	
	rope1 = new Rope(stoneObj.body,{x: 230, y: 430});

	Engine.run(engine);

}

function draw() {

  background(0,255,255);
  image(boy ,200,360,200,300);
  
  treeObj.display();

  mango1.display();

  rope1.display();
  stoneObj.display();

  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
	rope1.fly();
}