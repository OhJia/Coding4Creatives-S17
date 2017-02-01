var myColor;
var myColor2 = 0;
var scaleVar = 0.5;

function setup() {
	createCanvas(1280, 480);
	myColor = 0;
}

function draw() {

	/* 
		IF STATEMENT
	*/
	// if (mouseX > 300) {
	// 	myColor = 200;
	// }
	//myColor = mouseX; - 0;

	/* 
		FOR LOOP
	*/
	// for (i = 0; i < 10; i++) {
	// 	fill(i*20, 20, 8);
	// 	ellipse(i*20, 50, 200, 200);
	// }

	/* 
		WHILE LOOP 
		(Works the same as the above for loop) 
	*/
	// var j = 0;
	// while (j < 10) {
	// 	fill(j*20, 20, 8);
	// 	ellipse(j*20, 50, 200, 200);
	// 	j += 1;
	// }
	
	/* 
		USE MAP() TO MAP BACKGROUN COLOR 
		TO WIDTH AND HEIGHT
	*/
	myColor = map(mouseX, 0, 640, 255, 0);
	myColor2 = map(mouseY, 0, 480, 255, 0);
	background(myColor, myColor2, 5);

	/* 
		USE PUSH() & POP() TO TRANSFORM RECT()
	*/
	push();

	translate(250, 250);
	fill(200, 200, 60);

	rotate(PI/4.0);
	
	rect(0, 0, 200, 120);
	
	pop();

	scale(scaleVar);
	rect(0, 0, 200, 120);
	scaleVar = scaleVar + 1;

	/* 
		CONSOLE LOG myColor VARIABLE TO 
		CHECK ON CHANGE
	*/
	console.log(myColor);
	
}