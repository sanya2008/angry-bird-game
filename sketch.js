const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var engine
var world
var bodies
var box1
var box2
var ground1
var ground2
var box3
var box4
var box5
var ladder1
var ladder3
var ladder2
var ladder4
var pig1
var pig2




function setup(){
createCanvas(1200,400)
engine=Engine.create()
world=engine.world;

box1=new box(700,320,70,70)
box2=new box(920,320,70,70)
box3=new box(700,240,70,70)
box4=new box(920,240,70,70)
box5=new box(810,160,70,70)

pig1=new pig(810,350)
pig2=new pig(810,240)

ladder1=new ladder(810,260,300,PI/2)
ladder2=new ladder(810,180,300,PI/2)
ladder3=new ladder(760,120,150,PI/7)
ladder4=new ladder(870,120,150,-PI/7)

ground1=new ground(600,370,1200,40)
ground2=new ground(200,300,400,150)

}



function draw(){

  background("green")
Engine.update(engine)
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

ground1.display();
ground2.display();

ladder1.display();
ladder2.display();
ladder3.display();
ladder4.display();

pig1.display();
pig2.display();
}


























