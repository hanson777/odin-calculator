let firstNum;
let secondNum;
let operator;
let operatorIn = false;
let firstNumIn = false;
let secondNumIn = false;
let currentDisplay = document.querySelector(".current");
let historyDisplay = document.querySelector(".history");

document.addEventListener("click", event => {
    if(event.target.classList.contains("number-button")){
        if(!operatorIn){
            firstNumIn = true;
            firstNum += event.target.textContent;
            currentDisplay.textContent += event.target.textContent;
        } else if(operatorIn){
            secondNumIn = true;
            secondNum += event.target.textContent;
            currentDisplay.textContent += event.target.textContent;
        }
    } else if(event.target.classList.contains("operator")){
        if(!operatorIn){
            operatorIn = true;
            operator = event.target.textContent;
            currentDisplay.textContent += ` ${operator} `
        } else if(secondNumIn){
            currentDisplay.textContent = operate(operator, firstNum, secondNum);
            firstNum = operate(operator, firstNum, secondNum);
            operator = event.target.textContent;
            secondNumIn = false;
            secondNum = "";
            currentDisplay.textContent +=  ` ${operator} `;
        } else if(!secondNumIn && operatorIn){
            currentDisplay.textContent = currentDisplay.textContent.replace(operator, event.target.textContent);
            operator = event.target.textContent;
        }
    } else if(event.target.classList.contains("equals")){
        if(firstNumIn && secondNumIn && operatorIn){
            console.log(`${firstNum} ${secondNum} ${operator}`)
            currentDisplay.textContent = operate(operator, firstNum, secondNum);
        } 
    } else if(event.target.classList.contains("clear")){
        firstNumIn = false;
        secondNumIn = false;
        operatorIn = false;
        firstNum = "";
        secondNum = "";
        operator = "";
        currentDisplay.textContent = "";
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