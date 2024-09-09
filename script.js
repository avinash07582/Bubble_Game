  
var timer = 6;
var score = 0;
var hitrn=0; 
function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").innerHTML=score;
}
function getNewHit(){
    hitrn =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitrn;
} 

function makeBubble (){
    var clutter ="";
  
    for(var i =1;i<=168; i++){
     var rn =  Math.floor(Math.random()*10);
     clutter += `<div class="bubble">${rn}</div>`
    }
  
    document.querySelector("#pbtm").innerHTML = clutter;
    
}

function runTimer(){
  var timerint = setInterval(function(){

      if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
      }
      else{

        clearInterval(timerint);
        document.querySelector("#pbtm").textContent=`<h1> Game Over<h1>`;
      }
    
 },1000)
}

runTimer();
makeBubble();
getNewHit();
// increaseScore();


 document.querySelector("#pbtm")
 .addEventListener("click",function(dets){
    var clickednum = Number(dets.target.innerHTML);
    if(clickednum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

 })


// jispe click karoge wo element par paritcular event raise hoga, aur eventlistner na mile ne par event element ke parent par listner khoje ga,whaa bhe na milne par event parent ke parent pe khoje ga




