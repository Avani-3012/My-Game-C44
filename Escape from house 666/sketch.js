var night;
var morning;
var rm=0;
var ground,g,g1,g2;
var runner,run;
var hauntedhouse, haunt;

function preload(){
  night = loadImage("night.png");
  morning = loadImage("backgroundmorning.png");
 ground = loadImage("ground.png");
 g = loadImage("g2.png");
 run = loadImage("runner1.png");
 hauntedhouse = loadImage("hauntedh.png");

}

function setup() {
  createCanvas(800,400);
  g1 =createSprite(20, 374, 50, 50);
   g2 = createSprite(640,370,50,50);
   runner = createSprite(300,270,50,50);
   haunt = createSprite(50,280,20,50);
   g1.addImage("ground",ground);
   g2.addImage("g2",g);
   runner.addImage("runner1",run);
   haunt.addImage("hauntedh",hauntedhouse);
   g1.scale = 1;
   g2.scale = 1;
   runner.scale = 0.2;
   haunt.scale = 0.4;
}

function draw() {
  if(frameCount%100000 === 0){
    rm = rm+1
    background(255)
  }
  if(rm%2===0){
    background(night);
   

  }if(rm%2!==0){
    background(morning);

  }
 

  drawSprites();
}