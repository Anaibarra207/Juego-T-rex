var trex ,trex_running, trex_collided;
var ground, groundImage, invisibleGround;

var clound, cloudsGroup, cloundImage;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;


var newImage;

function preload(){
trex_running = loadAnimation("text1.png, text2.png, text3.png; text4.png");
trex_collided = loadAnimation( trex_collided);

groundImage = loadImage("ground2.png");

cloundImage = loadImage("clound.png");

obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
obstacle5 = loadImage("obstacle5.png");
obstacle6 = loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200);

  trex - createSprite(50,160, 20, 50);
  trex.addAnimation("running",trex_running);
  //trex.addAnimation("collided", trex_collided)
  trex.scale= 0.5;

  ground=createSprite(200, 180, 400, 20);
  ground.addImagine("ground",groundImage);
  ground.x = ground.width/2;
  ground.velocityX = -4;

  invisibleGround = createSprite(200, 180, 400, 10);
  invisibleGround.visible = false;


}

function draw(){
  background("black");

 
 
  if (keyDown("space") && trex.Y>=100) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8;
  
  if (ground.x < 0){
    ground.X = ground.width/2;
   }

  trex.collide(invisibleGround);

  //aparecen nubes
  spawnClouds();

  spawnObstacles();

  drawSprites();
}

function spawnClouds(){
  //escribir aqui el codigo para aparecer las nubes
  if(frameCount % 60 == 0){
  cloud = createSprite (600,100,40,10);
  cloud.addImage(cloudImage);
  cloud.y = Math.round(random(10,60));
  cloud.scale = 0.4;
  cloud.velocityX = -3;
  clound.depth=trex.depth;
  trex.depth>trex.depth+2;
  clound.lifetime=200;
  }
}


function spawnObstacles(){
  if(frameCount % 60 == 0) {
    obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -6;
    var random= Math.round(random(1.6));
    switch(random){
      case 1: obstacle1.addImage(obstacle1); break;
      case 1: obstacle2.addImage(obstacle2); break;
      case 1: obstacle3.addImage(obstacle3); break;
      case 1: obstacle4.addImage(obstacle4); break;
      case 1: obstacle5.addImage(obstacle5); break;
      case 1: obstacle6.addImage(obstacle6); break;
      default:break;
    }
    obstacle.scale= 0.5;
    obstacle.lifetime = 100;
  }
}