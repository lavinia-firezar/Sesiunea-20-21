const display = document.getElementById("display");
const numbers = document.querySelector(".numbers")
const operatorsArithmetic = document.querySelector(".arithmetic-operators");
const equal = document.getElementById("equal");
const removedisplay = document.getElementById("clear");

function showInput(event) {
    let buttonValue = event.target.value;
    display.value = display.value + buttonValue;   
}

function calculate() {
    let actuallyValue = display.value;
    let finalResult = eval(actuallyValue);
    display.value = finalResult;    
}

function remove() {
    display.value = " ";
}

numbers.addEventListener('click',showInput);
operatorsArithmetic.addEventListener('click',showInput);
equal.addEventListener('click',calculate);
removedisplay.addEventListener("click",remove);