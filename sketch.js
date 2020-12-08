var ground
var monkey , monkey_running, monkeyImage
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeyImage=loadImage("sprite_0.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  score=0;  
  
  monkey=createSprite(100,300,10,10);
  monkey.scale=0.1; 
  monkey.addAnimation("monkey", monkey_running);
  
  ground=createSprite(200,330,800,10);
  ground.velocityX=-20;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background(200);
  
  if(ground.x<0){
    ground.x=ground.width/2;
     }
  textSize(20);
  text("Survival Time:" + score, 130,30);
  score = score + Math.round(getFrameRate()/60);
  
  if(keyDown("space")&& monkey.y>=100){
    monkey.velocityY=-12;
     }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  drawSprites();
}

function food(){
  if(frameCount%80===0){
     banana=createSprite(400,100,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(50,200))
    
    banana.velocityX=-6;
    banana.lifetime=95;
    
    bananaGroup.add(banana);
     }
}

function obstacles(){
  if(frameCount%300===0){
     obstacle=createSprite(400,310,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    
    obstacle.velocityX=-6;
    obstacle.lifetime=95;
    
    obstacleGroup.add(obstacle);
     }
}