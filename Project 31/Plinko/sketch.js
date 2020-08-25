const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var world;
var score=0;
var parti;
var turn=0;
var gamestate=play;
function setup() {
  createCanvas(480,800);
  rectMode(CENTER);
if (gamestate!=="end"){
  turn=5;
}
  engine = Engine.create();
	world = engine.world;
  //parti=new particle(mouseX,10,10,10);
 
  for(var k=0;k<=innerWidth;k=k+80){
    divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  }
ground3=new ground(480,height/2,10,height);
ground4=new ground(0,height/2,10,height);
  land=new ground(width/2,800,width,10);
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,40,10));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,90,10));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,140,10));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,190,10));
  }
  //if(frameCount%60===0){
    //particles.push(new particle(random(width/2-10,width/2+10),10,10));
  //}
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,240,10));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,290,10));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,340,10));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,390,10));
  }
  
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("darkslategrey"); 
  textSize(30);
  fill("red")
  text("RIGHT CLICK FOR BALLS",60,450);
  textSize(10);
  fill("white");
  text("TURN:"+turn,width-70,20);
  textSize(20);
  fill("white");
  text("50",25,500);
  textSize(20);
  fill("white");
  text("100",100,500);
  textSize(20);
  fill("white");
  text("500",180,500);
  textSize(20);
  fill("white");
  text("500",260,500);
  textSize(20);
  fill("white");
  text("100",345,500);
  textSize(20);
  fill("white");
  text("50",425,500);
  textSize(20);
  fill("white");
  text("SCORE:"+score,25,20);
  if(parti!=null){
    parti.display();
    if(parti.body.position.y>760){
     
      if(parti.body.position.x<80){
        score=score+50;
        
      }
      if(parti.body.position.x<160 && parti.body.position.x>80){
        score=score+100;
       // parti=null;
      }
      if(parti.body.position.x<240 && parti.body.position.x>160){
        score=score+500;
        //parti=null;
      }
      if(parti.body.position.x<320 && parti.body.position.x>240){
        score=score+500;
        //parti=null;
      }
      if(parti.body.position.x<400 && parti.body.position.x>320){
        score=score+100;
        //parti=null;
      }
      if(parti.body.position.x<480 && parti.body.position.x>400){
        score=score+50;
        
      }
      if(parti.body.position.x<480){
       parti=null;
        
      }
    }
  }
 
for(var k=0;k<divisions.length;k++){
  divisions[k].display();
}
for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
}
for(var l=0;l<particles.length;l++){
  particles[l].display();
}
if(turn===0 && parti===null){
  gamestate="end";
}
if(gamestate==="end"){
  textSize(40);
  fill("white");
  text("GAME OVER",125,height/2-150);
}
land.display();
//parti.display();
  drawSprites();
}
function mouseReleased(){
  if(gamestate!=="end"){
    turn=turn-1;
  parti = new particle(mouseX,10,10,10);
  }
}