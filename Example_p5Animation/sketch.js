var myColor;

function setup() {
	createCanvas(640, 480);
}

function draw() {
	//myColor = 255;

	// if (mouseX > 300) {
	// 	myColor = 200;
	// }
	
	background(255);

	for (i = 0; i < 10; i++) {
		fill(i*20, 20, 8);
		ellipse(i*20, 50, 200, 200);
	}


	translate(35, 35);
	rotate(PI/4.0);
	rect(0, 0, 200, 120);

	//console.log(myColor);

}