// left Clock
var sketch1 = function(p) {
	var c = new Clock();
	var buton;
	
	p.setup = function() {
		var mc = p.createCanvas(400, 400);
		mc.parent('div1');
		
		// set background
		var bg = p.loadImage(""); 
		c.setBackgroundFill(bg);
		c.setClockFill(p.color('#F9F8FA'));
		c.setTextFill(0);
		c.setClockType('a');
		c.setHoursOffset(-8);
		
		// Time Zone selection		
		var dropdown1 = p.createSelect();
		dropdown1.option('Time Zone: Los Angeles', '1');
		dropdown1.option('Time Zone: New York', '2');
		dropdown1.option('Time Zone: Rio de Janeiro', '3');
		dropdown1.parent('div1');
		dropdown1.class("metallic");
		dropdown1.position(90,-10);
		dropdown1.changed(() => {hoursOffset1(dropdown1.selected())});
			
		// Clock Style selection
		var dropdown2 = p.createSelect(); 
		dropdown2.option('Clock Style: Classic','1');
		dropdown2.option('Clock Style: Retro','2');
		dropdown2.option('Clock Style: Astro','3');
		dropdown2.option('Clock Style: Turbo','4');
		dropdown2.parent('div1');
		dropdown2.class("metallic");
		dropdown2.position(105, 370);
		dropdown2.changed(() => {clockStyle1(dropdown2.selected())});
		
		// Clock Type changer
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

// centre Clock
var sketch2 = function(p) {
	var c = new Clock();
	var buton;
	
	p.setup = function() {
		var mc = p.createCanvas(400, 400);
		mc.parent('div2');
		
		// set background
		var bg = p.loadImage("");
		c.setBackgroundFill(bg);
		c.setClockFill(p.color('#ff66b3'));
		c.setTextFill(0);
		c.setClockType('a');
		c.setHoursOffset(0);
		
		// Time Zone
		var text1 = p.createElement();
		text1.html("Time Zone: London (GMT)"); 
		text1.parent('div2');
		text1.class("metallic");
		text1.position(100, -10);
		
		// Clock Style selection
		var dropdown = p.createSelect(); 
		dropdown.option('Clock Style: Astro','3');
		dropdown.option('Clock Style: Classic','1');
		dropdown.option('Clock Style: Retro','2');
		dropdown.option('Clock Style: Turbo','4');
		dropdown.parent('div2');
		dropdown.class("metallic");
		dropdown.position(105, 370);
		dropdown.changed(() => {clockStyle2(dropdown.selected())});
		
		// Clock Type changer
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

// right Clock
var sketch3 = function(p) {
	var c = new Clock();
	var buton;
		
	p.setup = function() {
		var mc = p.createCanvas(400, 400);
		mc.parent('div3');

		// set background
		var bg = p.loadImage("");
		c.setBackgroundFill(bg);
		c.setClockFill(p.color('#8533ff'));
		c.setTextFill(0);
		c.setClockType('a');
		c.setHoursOffset(3);
	
		// Time Zone selection	
		var dropdown1 = p.createSelect();
		dropdown1.option('Time zone: Moscow', '1');
		dropdown1.option('Time zone: Tokyo', '2');
		dropdown1.option('Time zone: Sydney', '3');
		dropdown1.parent('div3');
		dropdown1.class("metallic");
		dropdown1.position(110,-10);
		dropdown1.changed(() => {hoursOffset2(dropdown1.selected())});

		// Clock Style selection
		var dropdown2 = p.createSelect(); 
		dropdown2.option('Clock Style: Turbo','4');
		dropdown2.option('Clock Style: Classic','1');
		dropdown2.option('Clock Style: Retro','2');
		dropdown2.option('Clock Style: Astro','3');
		dropdown2.parent('div3');
		dropdown2.class("metallic");
		dropdown2.position(105, 370);
		dropdown2.changed(() => {clockStyle3(dropdown2.selected())});
		
		// Clock Type changer
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


document.addEventListener("DOMContentLoaded", function(){
	var button1 = document.getElementById("clockFill");
	
	/**
	* This function changes the clock colour for all of the clocks
	*/
	function allClockFill(){
		if (c1.getClock().getClockFill() == '#f9f8fa') {
			c1.getClock().setClockFill('#ac3939');
			c2.getClock().setClockFill('#ac3939');
			c3.getClock().setClockFill('#ac3939');
		}
		else if (c1.getClock().getClockFill() == '#ac3939') {
			c1.getClock().setClockFill('#ff66b3');
			c2.getClock().setClockFill('#ff66b3');
			c3.getClock().setClockFill('#ff66b3');
		}
		else if(c1.getClock().getClockFill() == '#ff66b3') {
			c1.getClock().setClockFill('#8533ff');
			c2.getClock().setClockFill('#8533ff');
			c3.getClock().setClockFill('#8533ff');
		}
		else {
			c1.getClock().setClockFill('#f9f8fa');
			c2.getClock().setClockFill('#f9f8fa');
			c3.getClock().setClockFill('#f9f8fa');
		}
	}
	
	button1.addEventListener("click", allClockFill);
				
	var button2 = document.getElementById("textFill");
	
	/**
	* This function changes the text colour for all of the clocks
	*/
	function allTextFill() {
		if (c1.getClock().getTextFill() == '#ff471a') {
			c1.getClock().setTextFill('#00e6e6');
			c2.getClock().setTextFill('#00e6e6');
			c3.getClock().setTextFill('#00e6e6');
		}
		else if (c1.getClock().getTextFill() == '#00e6e6') {
			c1.getClock().setTextFill('#00e64d');
			c2.getClock().setTextFill('#00e64d');
			c3.getClock().setTextFill('#00e64d');
		}
		else if (c1.getClock().getTextFill() == '#00e64d') {
			c1.getClock().setTextFill('#000000');
			c2.getClock().setTextFill('#000000');
			c3.getClock().setTextFill('#000000');
		}
		else {
			c1.getClock().setTextFill('#ff471a');
			c2.getClock().setTextFill('#ff471a');
			c3.getClock().setTextFill('#ff471a');
		}
	}
				
	button2.addEventListener("click", allTextFill);

	var button3 = document.getElementById("clockType");
	
	/**
	* This function changes the clock type for all of the clocks
	*/
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

	button3.addEventListener("click", allClockType);
				
});

/**
 * This function changes the clock type 
 * @param c the clock for which the type is changed
 */
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

/**
 * This function changes the clock colour for clock 1
 * @param c the colour of the clock 
 */
function clockStyle1(c) {
	switch(c) {
		case '1': 
			c1.getClock().setClockFill('#f9f8fa');
			break;
		case '2':
			c1.getClock().setClockFill('#ac3939');
			break;
		case '3':
			c1.getClock().setClockFill('#ff66b3');
			break;
		case '4':
			c1.getClock().setClockFill('#8533ff');
			break;
	}
}

/**
 * This function changes the clock colour for clock 2
 * @param c the colour of the clock 
 */
function clockStyle2(c) {
	switch(c) {
		case '1': 
			c2.getClock().setClockFill('#f9f8fa');
			break;
		case '2':
			c2.getClock().setClockFill('#ac3939');
			break;
		case '3':
			c2.getClock().setClockFill('#ff66b3');
			break;
		case '4':
			c2.getClock().setClockFill('#8533ff');
			break;
	}
}

/**
 * This function changes the clock colour for clock 3
 * @param c the colour of the clock 
 */
function clockStyle3(c) {
	switch(c) {
		case '1': 
			c3.getClock().setClockFill('#f9f8fa');
			break;
		case '2':
			c3.getClock().setClockFill('#ac3939');
			break;
		case '3':
			c3.getClock().setClockFill('#ff66b3');
			break;
		case '4':
			c3.getClock().setClockFill('#8533ff');
			break;
	}
}


/**
 * This function changes the hours offset for clock 1
 * @param c the time zone
 */
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

/**
 * This function changes the hours offset for clock 3
 * @param c the time zone
 */
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