let firstNum = '';
let secondNum = '';
let op = '';
let result = '';
let buttonText;
let firstNumComplete = false;

let display = document.querySelector(".display");
const opButtons = document.querySelectorAll(".op");
const calculatorButtons = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equal-button');
const clearButton = document.querySelector('.clear-button');

//basic function for calc
function operate(firstNum, op, secondNum) {
    
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(secondNum);

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '/':
            if(num2 !== 0) {
                result = num1 / num2;
            } 
            else{
                display.textContent = 'error';
                return;
            }
            break;
        default:
            display.textContent = 'error';
            return;
    }
        console.log('Result: ' + result);
        console.log('firstNum: ' + firstNum);
        console.log('op: ' + op);
        console.log('secondNum: ' + secondNum);

    return result;
}

//fucntion for reading the buttons
function getButtonText(button) {
    return button.textContent || button.innerText;//gets the text inside the button element
}

calculatorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        buttonText = getButtonText(button);

        
        if(!firstNumComplete) {
                firstNum += buttonText;
                display.textContent = firstNum;
        }
        else{
            display.textContent = '';
            secondNum += buttonText;
            display.textContent += secondNum;
        }
    });
});

//fucntion to get the op
opButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        
            op = getButtonText(button);
            firstNumComplete = true;
            console.log('op is ' + op);
        
    });
});

//function for clearing and making multiple cacultations
equalButton.addEventListener('click', function() {
    if (firstNum !== '' && secondNum !== '') {
        operate(firstNum, op, secondNum);
        if(display.textContent === 'error') {
            firstNum = '';
            secondNum = '';
            op = '';
            firstNumComplete = false;
            return;
        }
        firstNum = result.toString(); 
        result = '';
        secondNum = ''; 
        op = ''; 
        firstNumComplete = true;
        display.textContent = firstNum;
    }
});

//clear button
clearButton.addEventListener('click', function() {
    firstNum = '';
    secondNum = '';
    op = '';
    result = '';
    firstNumComplete = false;
    display.textContent = '';
});