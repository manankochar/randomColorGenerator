let btn = document.querySelector("button");

btn.addEventListener("click", function(){
let h4 = document.querySelector("h4");
let RandomColor = getRandomColor();   
h4.innerText = RandomColor;

let div = document.querySelector("div");
div.style.backgroundColor = RandomColor;

console.log("randomColorGenerated");
})

function getRandomColor(){
let R = Math.floor(Math.random()*255);
let G = Math.floor(Math.random()*255);
let B = Math.floor(Math.random()*255);

let color = `rgb(${R}, ${G}, ${B})`;
return color;
};