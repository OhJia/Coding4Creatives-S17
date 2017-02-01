var box1 = {
	x: 800
};
var box2 = {
	x: 1000
}
var box3 = {
	x: 1200
}
var box4 = {
	x: 1400
}
var box5 = {
	x: 1600
}
var box6 = {
	x: 1800
}
var box7 = {
	x: 2000
}

function setup() {
	createCanvas (800, 300);
}

function draw() {
	//background
	background (0, 171, 255); 
	
	//BOX1

	// if (box1.x <= -200) {
	// 	box1.x = 800;
	// } else if (box1.x > -200 && box1.x < 400) {
	// 	fill (box1.x, 50, 0);
	// }else {
	// 	fill (255, 0, 0);
	// }
	// console.log(box1.x);

	for (i = 0; i < 3; i++) {
		if (box1.x <= -200) {
			box1.x = 800;
		} 
		fill (255, 0, 0);
		noStroke();
		rect (box1.x + i*200, 100, 150, 150);
	}
	
	// fill (255, 0, 0);
	// noStroke();
	// rect (box1.x, 100, 150, 150);

	// //BOX2
	// fill (255, 111, 0);
	// rect (box2.x, 100, 150, 150);
	// //BOX3
	// fill (255, 247, 0);
	// rect (box3.x, 100, 150, 150);
	// //BOX4
	// fill (255, 0, 128);
	// rect (box4.x, 100, 150, 150);
	// //BOX5
	// fill (0, 255, 43);
	// rect (box5.x, 100, 150, 150);
	// //BOX6
	// fill (0, 51, 255);
	// rect (box6.x, 100, 150, 150);
	// //BOX7
	// fill (162, 0, 255);
	// rect (box7.x, 100, 150, 150);
	// //belt
	// fill (0);
	// rect (0, 250, 800, 30);
	
	box1.x = box1.x - 6;
	// box2.x = box2.x - 6;
	// box3.x = box3.x - 6;
	// box4.x = box4.x - 6;
	// box5.x = box5.x - 6;
	// box6.x = box6.x - 6;
	// box7.x = box7.x - 6;
	
}