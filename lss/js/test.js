

var steps = document.getElementById("steps");

window.onscroll = function(){
 console.log("yo , yo , yo");


  var fromTop = window.pageYOffset;

  console.log(fromTop);

  steps.innerHTML = fromTop + "px";


  steps.style.top = fromTop*1.0 + "px";

  steps.style.transform="rotate(0 deg)";


   if(fromTop > 0 && fromTop < 2000){

  steps.innerHTML ="Lets Start!";
  }

  if(fromTop > 2000 && fromTop < 4000){

  steps.innerHTML ="Step 1";
  }
    if(fromTop > 4000 && fromTop < 6000){

  steps.innerHTML ="Step 2";

  }  if(fromTop > 6000 && fromTop < 8000){

  steps.innerHTML ="Step 3";
  }
    if(fromTop > 8000 && fromTop < 10000){

  steps.innerHTML ="Step 4";
  }
}
