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

const displayVal = function(val){
    
}

let firstNum;
let operator;
let lastNum;

const numButtons = document.querySelector(".numbers");
