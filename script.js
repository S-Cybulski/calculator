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
        case "*":
            return multiply(firstNum, lastNum);
        case "/":
            return divide(firstNum, lastNum);
        default:
            return undefined;
    }
}

const userInput = function(value){
    if(value ==="clear"){
        displayVal = '';
        numDisplay.textContent = '';
        return
    }

    if (value ==="delete"){
        displayVal = displayVal.slice(0,-1);
        numDisplay.textContent = displayVal;
        return
    }

    if(value ==="="){
        calculate();
    }

    displayVal += value;
    numDisplay.textContent = `${displayVal.toString()}`;
    console.log(value);
}

let firstNum;
let operator;
let lastNum;
let displayVal = '';

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let numDisplay = document.createElement('div');
numDisplay.classList.add('numDisplay');
numDisplay.textContent = 'Hellooooooo';

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        userInput(button.id);
        if(button.id ==="clear"){
            displayVal = '';
        }
    })
});

display.appendChild(numDisplay);