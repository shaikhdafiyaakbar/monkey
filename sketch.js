var PLAY = 1;
var END = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);

 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
  
 banana=createSprite(230,80,10,10);
 banana.velocityX=-2;
  
 ground=createSprite(400,350,900,10);
 ground.velocityX=-8;
 ground.x=ground.width/2;
 console.log(ground.x);
  
}

function draw() {
background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
var banana = Math.round(random(1,4));
    console.log(banana);
    
    
 drawSprites();
  
}






