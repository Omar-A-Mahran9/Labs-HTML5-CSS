var c = document.getElementById("canv");
var context=c.getContext("2d");
context.moveTo(0,0);

var i=0;


setInterval(fun,10); 

 function fun(){
    console.log(i)
    
    context.lineTo(i,i);
    context.stroke();
    i++ 
    
    if(i==400){
       alert("animation Done")
       location.reload()
    }
    return i;
   
 }
/*var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
*/