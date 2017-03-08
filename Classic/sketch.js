//created by Alice Lengereau
//february 2017
//steering vectors thanks to Sion Fletcher
//code generates random pattern inspired from Rorscharch inkblot cards
//coded with p5.js

function setup (){
  resizeCanvas(760, 500)
}

var balls = [];
function mouseClicked(){
var ball = new Ball(mouseX,mouseY);
balls.push(ball);
}

function draw() {
  for(var i = 0; i < balls.length; i++){
    balls[i].draw();
  }
}