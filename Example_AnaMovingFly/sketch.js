// Create a function for drawing the fly
function drawFly(x, y) {
	// Wings
	fill(255,255,255);
	stroke(0, 0, 0);
	ellipse(x+13, y, 8, 6);

	fill(255,255,255);
	stroke(0, 0, 0);
	ellipse(x+3, y, 8, 6);

	// Body
	fill(0, 0, 0);
	stroke(0, 0, 0);
	rect(x, y+2, 15, 8);
}

// Create variables for moving the X and Y 
// of the fly
var moveFlyX = 0;
var moveFlyY = 0;



function setup() {
	createCanvas(700, 470);

	// Your sketch code
}

function draw() {
	background(135,206,250)
	
	fill(0, 0, 0)
	rect(350, 320, 20, 50);

	// Udder
	fill(255,182,193);
	stroke(255,182,193);
	ellipse(350, 320, 55, 45)

	// Body
	stroke(0,0,0);
	fill(255, 255, 255);
	rect(300, 200, 300, 120);

	// Head
	fill(255, 255, 255);
	rect(580, 130, 100, 80);

	// Strains
	fill(0, 0, 0);
	ellipse(380, 250, 32, 32);
	
	fill(0, 0, 0);
	ellipse(360, 300, 28, 28);

	fill(0, 0, 0);
	ellipse(450, 230, 40, 40);

	fill(0, 0, 0);
	ellipse(500, 280, 40, 40);

	fill(0, 0, 0);
	ellipse(570, 250, 50, 50);

	fill(0, 0, 0);
	ellipse(330, 230, 28, 28)

	// Legs
	rect(300, 320, 20, 50);
	rect(530, 320, 20, 50);
	rect(580, 320, 20, 50)

	
	// Eyes
	fill(222,184,135);
	stroke(222,184,135);
	ellipse (620, 160, 20, 25)

	fill(222,184,135);
	stroke(222,184,135);
	ellipse (660, 160, 20, 25)

	fill(0, 0, 0);
	stroke(0, 0, 0);
	ellipse (620, 160, 5, 5)

	fill(0, 0, 0);
	stroke(0, 0, 0);
	ellipse (660, 160, 5, 5)

	// Mouth
	fill(222,184,135);
	stroke(222,184,135);
	ellipse (640, 210, 90, 30)

	// Nose
	fill(0, 0, 0);
	stroke(0, 0, 0);
	ellipse (660, 210, 10, 15)

	fill(0, 0, 0);
	stroke(0, 0, 0);
	ellipse (630, 210, 10, 15)

	// Ears
	fill(222,184,135);
	stroke(222,184,135);
	triangle(580, 145, 580, 128, 560, 155)

	fill(222,184,135);
	stroke(222,184,135);
	triangle(680, 145, 680, 128, 660, 155)

	// Tail
	fill(0, 0, 0);
	stroke(0, 0, 0);
	rect(270, 200, 35, 10)

	// Grass
	fill(34,139,34);
	stroke(34,139,34);
	triangle(570, 370, 590, 315, 610, 370);

		fill(60,179,113);
		stroke(60,179,113);
		triangle(585, 370, 605, 315, 625, 370);

	fill(0,100,0);
	stroke(0,100,0);
	triangle(600, 370, 620, 315, 640, 370);

		fill(34,139,34);
		stroke(34,139,34);
		triangle(615, 370, 635, 315, 655, 370);

	fill(34,139,34);
	stroke(34,139,34);
	triangle(630, 370, 650, 315, 670, 370);

		fill(60,179,113);
		stroke(60,179,113);
		triangle(645, 370, 665, 315, 685, 370);

	fill(34,139,34);
	stroke(34,139,34);
	triangle(660, 370, 680, 315, 700, 370);

	// Poop
	fill(139,69,19);
	stroke(139,69,19);
	ellipse(230, 365, 50, 20)

	fill(139,69,19);
	stroke(139,69,19);
	ellipse(230, 355, 40, 20)

	fill(139,69,19);
	stroke(139,69,19);
	ellipse(230, 345, 30, 20)

	
	// Fly (old)
		// Wings
		// fill(255,255,255);
		// stroke(0, 0, 0);
		// ellipse(200, 280, 8, 6)

		// fill(255,255,255);
		// stroke(0, 0, 0);
		// ellipse(190, 280, 8, 6)

		// // Body
		// fill(0, 0, 0);
		// stroke(0, 0, 0);
		// rect(187, 282, 15, 8)


	// Sun
	fill(255,250,205);
	stroke(255,250,205);
	ellipse(10, 10, 360, 190)

	// Clouds
	fill(240,255,255);
	stroke(240,255,255);
	ellipse(300, 50, 150, 100)

	fill(240,255,255);
	stroke(240,255,255);
	ellipse(270, 80, 170, 80)

	fill(240,255,255);
	stroke(240,255,255);
	ellipse(200, 60, 140, 50)

	fill(240,255,255);
	stroke(240,255,255);
	ellipse(400, 60, 140, 50)

	fill(240,255,255);
	stroke(240,255,255);
	ellipse(600, 50, 80, 50)

	fill(240,255,255);
	stroke(240,255,255);
	ellipse(650, 30, 100, 50)

	//Background Grass
	fill(34,139,34);
	stroke(34,139,34);
	rect (0, 370, 700, 100)

	// Use your drawFly function and define the x and y	
	drawFly(187+moveFlyX, 280+moveFlyY);

	// Make the fly move
	moveFlyX += 1;
	moveFlyY += 1;
}