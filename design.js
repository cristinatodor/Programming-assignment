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
	
	
	draw(p, hoursOffset) {

		p.translate(p.width / 2.0, p.height / 2.0);

		
		var date = new Date(),
		hours = date.getHours() + hoursOffset,
		minutes = date.getMinutes(),
		seconds = date.getSeconds(),
		ms = date.getMilliseconds(),
		day = date.getUTCDate(),
		month = date.getMonth(),
		year = date.getUTCFullYear(),
		
		i,
		v,
		t; 
		 
		p.background(this.getBackgroundFill());

		// Draw clock
		p.fill(this.getClockFill());
		p.stroke(0);
		p.strokeWeight(8); 
		p.ellipse(0, 0, 300, 300);
		
		// Minute Markers
		p.fill(255);
		p.strokeWeight(1);
	
		for (i = 0; i < 60; i++) {
			v = p5.Vector.fromAngle((i + 1) / 60.0  * p.TAU - p.HALF_PI);
			v.mult(115);
			if ((i+1) %3 == 0) {
				p.fill('red');
			}
			else {
				p.fill(255);
			}
			if (i % 5 == 4) {
				p.ellipse(v.x, v.y, 5, 5);
			} 
			else {
				p.ellipse(v.x, v.y, 1, 1);
			}
		}
		
		
		// Numbers
		p.textSize(25);
		p.fill(0);
		p.noStroke();
		for (i = 0; i < 12; i++) {
			v = p5.Vector.fromAngle((i + 1) / 12.0 * p.TAU - p.HALF_PI);
			v.mult(100);
			var ct = this.getClockType();
			//var ct = 'a';
			if (ct == 'a') {
				p.text(i + 1, v.x-8, v.y+10);
			}
			else {
				switch(i + 1) {
					case 1: 
						p.text('I', v.x-8, v.y+10);
						break;
					case 2:
						p.text('II', v.x-8, v.y+10);
						break;
					case 3:
						p.text('III', v.x-8, v.y+10);
						break;
					case 4:
						p.text('IV', v.x-8, v.y+10);
						break;
					case 5:
						p.text('V', v.x-8, v.y+10);
						break;
					case 6:
						p.text('VI', v.x-8, v.y+10);
						break;
					case 7:
						p.text('VII', v.x-8, v.y+10);
						break;
					case 8:
						p.text('VIII', v.x-8, v.y+10);
						break;
					case 9:
						p.text('IX', v.x-8, v.y+10);
						break;
					case 10:
						p.text('X',v.x-8, v.y+10);
						break;
					case 11:
						p.text('XI', v.x-8, v.y+10);
						break;
					case 12:
						p.text('XII', v.x-8, v.y+10);
						break;
				}
			}
		}
		
		// Numbers for minutes
		p.textSize(10);
		for (i = 0; i < 12; i++) {
			v = p5.Vector.fromAngle((i + 1) / 12.0 * p.TAU - p.HALF_PI);
			v.mult(130);
			if (i == 11){
				p.text("0", v.x, v.y);
			}
			else {
				p.text((i + 1)*5, v.x, v.y);
			}
		}
		
		
				
		// Date box
		p.textSize(13);
		
		p.fill(120);
		p.stroke(0);
		p.strokeWeight(1);
		p.rect(-40, 30, 85, 30, 10);
		
		p.fill(0);
		p.noStroke();
		p.text(day, -30, 50);
		p.text(".", -15, 50);
		p.text(month+1, -15, 50);
		p.text(".", 6, 50);
		p.text(year, 10, 50);
		
		//AM/PM box
		p.fill(120); 
		p.stroke(0);
		p.strokeWeight(1);
		p.rect(-18, -42, 35, 22, 10);
		
		p.fill(0);
		p.noStroke();
		if (hours >=0 && hours <=11) {
			p.text("AM", -10, -25);
		}
		else {
			p.text("PM", -10, -25);
		}
		
		
		
		// Hour hand
		p.stroke(0);
		p.strokeWeight(3);
		t = (hours + minutes / 60 + seconds / 3600) * p.TAU / 12 - p.HALF_PI;
		v = p5.Vector.fromAngle(t);
		v.mult(60);
		p.line(0, 0, v.x, v.y); 

		// Minute hand
		p.strokeWeight(2);
		t = (minutes + seconds / 60 + ms / 1000 / 60) * p.TAU / 60 - p.HALF_PI;
		v = p5.Vector.fromAngle(t);
		v.mult(112);
		p.line(0, 0, v.x, v.y); 

		// Second hand
		p.stroke(255, 0, 0);
		p.strokeWeight(1);
		t = (seconds + ms / 1000 / 60) * p.TAU / 60 - p.HALF_PI;
		//t = (seconds + ms / 1000) * TAU / 60 - HALF_PI;
		v = p5.Vector.fromAngle(t);
		v.mult(115);
		p.line(0, 0, v.x, v.y); 
		
		// Center cap
		p.fill(0);
		p.stroke(0);
		p.noStroke();
		p.ellipse(0, 0, 10, 10); 

		p.resetMatrix();
	}
	
	
}

var sketch1 = function(p) {
	p.x = 100;
	p.y = 100;
	var c = new Clock();
	p.setup = function() {
		p.createCanvas(500, 500);
		p.textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
		
		c.setBackgroundFill(192);
		c.setClockFill(255);
		c.setTextFill(0);
		c.setClockType('a');
		
	}
	p.draw = function() {	
		c.draw(p, 7);
	}
		p.getClock = function() {	
		return c;
	}
}

var sketch2 = function(p) {
	p.x = 100;
	p.y = 100;
	var c = new Clock();
	p.setup = function() {
		p.createCanvas(500, 500);
		p.textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
		
		c.setBackgroundFill(192);
		c.setClockFill(255);
		c.setTextFill(0);
		c.setClockType('a');
		
	}
	p.draw = function() {	
		c.draw(p, 0);
	}
	p.getClock = function() {	
		return c;
	}
	
	
}
var sketch3 = function(p) {
	p.x = 100;
	p.y = 100;
	var c = new Clock();
	p.setup = function() {
		p.createCanvas(500, 500);
		p.textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
		
		c.setBackgroundFill(192);
		c.setClockFill(255);
		c.setTextFill(0);
		c.setClockType('a');
	}
	p.draw = function() {	
		c.draw(p, -5);
	}
	p.getClock = function() {	
		return c;
	}
	
}

var c1 = new p5(sketch1);
var c2 = new p5(sketch2);
var c3 = new p5(sketch3);

function changeClockType() {
	c1.getClock().setClockType('r');
	c2.getClock().setClockType('r');
	c3.getClock().setClockType('r');
}
