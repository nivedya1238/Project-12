var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.x = mouseX
  rabbit.collide(edges);
  createApple();
  createOrange();
  drawSprites();
}

function createApple(){
  if(frameCount % 60 === 0){
    var apples = createSprite(random(50, 350), 50, 20, 20)
    apples.scale = 0.06
    apples.velocityY = 2
    apples.addImage(appleImg)
    rabbit.depth = apples.depth
    rabbit.depth = rabbit.depth + 1
  } 
}

function createOrange(){
  if(frameCount % 70 === 0){
    var oranges = createSprite(random(70, 350), 50, 20, 20)
    oranges.scale = 0.07
    oranges.addImage(orangeImg)
    oranges.velocityY = 2
  }
}