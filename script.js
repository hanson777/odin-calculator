let firstNum;
let secondNum;
let operator;

let statement;
let currentDisplay = document.querySelector(".current");
let historyDisplay = document.querySelector(".history");
let displayValue = currentDisplay.textContent;


document.addEventListener("click", event => {
    if(event.target.classList.contains("number-button")){
        currentDisplay.textContent = event.target.textContent;
        displayValue += currentDisplay.textContent;
    } else if(event.target.classList.contains("operator")){
        displayValue += event.target.textContent;
    } else if(event.target.classList.contains("equals")){
        statement = displayValue.split("");
        currentDisplay.textContent = operate(statement[1], statement[0], statement[2]);
        displayValue = "";
    } 
})

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
    if(b == 0) return "Wtf";
    return a / b;
}

function operate(operator, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
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



