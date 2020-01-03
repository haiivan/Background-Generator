var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button");

randomColor();

function setGradient(){
    body.style.backgroundImage = `linear-gradient(to right, ${color1.value},${color2.value})`

    h3.textContent = "background-image: " + body.style.backgroundImage;
};

//Returns a random number between 0 and the argument - 1
function randomNumber(x){
    var random = Math.floor(Math.random() * x);
    return random
};

//Generates a random hex value
function Hex(){
    //Hex values goes from 0-9 and A-F
    const pool = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    const hex = [];
    //Loops the code 6 times (from 0-5) since hex codes have a combinatin of 6 values
    for(var  i = 0; i <= 5; i++){
        //pushes a random value from the "pool" aray into the "hex" array
            hex.push(pool[randomNumber(16)]);
    }
    //Return the variable hex, converted into a string with a character "#" at the beginning
    return `#${hex.join("")}`;  
}


function randomColor(){
    color1.value = Hex();
    color2.value = Hex();
    setGradient();
};

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
button.addEventListener("click",randomColor);
