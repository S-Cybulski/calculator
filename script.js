const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const operate = function(operator, firstNum, lastNum){
    switch(operator){
        case "+":
            return add(firstNum, lastNum);
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
    if(value === "clear"){
        displayVal = '';
        numDisplay.textContent = '';
        return
    }

    if (value === "delete"){
        displayVal = displayVal.slice(0,-1);
        numDisplay.textContent = displayVal;
        return
    }

    if(value === "="){
        firstNum = Number(displayVal.split(' ')[0]);
        operator = displayVal.split(' ')[1];
        lastNum = Number(currentVal);

        displayVal += currentVal;
        numDisplay.textContent = displayVal;

        currentVal = operate(operator,firstNum,lastNum);
        console.log(currentVal)
        currentNumDisplay.textContent = currentVal;

        return
    }

    if (value in [' x ',' + ',' - ',' ÷ ']){
        console.log("Hello");
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