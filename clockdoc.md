clock.js 

<a name="Clock"></a>

## Clock
This class creates a clock

**Kind**: global class  

* [Clock](#Clock)
    * [.setBackgroundFill(backgroundFill)](#Clock+setBackgroundFill)
    * [.getBackgroundFill()](#Clock+getBackgroundFill)
    * [.setClockFill(clockFill)](#Clock+setClockFill)
    * [.getClockFill()](#Clock+getClockFill)
    * [.setTextFill(textFill)](#Clock+setTextFill)
    * [.getTextFill()](#Clock+getTextFill)
    * [.setClockType(clocktType)](#Clock+setClockType)
    * [.getClockType()](#Clock+getClockType)
    * [.setHoursOffset(hoursOffset)](#Clock+setHoursOffset)
    * [.getHoursOffset()](#Clock+getHoursOffset)
    * [.draw(p)](#Clock+draw)

<a name="Clock+setBackgroundFill"></a>

### clock.setBackgroundFill(backgroundFill)
Sets the backgroundFill attribute

**Kind**: instance method of [<code>Clock</code>](#Clock)  

| Param | Description |
| --- | --- |
| backgroundFill | the background colour |

<a name="Clock+getBackgroundFill"></a>

### clock.getBackgroundFill()
Returns the backgroundFill attribute

**Kind**: instance method of [<code>Clock</code>](#Clock)  
<a name="Clock+setClockFill"></a>

### clock.setClockFill(clockFill)
Sets the clockFill attribute

**Kind**: instance method of [<code>Clock</code>](#Clock)  

| Param | Description |
| --- | --- |
| clockFill | the clock colour |

<a name="Clock+getClockFill"></a>

### clock.getClockFill()
Returns the clockFill attribute

**Kind**: instance method of [<code>Clock</code>](#Clock)  
<a name="Clock+setTextFill"></a>

### clock.setTextFill(textFill)
Sets the textFill attribute

**Kind**: instance method of [<code>Clock</code>](#Clock)  

| Param | Description |
| --- | --- |
| textFill | the text colour |

<a name="Clock+getTextFill"></a>

### clock.getTextFill()
Returns the textFill attribute

**Kind**: instance method of [<code>Clock</code>](#Clock)  
<a name="Clock+setClockType"></a>

### clock.setClockType(clocktType)
Sets the clockType attribute

**Kind**: instance method of [<code>Clock</code>](#Clock)  

| Param | Description |
| --- | --- |
| clocktType | the type of the clock |

<a name="Clock+getClockType"></a>

### clock.getClockType()
Returns the clockType attribute

**Kind**: instance method of [<code>Clock</code>](#Clock)  
<a name="Clock+setHoursOffset"></a>

### clock.setHoursOffset(hoursOffset)
Sets the hoursOffset attribute

**Kind**: instance method of [<code>Clock</code>](#Clock)  

| Param |
| --- |
| hoursOffset | 

<a name="Clock+getHoursOffset"></a>

### clock.getHoursOffset()
Returns the clocktype attribute

**Kind**: instance method of [<code>Clock</code>](#Clock)  
<a name="Clock+draw"></a>

### clock.draw(p)
The statements in draw() are executed until the program is stopped.

**Kind**: instance method of [<code>Clock</code>](#Clock)  

| Param | Description |
| --- | --- |
| p | namespace to work with p5 in instance mode |

index.js

## Functions

<dl>
<dt><a href="#allClockFill">allClockFill()</a></dt>
<dd><p>This function changes the clock colour for all of the clocks</p>
</dd>
<dt><a href="#allTextFill">allTextFill()</a></dt>
<dd><p>This function changes the text colour for all of the clocks</p>
</dd>
<dt><a href="#allClockType">allClockType()</a></dt>
<dd><p>This function changes the clock type for all of the clocks</p>
</dd>
<dt><a href="#clockType">clockType(c)</a></dt>
<dd><p>This function changes the clock type</p>
</dd>
<dt><a href="#clockStyle1">clockStyle1(c)</a></dt>
<dd><p>This function changes the clock colour for clock 1</p>
</dd>
<dt><a href="#clockStyle2">clockStyle2(c)</a></dt>
<dd><p>This function changes the clock colour for clock 2</p>
</dd>
<dt><a href="#clockStyle3">clockStyle3(c)</a></dt>
<dd><p>This function changes the clock colour for clock 3</p>
</dd>
<dt><a href="#hoursOffset1">hoursOffset1(c)</a></dt>
<dd><p>This function changes the hours offset for clock 1</p>
</dd>
<dt><a href="#hoursOffset2">hoursOffset2(c)</a></dt>
<dd><p>This function changes the hours offset for clock 3</p>
</dd>
</dl>

<a name="allClockFill"></a>

## allClockFill()
This function changes the clock colour for all of the clocks

**Kind**: global function  
<a name="allTextFill"></a>

## allTextFill()
This function changes the text colour for all of the clocks

**Kind**: global function  
<a name="allClockType"></a>

## allClockType()
This function changes the clock type for all of the clocks

**Kind**: global function  
<a name="clockType"></a>

## clockType(c)
This function changes the clock type

**Kind**: global function  

| Param | Description |
| --- | --- |
| c | the clock for which the type is changed |

<a name="clockStyle1"></a>

## clockStyle1(c)
This function changes the clock colour for clock 1

**Kind**: global function  

| Param | Description |
| --- | --- |
| c | the colour of the clock |

<a name="clockStyle2"></a>

## clockStyle2(c)
This function changes the clock colour for clock 2

**Kind**: global function  

| Param | Description |
| --- | --- |
| c | the colour of the clock |

<a name="clockStyle3"></a>

## clockStyle3(c)
This function changes the clock colour for clock 3

**Kind**: global function  

| Param | Description |
| --- | --- |
| c | the colour of the clock |

<a name="hoursOffset1"></a>

## hoursOffset1(c)
This function changes the hours offset for clock 1

**Kind**: global function  

| Param | Description |
| --- | --- |
| c | the time zone |

<a name="hoursOffset2"></a>

## hoursOffset2(c)
This function changes the hours offset for clock 3

**Kind**: global function  

| Param | Description |
| --- | --- |
| c | the time zone |

