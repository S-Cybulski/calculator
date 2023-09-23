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
    
    if(currentNumDisplay.textContent === "ERROR"){
        clear();
        currentVal = '';
    }

    if(value === "."){
        if (currentVal.includes(".")){
        return
        }
    }

    if(isLast){
        displayVal = '';
        numDisplay.textContent = '';
        isLast = false;
    }

    if(value === "clear"){
        clear()
        return;
    }

    if (value === "delete"){
        currentVal = currentVal.slice(0,-1);
        currentNumDisplay.textContent = currentVal;
        return
    }

    if(value === "="){
        if(currentVal === ''){
            return;
        }

        if(typeof(operator) === 'undefined'){
            numDisplay.textContent = '';
            return;
        }

        lastNum = currentVal
        
        displayVal += currentVal;
        
        currentVal = (Math.round(operate(operator,firstNum,lastNum)* 1000)/ 1000).toString();
        if(Number(currentVal) === Infinity){
            clear();
            currentNumDisplay.textContent = 'ERROR';
            return;
        }

        console.log(currentVal)
        currentNumDisplay.textContent = currentVal;
        
        numDisplay.textContent = `${firstNum.toString()}${operator}${lastNum.toString()}`;

        firstNum = currentVal;
        operator = undefined;
        lastNum = undefined;
        
        isLast = true;

        return
    }

    if (['x','+','-','÷'].includes(value)){
        if(typeof(operator) !== 'undefined'){
            //numDisplay.textContent = '';
            multipleOperators();
            numDisplay.textContent += value;
            operator = value;
            currentVal = '';
            currentNumDisplay.textContent = '';
            return
            }

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

const multipleOperators = function(){

        lastNum = currentVal
        
        displayVal += currentVal;
        numDisplay.textContent = displayVal;
        
        currentVal = (Math.round(operate(operator,firstNum,lastNum) * 1000) / 1000).toString();
        console.log(currentVal)
        currentNumDisplay.textContent = currentVal;
        
        numDisplay.textContent = currentVal;

        firstNum = currentVal;
        operator = undefined;
        lastNum = undefined;
        
        isLast = false

        return
}

const clear = function(){

    displayVal = '';
    currentNumDisplay.textContent = '0';
    numDisplay.textContent = '';
    currentVal = '';
    operator = undefined;
    firstNum = undefined;
    lastNum = undefined;
    return

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
currentNumDisplay.classList.add('currentNumDisplay');
currentNumDisplay.textContent = '0';

const validKeys = ['1','2','3','4','5','6','7','8','9','0','Backspace','Enter','*','/','+','-','.','Delete'];

document.addEventListener('keydown', (event) => {
        if(validKeys.includes(event.key)){
            switch(event.key){
                case 'Enter':
                    userInput('=');
                    return;
                case 'Delete':
                    userInput('clear');
                    return;
                case 'Backspace':
                    userInput('delete');
                    return;
                case '*':
                    userInput('x');
                    return;
                case '/':
                    userInput('÷');
                    return;
                default:
                    userInput(event.key);
            }
        }
    });

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