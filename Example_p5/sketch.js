var x;


function setup() {
	createCanvas(640, 480);
	x = 100;
}

function draw() {
	background(255, 255, 255);
	rect(x, 150, 200, 120);
	x = x+1;
}
