const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const operate = function(operator, firstNum, lastNum){
    switch(operator){
        case "+":
            return add(Number(firstNum), Number(lastNum));
        case "-":
            return subtract(firstNum, lastNum);
        case "x":
            return multiply(firstNum, lastNum);
        case "÷":
            return divide(firstNum, lastNum);
        default:
            return undefined;
    }
}

const userInput = function(value){
    console.log(value);
    if(isLast){
        displayVal = '';
        numDisplay.textContent = '';
        isLast = false;
    }
    if(value === "clear"){
        displayVal = '';
        numDisplay.textContent = '';
        operator = undefined;
        firstNum = undefined;
        lastNum = undefined;
        return
    }

    if (value === "delete"){
        currentVal = currentVal.slice(0,-1);
        currentNumDisplay.textContent = currentVal;
        return
    }

    if(value === "="){
        lastNum = currentVal

        displayVal += currentVal;
        numDisplay.textContent = displayVal;

        currentVal = operate(operator,firstNum,lastNum);
        console.log(currentVal)
        currentNumDisplay.textContent = currentVal;

        firstNum = currentVal;
        operator = undefined;
        lastNum = undefined;
        
        isLast = true;

        return
    }

    if (['x','+','-','÷'].includes(value)){
        firstNum = Number(currentVal);
        operator = value;

        displayVal += currentVal;
        displayVal += value;

        numDisplay.textContent = displayVal;

        currentVal = '';
        currentNumDisplay.textContent = '';
        return
    }

    currentVal += value;
    currentNumDisplay.textContent = currentVal;
}

let firstNum;
let operator;
let lastNum;
let displayVal = '';
let currentVal = '';
let isLast = false;

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let numDisplay = document.createElement('div');
numDisplay.classList.add('numDisplay');
numDisplay.textContent = '';

let currentNumDisplay = document.createElement('div');
currentNumDisplay.classList.add('numDisplay');
currentNumDisplay.textContent = '0';
currentNumDisplay.style.cssText = 'color: blue;'

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        userInput(button.id);
        if(button.id ==="clear"){
            displayVal = '';
            currentVal = '';
            currentNumDisplay.textContent = displayVal;
            numDisplay.textContent = currentVal;
        }
    })
});

display.appendChild(numDisplay);
display.appendChild(currentNumDisplay);