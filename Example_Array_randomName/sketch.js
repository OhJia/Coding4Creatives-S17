var names = ["Alessandra", "Ana", "Beverly", "Emma"];

var chosen = "Choose a name";

function setup() {
	createCanvas (800, 300);
}

function draw() {
	background (0, 171, 255); 

	if (chosen != null) {
		textSize(24);
		text(chosen, 300, 120);
	}
	
}

function mousePressed() {
	var number = int(random(0, 3));
	chosen = names[number];
}