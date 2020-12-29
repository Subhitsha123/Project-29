const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, 650, width, 10);
    
    base1 = new Ground(290,255,200,10);
    base2 = new Ground(550,600,300,10);

    box1 = new Box(230,235,30,40);
    box2 = new Box(260,235,30,40);
    box3 = new Box(290,235,30,40);
    box4 = new Box(290,155,30,40);
    box5 = new Box(320,235,30,40);
    box6 = new Box(350,235,30,40);
    box7 = new Box(260,193,30,40);
    box8 = new Box(290,193,30,40);
    box9 = new Box(320,193,30,40);

    box_1  = new Box(430,575,30,40);
    box_2  = new Box(460,575,30,40);
    box_3  = new Box(490,575,30,40);
    box_4  = new Box(520,575,30,40);
    box_5  = new Box(550,575,30,40);
    box_6  = new Box(580,575,30,40);
    box_7  = new Box(610,575,30,40);
    box_8  = new Box(640,575,30,40);
    box_9  = new Box(670,575,30,40);

    box_10 = new Box(460,555,30,40);
    box_11 = new Box(490,555,30,40); 
    box_12 = new Box(520,555,30,40);
    box_13 = new Box(550,555,30,40);
    box_14 = new Box(580,555,30,40);
    box_15 = new Box(610,555,30,40);
    box_16 = new Box(640,555,30,40);

    box_17 = new Box(490,535,30,40);
    box_18 = new Box(520,535,30,40);
    box_19 = new Box(550,535,30,40);
    box_20 = new Box(580,535,30,40);
    box_21 = new Box(610,535,30,40);

    box_22 = new Box(520,515,30,40);
    box_23 = new Box(550,515,30,40);
    box_24 = new Box(580,515,30,40);
 
    box_25 = new Box(550,495,30,40);

    polygon = new Polygon(700,100,20,20);

    slingshot = new Rope(polygon.body,{x:700,y:100});

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(220);

  ground.display();

  base1.display();
  base2.display();

  fill(107,7,114);
  box1.display();  
  box2.display(); 
  box3.display(); 
  box5.display(); 
  box6.display();

  fill(251,140,171);
  box4.display();

  fill(207,38,138);
  box7.display(); 
  box8.display(); 
  box9.display(); 

  polygon.display();

  slingshot.display();

  fill(42,245,152);
  box_1.display();
  box_2.display();
  box_3.display();
  box_4.display();
  box_5.display();
  box_6.display();
  box_7.display();
  box_8.display();
  box_9.display();

  fill(34,228,172);
  box_10.display();
  box_11.display();
  box_12.display();
  box_13.display();
  box_14.display();
  box_15.display();
  box_16.display();

  fill(27,215,187)
  box_17.display();
  box_18.display();
  box_19.display();
  box_20.display();
  box_21.display();

  fill(20,201,203)
  box_22.display();
  box_23.display();
  box_24.display();

  fill(15,190,216);
  box_25.display();

 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}




