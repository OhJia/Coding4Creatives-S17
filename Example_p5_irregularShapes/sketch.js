/******************************************* 
    
    Example of drawing irregular shapes
    with bezierVertex() and curveVertex()

*******************************************/


var p1, p2, p3, p4;

function setup() {
  createCanvas(800, 600);

  /* 
    creatVector(x, y); creates an object with two values: 
    the x and y value of a point. 
  */
  p1 = createVector(random(0, 400), random(0, 400)); 
  p2 = createVector(random(0, 400), random(0, 400));
  p3 = createVector(random(0, 400), random(0, 400));
  p4 = createVector(random(0, 400), random(0, 400));
  p5 = createVector(random(0, 400), random(0, 400));

}


function mouseDragged() {
  /* 
    Create new Vector for point p1 
    every time the mouse is dragged. 
  */
  p1 = createVector(mouseX, mouseY);
}


function draw() {
  background(100);


  /* 
    Create new shape with bezierVertex() 
  */
  push();

    // Move entire shape to (150, 150)
    translate(150, 150); 

    fill(255);
    strokeWeight(4);
    stroke(0); 

    beginShape();
      // Must use vertex() before bezierVertex()
      vertex(300, 20); 

      bezierVertex(80, 0, 80, 75, 30, 75);
      bezierVertex(80, 75, 30, 75, 80, 0);
    endShape(CLOSE); 
  pop();


  /* 
    Create new shape with curveVertex() 
  */
  push();

    // Move entire shape to (150, 150)
    translate(50, 50); 
    
    fill(255, 30, 105);
    strokeWeight(4);
    stroke(0); 

    beginShape();
      curveVertex(p1.x,  p1.y);
      curveVertex(p1.x,  p1.y);
      curveVertex(p2.x,  p2.y);
      curveVertex(p3.x,  p3.y);
      curveVertex(p4.x,  p4.y);
      curveVertex(p4.x,  p4.y);
    endShape(CLOSE); 
  pop();

  /* 
    Create new shape with quadraticVertex() 
  */
  push();

    // Move entire shape to (250, 250)
    translate(250, 250); 
    
    fill(0, 30, 105);
    strokeWeight(4);
    stroke(0); 

    beginShape();
      vertex(20, 20);
      quadraticVertex(p1.x, p1.y, p2.x, p2.y);
      quadraticVertex(p2.x, p2.y, p3.x, p3.y);
      quadraticVertex(p3.x, p3.y, p1.x, p1.y);
      //quadraticVertex(, 60, 60, 60);
      vertex(20, 20);
    endShape(CLOSE); 
  pop();


}
  
