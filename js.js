let firstNum = '';
let secondNum = '';
let op = '';
let result;
let buttonText;

let display = document.querySelector(".display");
const opButtons = document.querySelectorAll(".op");
const calculatorButtons = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equal-button');

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
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                display.textContent = 'error';
                return NaN;
            }
            break;
        default:
            display.textContent = 'error';
            return NaN;
    }
    console.log('Result: ' + result);
    display.textContent = result;

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

        if (op === '') {
            firstNum += buttonText;
        } else {
            secondNum += buttonText;
        }
        display.textContent = buttonText;
    });
});

opButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        op = getButtonText(button);
        console.log('Button clicked: ' + op);
    });
});

//function for clearing and making multiple cacultations
equalButton.addEventListener('click', function() {
    if (firstNum !== '' && secondNum !== '') {
        operate(firstNum, op, secondNum);
        firstNum = result.toString(); 
        secondNum = ''; 
        op = ''; 
    }
});

