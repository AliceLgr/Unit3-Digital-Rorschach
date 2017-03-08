function Ball(x,y) {
  this.vector = new p5.Vector(1, 1);
  this.position = new p5.Vector(x, y);
  this.life = 1000;
  
  this.draw = function() {
    this.life--;
    
    if(this.life < 0) {
      return;
    }
  
    var steering = new p5.Vector(random(-1,1), random(-1,1));
    steering.mult(2);
    
    this.vector.add(steering);
    this.vector.normalize();
    this.vector.mult(5);
    
    this.position.add(this.vector);
    //Top
    if(this.position.y < 50) {
      this.vector.y *= -1;
    }
    //Bottom
    if(this.position.y > windowHeight-50) {
      this.vector.y *= -1;
    }
     //Right
    if(this.position.x < 50) {
      this.vector.x *= -1;
    }
    //Left
    if(this.position.x > windowWidth-50) {
      this.vector.x *= -1;
    }
    noStroke();
    fill(random(255), random(255), random(255));
    var radius = random(25);
    ellipse(this.position.x, this.position.y, radius, radius)
    ellipse(windowWidth-this.position.x,this.position.y,radius, radius);
  }
}
