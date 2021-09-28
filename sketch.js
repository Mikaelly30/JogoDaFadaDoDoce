var pirulitoImg,bgImg;
var pirulito, corpoDoPirulito;
var donut, corpoDoDonut;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	pirulitoImg = loadImage("candy.png");
	donutImg = loadImage("dounut.png");
	bgImg = loadImage("fundo1.jpg");
	//load animation for fairy here
	fadaImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	somDaFada = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	somDaFada.play();
	
	//create fairy sprite and add animation for fairy
	fada = createSprite(130,520);
	fada.addAnimation("fadaVoando", fadaImg);
	fada.scale = 0.2;

	donut = createSprite(750,30);
	donut.addImage(donutImg);
	donut.scale = 0.2;


	pirulito = createSprite(600,30);
	pirulito.addImage(pirulitoImg);
	pirulito.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	corpoDoPirulito = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, corpoDoPirulito);
	
	corpoDoDonut = Bodies.circle(710 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, corpoDoDonut);

	Engine.run(engine);

}


function draw() {
  background(bgImg);
  
  pirulito.x= corpoDoPirulito.position.x 
  pirulito.y= corpoDoPirulito.position.y 

  donut.x= corpoDoDonut.position.x 
  donut.y= corpoDoDonut.position.y 

  console.log(pirulito.y);
  

  //write code to stop star in the hand of fairy

	if(pirulito.y > 470 && corpoDoPirulito.position.y > 470 ){
		Matter.Body.setStatic(corpoDoPirulito,true);
	}

	if(donut.y > 470 && corpoDoDonut.position.y > 470 ){
		Matter.Body.setStatic(corpoDoDonut,true);
	}
  drawSprites();

}

function keyPressed() {
	
	if(keyCode === LEFT_ARROW){
		fada.x = fada.x - 20;
	}

	if(keyCode === RIGHT_ARROW){
		fada.x = fada.x + 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(corpoDoPirulito,false); 
	}

	if (keyCode === UP_ARROW) {
		Matter.Body.setStatic(corpoDoDonut,false); 
	}

	//writw code to move fairy left and right
	
}
