let firstNum;
let secondNum;
let operator;

let statement;
let currentDisplay = document.querySelector(".current");
let historyDisplay = document.querySelector(".history");
let displayValue = currentDisplay.textContent;

document.addEventListener("click", event => {
    if(event.target.classList.contains("1")){
        currentDisplay.textContent += "1";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("2")){
        currentDisplay.textContent += "2";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("3")){
        currentDisplay.textContent += "3";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("4")){
        currentDisplay.textContent += "4";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("5")){
        currentDisplay.textContent += "5";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("6")){
        currentDisplay.textContent += "6";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("7")){
        currentDisplay.textContent += "7";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("8")){
        currentDisplay.textContent += "8";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("9")){
        currentDisplay.textContent += "9";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("0")){
        currentDisplay.textContent += "0";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("add")){
        currentDisplay.textContent += " + ";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("subtract")){
        currentDisplay.textContent += " - ";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("multiply")){
        currentDisplay.textContent += " * ";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("divide")){
        currentDisplay.textContent += " / ";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("clear")){
        currentDisplay.textContent = "";
        displayValue = currentDisplay.textContent;
    } else if(event.target.classList.contains("equals")){
        statement = displayValue.split(" ");
        statement[0] = Number(statement[0]);
        statement[2] = Number(statement[2]);
        currentDisplay.textContent = operate(statement[1], statement[0], statement[2]);
    }
});

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, num1, num2){
    if(operator === "+"){
        return add(num1, num2);
    } else if(operator === "-"){
        return subtract(num1, num2);
    } else if(operator === "*"){
        return multiply(num1, num2);
    } else if(operator === "/"){
        return divide(num1, num2);
    }
}



