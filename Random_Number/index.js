const btn = document.getElementById("btn");
const myLabel = document.getElementById("myLabel");
const max = 6;
const min = 1;
let randomNum;

btn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min ;
    myLabel.textContent = randomNum;
}