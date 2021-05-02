const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj, groundObject;
var Stone_rope;
var rope1, rope2, rope3, rope4, rope5;
var mango1, mango2, mango3, mango4, mango5;
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

	mango1 = new mango(1100,100,35);
	mango2 = new mango(900,200,25);
	mango3 = new mango(1200,230,30);
	mango4 = new mango(1050,200,20);
	mango5 = new mango(1000,100,23);
	

	stoneObj = new Stone(240, 440);

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);
	
	Stone_rope = new Rope(stoneObj.body,{x: 240, y: 440});

	rope1 = new Rope(mango1.body, {x : 1100, y : 100});
	rope2 = new Rope(mango2.body, {x : 900, y : 200});
	rope3 = new Rope(mango3.body, {x : 1200, y : 230});
	rope4 = new Rope(mango4.body, {x : 1050, y : 200});
	rope5 = new Rope(mango5.body, {x : 1000, y : 100});

	Engine.run(engine);

}

function draw() {

  background(0,255,255);
  image(boy ,200,360,200,300);
  
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  Stone_rope.display();
  stoneObj.display();

  groundObject.display();

  if(detectCollision(stoneObj, mango1)){
	  rope1.fly();
  }

  if(detectCollision(stoneObj, mango2)){
	rope2.fly();
	
}

 if(detectCollision(stoneObj, mango3)){
	rope3.fly();
	
}
if(detectCollision(stoneObj, mango4)){
	rope4.fly();
	
}
if(detectCollision(stoneObj, mango5)){
	rope5.fly();
	
}

}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
	Stone_rope.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y: 420})
		Stone_rope.attach(stoneObj.body);
	}
}

function detectCollision(body1, body2){
    if(body1.x - body2.x <= body1.width/2 + body2.width/2 && body2.x - body1.x <= body1.width/2 + body2.width/2
       && body1.y - body2.y <= body1.height/2 + body2.height/2 && body2.y - body1.y <= body1.height/2 + body2.height/2)
       {
           return true;
       }
       else
       {
           return false;
       }

}