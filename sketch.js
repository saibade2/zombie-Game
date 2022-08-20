var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombie_img;
var bullet,bullet_img;
var zombieGroup,score=0


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombie_img= loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  bullet_img= loadImage("assets/bullet.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = false
   player.setCollider("rectangle",0,0,300,300)

   
zombieGroup= createGroup()

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  bullet= createSprite(player.x+40,player.y-20,10,10)
  bullet.addImage(bullet_img)
  bullet.velocityX=8
  bullet.scale= 0.09
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(bullet.isTouching(player)){
  score=score+5
}

drawSprites();
spawnZombie();
textSize(25)
fill("white")
text("score:"+score,1000,90)
}
 
function spawnZombie(){
  if(frameCount % 90 ===0){
    y= Math.round(random(200,600))
    zombie = createSprite(1350,y,50,50)
    zombie.addImage(zombie_img)
    zombie.velocityX = -3
    zombie.scale=0.15
   zombieGroup.add(zombie) 
  }
}
