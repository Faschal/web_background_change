var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); 
var color2 = document.querySelector(".color2"); 
var body = document.getElementById("background");
var button = document.getElementById("random");

function showGradientValue(){
  css.textContent = body.style.background + ";"; 
}

function linearGradientColor(){
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  showGradientValue();
}

function changeBackground(){
  linearGradientColor();
}

function randomNumber(num){
  return Math.floor(Math.random() * num);
}

linearGradientColor();


color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

button.addEventListener("click",function(){
  body.style.background= 
    "linear-gradient(to right, "
    + "rgb("+ randomNumber(225) 
    + "," + randomNumber(225) 
    + "," + randomNumber(225) 
    + ")"  
    + ", " 
    + "rgb("+ randomNumber(225) 
    + "," + randomNumber(225) 
    + "," + randomNumber(225) 
    + ")"  
    + ")";
  showGradientValue();
});
