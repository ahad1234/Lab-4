

function moveDown(){
		
var element = document.getElementById('iconUp');
element.style.top = parseInt(element.style.top) + 20 + 'px';

}

function moveUp(){
		
var element = document.getElementById('iconUp');
element.style.top = parseInt(element.style.top) - 20 + 'px';

}

setInterval(function (){



var plane =  document.getElementById('iconUp');
var box1 = document.getElementById('bar1');
var box2 = document.getElementById('bar2');
var box3 = document.getElementById('bar3');

var pX = parseInt(plane.style.right);
var b1X = parseInt(box1.style.right);;


var pT = parseInt(plane.style.top);
var b1T = parseInt(box1.style.top);


if ( b1X <= pX && (pT - b1T) <= 10  ){
	
	plane.style.top = parseInt(plane.style.top) + 200 + 'px';

}

} , 1);

