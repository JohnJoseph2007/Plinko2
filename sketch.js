const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var en, wo;

var score = 0;
var turn = 0;

var gs = "play";

var plinko = [];
var division = [];
var particle;

var divH = 300;

function setup(){
    createCanvas(480,800);
    en = Engine.create();
    wo = en.world;

    gr = new Ground(240, 795, 480, 10);

    for(var i = 0; i <= 480; i += 80) {
      division.push(new Div(i, 800 - divH/2, 20, divH));
    }

    for(var i = 50; i <= 430; i += 40) {
      plinko.push(new Plinko(i, 100, 10));
    }

    for(var i = 30; i <= 450; i += 40) {
      plinko.push(new Plinko(i, 200, 10));
    }

    for(var i = 50; i <= 430; i += 40) {
      plinko.push(new Plinko(i, 300, 10));
    }

    for(var i = 30; i <= 450; i += 40) {
      plinko.push(new Plinko(i, 400, 10));
    }
}

function draw(){
  background(0);
  Engine.update(en);
  text("Score : " + score, 20, 30);
  text("Turn : " + turn, 420, 30)

  if(gs === "play") {    
  gr.display();

    for(var i = 0; i < division.length; i++) {
      division[i].display();
    }

    for(var j = 0; j < plinko.length; j++) {
      plinko[j].display();
    }

    if(particle!=null) {
      particle.display();

      if(particle.body.position.y > 760){    
        if(particle.body.position.x < 300) {
          score += 300;
          particle = null;
          turn += 1;
        }

        else if(particle.body.position.x > 300 && particle.body.position.x < 600) {
          score += 100;
          particle = null;
          turn += 1;
        }

        else if(particle.body.position.x > 600 && particle.body.position.x < 900) {
          score += 200;
          particle = null;
          turn += 1;
        }
      }
    }
  }

  if(turn===5) {
    gs = "end";
  }

  if(gs==="end") {
    push();
    textSize(50)
    text("GAME OVER", 100, 400);
    pop();
  }
}

function mousePressed() {
  particle = new Particle(mouseX, 10, 10);
}