const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300

function preload()
{
	
}

function setup() {
	createCanvas(1515, 725);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground = new Ground(width/2, 700, width, 25)
	 

	for (var k = 40; k<=width; k = k+80){
		divisions.push(new Division(k, height-divisionHeight/2-30, 10, divisionHeight))
	}


	for (var j = 50; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j, 75));
    }

    for (var j = 25; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j, 150));
	}
	
     for (var j = 50; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,225));
    }

     for (var j = 25; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,300));
    }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 211, 117);
  
  

  for (var i = 0; i < plinkos.length; i++) {
     
	plinkos[i].display();
	
  }

   if(frameCount%30===0){
     particles.push(new Particle(random(250, 1275), 10,10));
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

  for (var k = 0; k < divisions.length; k++) {
	divisions[k].display();
  }

  ground.display();
}



