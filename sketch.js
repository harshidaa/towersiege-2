const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2;
var block1;
var back;


function setup() {
  
  createCanvas(800,400);
  



  engine = Engine.create();
  world = engine.world;


  stand1 = new Ground(300, 330, 250, 15);
  stand2 = new Ground(600, 200, 200, 15);
  
  //row1
  block1 = new Box(210, 300);
  block2 = new Box(240, 300);
  block3 = new Box(270, 300);
  block4 = new Box(300, 300);
  block5 = new Box(330, 300);
  block6 = new Box(360, 300);
  block7 = new Box(390, 300);

  //row2
  block8 = new Box(240, 260);
  block9 = new Box(270, 260);
  block10 = new Box(300, 260);
  block11 = new Box(330, 260);
  block12 = new Box(360, 260);
  
  //row3
  block13 = new Box(270, 220);
  block14 = new Box(300, 220);
  block15 = new Box(330, 220);

  //row4
  block16 = new Box(300, 180);

  //stack2row1
  block17 = new Box(540, 170);
  block18 = new Box(570, 170);
  block19 = new Box(600, 170);
  block20 = new Box(630, 170);
  block21 = new Box(660, 170);

  //stack2row2
  block22 = new Box(570, 130);
  block23 = new Box(600, 130);
  block24 = new Box(630, 130);

  //stack2row3
  block25 = new Box(600, 90);

  
  polygon = new Polygon(50, 250, 15);

  slingshot = new SlingShot(polygon.body, {x: 80, y: 250});


}

function draw() {
  Engine.update(engine);
  background("green");
  drawSprites();

  stand1.display();
  stand2.display();

  fill("blue"); 
  stroke("black");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  fill("red");
  stroke("black");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("orange");
  stroke("black");
  block13.display();
  block14.display();
  block15.display();

  fill("white");
  stroke("black"); 
  block16.display();

  fill("white");
  stroke("black"); 
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("orange");
  stroke("black"); 
  block22.display();
  block23.display();
  block24.display();

  fill("blue");
  stroke("black"); 
  block25.display();
    
  
  polygon.display();
  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
    slingshot.attach(polygon.body);
  }
}