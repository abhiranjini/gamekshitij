const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*var background
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3, thunder4;
var umbrella;
var thunder, thunderCreatedFrame = 0;
var backgroundImg*/
var lava,monst

function preload(){

//bike=loadImage("Images/bike.png")
//desert=loadImage("Images/cartoon-desert-banner.jpg")
//coin=loadImage("Images/coin.jpg")
//electriccar=loadImage("Images/electriccar.jpg")
/*fuel=loadImage("Images/fuel.png")
gem=loadImage("Images/gem.jpg")
grassimg=loadImage("Images/grass.jpg")
grass2=loadImage("Images/grass2.jpg")*/
lavaimg=loadImage("lava.jpg")

/*quad=loadImage("Images/quad.jpg")
tank=loadImage("Images/tank.jpg")
volcano=loadImage("Images/volcano.jpg")*/
//getBackgroundImage()

}

function setup(){
  var canvas = createCanvas(1000,700);

  engine = Engine.create();
  world  = engine.world;
  
  lava= createSprite(600,300,1000,700)
  lava.addImage(lavaimg)
  lava.scale=0.8
  lava.x= lava.width/2
 

}

function draw(){
  //if (backgroundImg)
  background(0);

  //Engine.update(engine);
  lava.velocityX=-3
  if(lava.x < 500){
    lava.x= lava.width/2
     }

     monst= new Player(100,500,200,200)
     console.log(monst)
  drawSprites();
  
}
  