//This is the cannonball game project 24
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

var engine, world;
var ground, cannon;
var angle = 0;
var ball1, ball2, ball3;

function setup() {
  createCanvas(900, 550);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(450, 530, 900, 50); 
  cannon = new Cannon(75,height-125,60,30);
  ball1 = new Ball(600, 250, 20);
  ball2 = new Ball(700, 250, 20);
  ball3 = new Ball(500, 250, 20);
}

function draw() {
  background(255);
  Engine.update(engine);
  //Display
  ground.display();
  cannon.display();
  ball1.display(255,0,0); //red
  ball2.display(0,255,0); // blue
  ball3.display(0,0,255); //green
}
