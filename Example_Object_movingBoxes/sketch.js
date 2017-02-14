var boxes = [];

var num = 5;

function Box(x, y) {
	this.x = x;
	this.y = y;
	this.width = 100; 
	this.color = color(255, 0, 0);

	this.display = function() {
		rectMode(CENTER);
		fill(this.color);
		noStroke();
		rect(this.x, this.y, this.width, this.width);
	};

	this.move = function() {
		if (this.x <= -1000) {
			this.x = 800;
		}
		this.x = this.x - 5;
	};

	this.clicked = function() {
		var d = dist(mouseX, mouseY, this.x, this.y);
		if (d < this.width) {
			this.color = color(0, 255, 0);
		}
	};
}


function setup() {
	createCanvas (800, 300);
	for (var i = 0; i < num; i++) {
		var x = 600;
		var y = 175;
		boxes[i] = new Box(x + i*200, y);
	}
}

function draw() {
	//background
	background (0, 171, 255); 

	textSize(24);
	text("Try clicking each box", 300, 50);

	for (var i = 0; i < num; i++) {
		boxes[i].move();
		boxes[i].display();
		
		//console.log(boxes[i]);
	}

	// Belt
	rectMode(CORNER);
	fill (0);
	rect (0, 225, 800, 30);
	
}

function mousePressed() {
	for (var i = 0; i < num; i++) {
		boxes[i].clicked();
	}
}