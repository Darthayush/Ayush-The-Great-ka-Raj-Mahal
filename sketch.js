
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    boxe2 =new Box(345,-5,200,20);
    boxe1= new Box(280,0,40,100);
box= new Box(410,0,40,100);
    box1 = new Box(410,130,50,150);
    box2= new Box(240,160,50,150);
    box3= new Box(340,182,100,50);
    box4= new Box(382,130,53,53);
    box5= new Box(340,10,260,50);
    box6= new Box(485,5,10,300);
    box7= new Box(220,5,10,300);
    ground = new Ground(200,390,2000,20);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box7.display();
    boxe1.display();
    box.display();
    box1.display();
   box2.display();
   box3.display();
   box4.display();
 box5.display();
 box6.display();
 boxe2.display();
 ground.display();


}