/*global $*/

var x = document.getElementById("myAudio");

function enableControls() { 
  x.pause();
} 

function disableControls() { 
  x.play();
} 
 
var clicknumber=0;
$(".playstop").click(function(){
    
    
    var num=clicknumber+++1;
    if(num%2 !== 0){
        
        enableControls();
        }
    else if (num%2 === 0){
        
        disableControls();
        }
    });