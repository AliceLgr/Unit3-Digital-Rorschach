function Ball(x,y) {
  this.vector = new p5.Vector(1, 1);
  this.position = new p5.Vector(x, y);
  this.life = 800;
  
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
    if(this.position.y < 100) {
      this.vector.y *= -1;
    }
    //Bottom
    if(this.position.y > 500-100) {
      this.vector.y *= -1;
    }
     //Right
    if(this.position.x < 100) {
      this.vector.x *= -1;
    }
    //Left
    if(this.position.x > 760-100) {
      this.vector.x *= -1;
    }
    noStroke();
    fill(0, 0, 0, 150);
    var radius = random(40);
    ellipse(this.position.x, this.position.y, radius, radius)
    ellipse(760-this.position.x,this.position.y,radius, radius);
  }
}
