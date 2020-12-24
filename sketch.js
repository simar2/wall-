var car,wall;
var speed,weight;

function setup(){
  createCanvas(1600,400);
  speed=random(55,90);
  wei

  car = createCanvas(50,200,20,20);
  car.velocityX = speed; 
  car.shapeColor = color(255);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
 

}

function draw(){
  background(0,0,0);
  car.x = World.mouseX;
  car.y = World.mouseY;

 if(car.x - wall.x < wall.width/2 + car.width/2
  && wall.x - car.x < car.width/2 + wall.width/2
  && car.y - wall.y < wall.height/2 + car.height/2
  && wall.y - car.y < car.height/2 + wall.height/2)
  {
    wall.shapeColor = "red";
    car.shapeColor = "red";
  }
  else{
    wall.shapeColor = "green";
    car.shapeColor = "green";
  }




  drawSprites();
}