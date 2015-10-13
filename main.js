

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
 
var pX = plane.style.right;
var b1X = parseInt(box1.style.left);


var pT = parseInt(plane.style.top);
var b1T = parseInt(box1.style.top);

console.log(parseInt(b1X));

	 var height = document.getElementById('iconUp').offsetTop + 80;
     var width = document.getElementById('iconUp').offsetLeft + 80;
    
     if (height >= document.getElementById('bar1').offsetTop && (height - 65) < (document.getElementById('bar1').offsetTop + 40) && width >= document.getElementById('bar1').offsetLeft + 25 && (width - 80) < document.getElementById('bar1').offsetLeft + 50) {
         //alert("Collision")
         document.getElementById('#gameover').style.display = "block";
         document.getElementById('bar1').style.animationPlayState = "paused";
         document.getElementById('bar2').style.animationPlayState = "paused";
         document.getElementById('bar3').style.animationPlayState = "paused";
         document.getElementById('bar4').style.animationPlayState = "paused";
         document.getElementById('background').style.animationPlayState = "paused";
         return;
     }
     
     if (height >= document.getElementById('bar2').offsetTop - 35 && (height ) < (document.getElementById('bar2').offsetTop + 20) && width >= document.getElementById('bar2').offsetLeft + 25 && (width - 80) < document.getElementById('bar2').offsetLeft + 50) {
         
        //alert("Collision");
         return;
     }

	if (height >= document.getElementById('bar3').offsetTop && (height - 65) < (document.getElementById('bar3').offsetTop + 40) && width >= document.getElementById('bar3').offsetLeft + 25 && (width - 80) < document.getElementById('bar3').offsetLeft + 50) {
         //alert("Collision")
         
         return;
     }
     

     
    if (height >= document.getElementById('bar4').offsetTop - 35 && (height) < (document.getElementById('bar4').offsetTop + 30) && width >= document.getElementById('bar4').offsetLeft + 25 && (width - 80) < document.getElementById('bar4').offsetLeft + 50) {
         //alert("Collision")
         
         return;
     }
	
} , 1);

