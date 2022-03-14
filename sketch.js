const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber, rock, iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    iron = new Iron(800, 200, 80)
    rock = new Rock(500, 200, 80)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(100, 200, 50)

    var options ={
    restitution:0.3,
    friction:5,
    density:1,  
    }


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    


    plane.display();
    hammer.display();
    rubber.display();
    rock.display();
    iron.display();
}