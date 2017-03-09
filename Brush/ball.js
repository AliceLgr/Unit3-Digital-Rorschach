function Ball(x,y) {
  function randomInt(max) {
   return Math.floor(Math.random() * max);
}
  var radius = randomInt(25);
 
  this.position = {x:x, y:y};
  this.draw = function(){
    fill(0,0,0,150);
    noStroke();
    ellipse(this.position.x, this.position.y, radius, radius)
    ellipse(700-this.position.x,this.position.y,radius, radius);
  }  
}
