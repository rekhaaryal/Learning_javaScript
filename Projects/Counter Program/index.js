const buttonDecrease = document.getElementById("buttonDecrease");
const buttonReset = document.getElementById("buttonReset");
const buttonIncrease = document.getElementById("buttonIncrease");
const counterLabel = document.getElementById("counterLabel");
let count = 0;

buttonDecrease.onclick = function() {
    count--;
    counterLabel.textContent = count;
};

buttonIncrease.onclick = function() {
    count++;
    counterLabel.textContent = count;
};

buttonReset.onclick = function() {
    count = 0;
    counterLabel.textContent = count;
};
