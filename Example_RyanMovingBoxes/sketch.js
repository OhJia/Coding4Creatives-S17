var myBox = {
	x: 800
};


function setup() {
	createCanvas (800, 300);
}

function draw() {
	//background
	background (0, 171, 255); 
	text("Try clicking each box", 200, 100);

	//Draw box, three times
	for (i = 0; i < 3; i++) {

		// If box get out of the canvas, 
		// move it back to the right side
		if (myBox.x <= -1000) {
			myBox.x = 800;
		} 

		// If mouseIsPressed is true
		if (mouseIsPressed) {

			// And if mouseX & mouseY are inside the box
			if (mouseX >= myBox.x + i*200 && 
				mouseX <= myBox.x + i*200 + 150 &&
				mouseY >= 100 && mouseY <= 100 + 150) {
				
				// Change the box color
				fill (255, 200, 0);

			// if mouseX & mouseY are not inside the box
			} else {
				fill (255, 0, 0);
				noStroke();
			}
			
		// If mouseIsPressed is false
		} else {
			fill (255, 0, 0);
			noStroke();
		}

		
		// Draw each box 200 px away from each other
		rect (myBox.x + i*200, 100, 150, 150);
	}

	// Move boxes
	myBox.x = myBox.x - 2;

	// Belt
	fill (0);
	rect (0, 250, 800, 30);
	
}