var boy, boy1
var path,path1

function preload(){
  //pre-load images
 path = loadImage("path.png");
 boy = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path1 = createSprite(200.200);
  path1.addImage(path);
  path1.scale = 1.2;
  path1.velocityY = 4;

  boy1 = createSprite(180,340,30,30);
  boy1.addAnimation("boyRunning",boy);
  boy1.scale = 0.08;

  leftBoundary = createSprite(0,0,100,800);
  rightBoundary = createSprite(410,0,100,800);
  leftBoundary.visible = false;
  rightBoundary.visible = true;


}

function draw() {
  background(0);
  
  boy1.x = World.mouseX;
  edges = createEdgeSprites();
  boy1.collide(leftBoundary);
  boy1.collide(rightBoundary);

  if(path1.y>400){
    path1.y = height/2;
  }

 drawSprites()
}
