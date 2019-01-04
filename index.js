var sketch1 = function(p) {
	p.x = 100;
	p.y = 100;
	var c = new Clock();
	var buton;
	
	p.setup = function() {
		var mc = p.createCanvas(400, 400);
		mc.parent('div1');
		//p.textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');

		//c.setBackgroundFill(192);
		var bg = p.loadImage("");
		c.setBackgroundFill(bg);
		c.setClockFill(p.color('#F9F8FA'));
		c.setTextFill(0);
		c.setClockType('a');
		c.setHoursOffset(-4);
				
		var dropdown1 = p.createSelect();
		dropdown1.option('Time Zone: Los Angeles', '1');
		dropdown1.option('Time Zone: New York', '2');
		dropdown1.option('Time Zone: Rio de Janeiro', '3');
		dropdown1.parent('div1');
		dropdown1.class("metallic");
		dropdown1.position(90,-10);
		dropdown1.changed(() => {hoursOffset1(dropdown1.selected())});
		
		/*var text1 = p.createElement();
		text1.html("Select time zone: "); 
		text1.parent('div1');
		text1.position(100, 15); */
		
		var dropdown2 = p.createSelect(); 
		dropdown2.option('Clock Style: Classic','1');
		dropdown2.option('Clock Style: Retro','2');
		dropdown2.option('Clock Style: Astro','3');
		dropdown2.option('Clock Style: Turbo','4');
		dropdown2.parent('div1');
		dropdown2.class("metallic");
		dropdown2.position(105, 370);
		dropdown2.changed(() => {clockStyle1(dropdown2.selected())});
		
		/*var text2 = p.createElement();
		text2.html("Select clock style: ");
		text2.parent('div1');
		text2.position(5,360); */
		
		buton = p.createButton("Clock Type"); 
		buton.parent('div1');
		buton.class("metallic");
		buton.position(145, 435);
		buton.mousePressed(() => {clockType(1)});
		
	}
	p.draw = function() {	
		c.draw(p);
	}
	p.getClock = function() {	
		return c;
	}
}

var sketch2 = function(p) {
	p.x = 100;
	p.y = 100;
	var c = new Clock();
	var buton;
	
	p.setup = function() {
		var mc = p.createCanvas(400, 400);
		mc.parent('div2');

		//p.textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
		
		//c.setBackgroundFill(192);
		var bg = p.loadImage("");
		c.setBackgroundFill(bg);
		
		c.setClockFill(p.color('#BB33AA'));
		c.setTextFill(0);
		c.setClockType('a');
		c.setHoursOffset(0);
		
		var text1 = p.createElement();
		text1.html("Time Zone: London (GMT)"); 
		text1.parent('div2');
		text1.class("metallic");
		text1.position(100, -10);
		
		var dropdown = p.createSelect(); 
		dropdown.option('Clock Style: Classic','1');
		dropdown.option('Clock Style: Retro','2');
		dropdown.option('Clock Style: Astro','3');
		dropdown.option('Clock Style: Turbo','4');
		dropdown.parent('div2');
		dropdown.class("metallic");
		dropdown.position(105, 370);
		dropdown.changed(() => {clockStyle2(dropdown.selected())});
		
		/*var text2 = p.createElement();
		text2.html("Select clock style: ");
		text2.parent('div2');
		text2.position(5,360); */
		
		buton = p.createButton("Clock Type"); 
		buton.parent('div2');
		buton.class("metallic");
		buton.position(145, 435);
		buton.mousePressed(() => {clockType(2)});
			
	}
	p.draw = function() {	
		c.draw(p);
	}
	p.getClock = function() {	
		return c;
	}
	
	
}
var sketch3 = function(p) {
	p.x = 100;
	p.y = 100;
	var c = new Clock();
	var buton;
		
	p.setup = function() {
		var mc = p.createCanvas(400, 400);
		mc.parent('div3');

		//p.textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
		
		//c.setBackgroundFill(192);
		var bg = p.loadImage("");
		c.setBackgroundFill(bg);
		c.setClockFill(p.color('#3333FF'));
		c.setTextFill(0);
		c.setClockType('a');
		c.setHoursOffset(7);
	
		var dropdown1 = p.createSelect();
		dropdown1.option('Time zone: Moscow', '1');
		dropdown1.option('Time zone: Tokyo', '2');
		dropdown1.option('Time zone: Sydney', '3');
		dropdown1.parent('div3');
		dropdown1.class("metallic");
		dropdown1.position(110,-10);
		dropdown1.changed(() => {hoursOffset2(dropdown1.selected())});

		/*var text1 = p.createElement();
		text1.html("Select time zone: "); 
		text1.parent('div3');
		text1.position(100, 15); */
		
		var dropdown2 = p.createSelect(); 
		dropdown2.option('Clock Style: Classic','1');
		dropdown2.option('Clock Style: Retro','2');
		dropdown2.option('Clock Style: Astro','3');
		dropdown2.option('Clock Style: Turbo','4');
		dropdown2.parent('div3');
		dropdown2.class("metallic");
		dropdown2.position(105, 370);
		dropdown2.changed(() => {clockStyle3(dropdown2.selected())});
		
		/*var text2 = p.createElement();
		text2.html("Select clock style: ");
		text2.parent('div3');
		text2.position(5,360); */
		
		buton = p.createButton("Clock Type"); 
		buton.parent('div3');
		buton.class("metallic");
		buton.position(145, 435);
		buton.mousePressed(() => {clockType(3)});
	}
	p.draw = function() {	
		c.draw(p);
	}
	p.getClock = function() {	
		return c;
	}
	
}

var c1 = new p5(sketch1);
var c2 = new p5(sketch2);
var c3 = new p5(sketch3);

function allClockFill() {
	if (c1.getClock().getClockFill() == '#F9F8FA') {
		c1.getClock().setClockFill('#7F462C');
		c2.getClock().setClockFill('#7F462C');
		c3.getClock().setClockFill('#7F462C');
	}
	else if (c1.getClock().getClockFill() == '#7F462C') {
		c1.getClock().setClockFill('#4D2162');
		c2.getClock().setClockFill('#4D2162');
		c3.getClock().setClockFill('#4D2162');
	}
	else {
		c1.getClock().setClockFill('#F9F8FA');
		c2.getClock().setClockFill('#F9F8FA');
		c3.getClock().setClockFill('#F9F8FA');
	}
	
} 

function allBackgroundColor() {
	if (c1.getClock().getBackgroundFill() == '#F9F8FA') {
		c1.getClock().setBackgroundFill('#7F462C');
		c2.getClock().setBackgroundFill('#7F462C');
		c3.getClock().setBackgroundFill('#7F462C');
	}
	else if (c1.getClock().getBackgroundFill() == '#7F462C') {
		c1.getClock().setBackgroundFill('#4D2162');
		c2.getClock().setBackgroundFill('#4D2162');
		c3.getClock().setBackgroundFill('#4D2162');
	}
	else {
		c1.getClock().setBackgroundFill('#F9F8FA');
		c2.getClock().setBackgroundFill('#F9F8FA');
		c3.getClock().setBackgroundFill('#F9F8FA');
	}
}

function allTextFill() {
	if (c1.getClock().getTextFill() == '#F9F8FA') {
		c1.getClock().setTextFill('#7F462C');
		c2.getClock().setTextFill('#7F462C');
		c3.getClock().setTextFill('#7F462C');
	}
	else if (c1.getClock().getTextFill() == '#7F462C') {
		c1.getClock().setTextFill('#4D2162');
		c2.getClock().setTextFill('#4D2162');
		c3.getClock().setTextFill('#4D2162');
	}
	else {
		c1.getClock().setTextFill('#F9F8FA');
		c2.getClock().setTextFill('#F9F8FA');
		c3.getClock().setTextFill('#F9F8FA');
	}

}

function allClockType() {
	if (c1.getClock().getClockType() == 'a'){
		c1.getClock().setClockType('r');
	}
	else {
		c1.getClock().setClockType('a');
	}
	
	if (c2.getClock().getClockType() == 'a'){
		c2.getClock().setClockType('r');
	}
	else {
		c2.getClock().setClockType('a');
	}
	
	if (c3.getClock().getClockType() == 'a'){
		c3.getClock().setClockType('r');
	}
	else {
		c3.getClock().setClockType('a');
	}
	
}
function clockType(c) {
	switch(c) {
		case 1: 
			if (c1.getClock().getClockType() == 'a'){
				c1.getClock().setClockType('r');
				break;
			}
			else {
				c1.getClock().setClockType('a');
				break;
			}
		case 2:
			if (c2.getClock().getClockType() == 'a'){
				c2.getClock().setClockType('r');
				break;
			}
			else {
				c2.getClock().setClockType('a');
				break;
			}
		case 3:
			if (c3.getClock().getClockType() == 'a'){
				c3.getClock().setClockType('r');
				break;
			}
			else {
				c3.getClock().setClockType('a');
				break;
			}
	}
}

function clockStyle1(c) {
	switch(c) {
		case '1': 
			c1.getClock().setClockFill('#F9F8FA');
			break;
		case '2':
			c1.getClock().setClockFill('#7F462C');
			break;
		case '3':
			c1.getClock().setClockFill('#FF00FF');
			break;
		case '4':
			c1.getClock().setClockFill('#4D2162');
			break;
	}
}

function clockStyle2(c) {
	switch(c) {
		case '1': 
			c2.getClock().setClockFill('#F9F8FA');
			break;
		case '2':
			c2.getClock().setClockFill('#7F462C');
			break;
		case '3':
			c2.getClock().setClockFill('#FF00FF');
			break;
		case '4':
			c2.getClock().setClockFill('#4D2162');
			break;
	}
}

function clockStyle3(c) {
	switch(c) {
		case '1': 
			c3.getClock().setClockFill('#F9F8FA');
			break;
		case '2':
			c3.getClock().setClockFill('#7F462C');
			break;
		case '3':
			c3.getClock().setClockFill('#FF00FF');
			break;
		case '4':
			c3.getClock().setClockFill('#4D2162');
			break;
	}
}



function hoursOffset1(c) {
	switch(c) {
		case '1':
			c1.getClock().setHoursOffset(-8);
			break;
		case '2':
			c1.getClock().setHoursOffset(-5);
			break;
		case '3':
			c1.getClock().setHoursOffset(-2);
			break;
	}
	
}

function hoursOffset2(c) {
	switch(c) {
		case '1':
			c3.getClock().setHoursOffset(+3);
			break;
		case '2':
			c3.getClock().setHoursOffset(+9);
			break;
		case '3':
			c3.getClock().setHoursOffset(+11);
			break;
	}
	
}