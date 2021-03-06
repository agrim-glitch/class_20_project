var car , wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  wall = createSprite(1500, 200, 60, 500);
  wall.shapeColor=color(80,80,80)
  car = createSprite(0,200,30,30);
}

function draw() {
  background(255,255,255);  

  car.velocityX = speed;

  if(wall.x-car.x <= wall.width/2 + car.width/2 )
   {

    car.velocityX = 0;
    var  deformation = 0.5 * weight *speed* speed/22500

    if(deformation>180){
      car.shapeColor = color(0,255,0)
    }

    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0)
    }

     if(deformation<100){
       car.shapeColor = color(255,0,0)
    }
       
  
  }



  drawSprites();
}