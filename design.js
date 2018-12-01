class Clock{
	constructor() {
		
	} 
	
	setBackgroundFill(backgroundfill) {
		this.backgroundfill = backgroundfill;
	}
	getBackgroundFill() {
		return this.backgroundfill;
	}
	
	setClockFill(clockfill) {
		this.clockfill = clockfill;
	}
	getClockFill() {
		return this.clockfill;
	}
	
	setTextFill(textfill) {
		this.textfill = textfill;
	}
	getTextFill() {
		return this.textfill;
	}
	
	setClockType(clocktype) {
		this.clocktype = clocktype;
	}
	getClockType() {
		return this.clocktype;
	}
	

	
	
	draw() {
		translate(width / 2.0, height / 2.0);

		var date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds(),
		ms = date.getMilliseconds(),
		i,
		v,
		t; 
		 
		var bf = this.backgroundfill;
		background(bf);

		// Draw clock
		var cf = this.clockfill;
		fill(cf);
		stroke(0);
		strokeWeight(4); 
		ellipse(0, 0, 450, 450);
		
		// Minute Markers
		fill(cf);
		strokeWeight(1);
		for (i = 0; i < 60; i++) {
			v = p5.Vector.fromAngle((i + 1) / 60.0 * TAU - HALF_PI);
			v.mult(210);
			if (i % 5 == 4) {
				ellipse(v.x, v.y, 5, 5);
			} 
			else {
				ellipse(v.x, v.y, 1, 1);
			}
		}
		
		 // Numbers
		textSize(36);
		var tf = this.textfill;
		fill(tf);
		noStroke()
		for (i = 0; i < 12; i++) {
			v = p5.Vector.fromAngle((i + 1) / 12.0 * TAU - HALF_PI);
			v.mult(180);
			var ct = this.clocktype;
			if (ct == 'a') {
				text(i + 1, v.x, v.y);
			}
			else {
				switch(i + 1) {
					case 1: 
						text('I' ,v.x, v.y);
						break;
					case 2:
						text('II' ,v.x, v.y);
						break;
					case 3:
						text('III' ,v.x, v.y);
						break;
					case 4:
						text('IV' ,v.x, v.y);
						break;
					case 5:
						text('V' ,v.x, v.y);
						break;
					case 6:
						text('VI' ,v.x, v.y);
						break;
					case 7:
						text('VII' ,v.x, v.y);
						break;
					case 8:
						text('VIII' ,v.x, v.y);
						break;
					case 9:
						text('IX' ,v.x, v.y);
						break;
					case 10:
						text('X' ,v.x, v.y);
						break;
					case 11:
						text('XI' ,v.x, v.y);
						break;
					case 12:
						text('XII' ,v.x, v.y);
						break;
				}
			}
		}
		
		  // Hour hand
		stroke(0);
		strokeWeight(4);
		t = (hours + minutes / 60 + seconds / 3600) * TAU / 12 - HALF_PI;
		v = p5.Vector.fromAngle(t);
		v.mult(127);
		line(0, 0, v.x, v.y);

		// Minute hand
		strokeWeight(2);
		t = (minutes + seconds / 60 + ms / 1000 / 60) * TAU / 60 - HALF_PI;
		v = p5.Vector.fromAngle(t);
		v.mult(205);
		line(0, 0, v.x, v.y);

		// Second hand
		stroke(255, 0, 0);
		strokeWeight(1);
		t = (seconds + ms / 1000 / 60) * TAU / 60 - HALF_PI;
		//t = (seconds + ms / 1000) * TAU / 60 - HALF_PI;
		v = p5.Vector.fromAngle(t);
		v.mult(210);
		line(0, 0, v.x, v.y);
		
		// Center cap
		fill(0);
		stroke(0);
		noStroke();
		ellipse(0, 0, 20, 20);

		resetMatrix();
	}
	
	
}


var c;


function setup() {
	createCanvas(1200, 750);
	textAlign(CENTER, CENTER);
	strokeCap(SQUARE);
	textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
	
	c = new Clock();
	c.setBackgroundFill(192);
	c.setClockFill(255);
	c.setTextFill(0);
	c.setClockType('r');
	
	
}

function draw() {
	c.draw();
	
} 

function changeColor(){
	c.setBackgroundFill(0);
}