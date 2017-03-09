function setup (){
  resizeCanvas(700,500)
}

var balls = [];
function mouseDragged(){
var ball = new Ball(mouseX,mouseY);
balls.push(ball);
}

function draw(){
  background(255);
  for(var i = 0; i < balls.length; i++){
  balls[i].draw();
}
}