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