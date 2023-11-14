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
const percentButton = document.querySelector('.percent-button');
const backspaceButton = document.querySelector('.bs-button');
const decimalButton = document.querySelector('.dc-button');
const pmButton = document.querySelector('.pm-button');

//basic function for calc
function operate(firstNum, op, secondNum){
    
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
            result = num1 / num2;
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
    resultDC = decimalCount(result);
        if(resultDC > 2 ){
            result = result.toFixed(2);
            return result;
        }
        else{
            return result;
        }
}

//fucntion for reading the buttons
function getButtonText(button){
    return button.textContent || button.innerText;//gets the text inside the button element
}

//function for reading hte numbered buttons
calculatorButtons.forEach(function(button){
    button.addEventListener('click', function(){
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
opButtons.forEach(function(button){
    button.addEventListener('click', function(){
        if(firstNum !== ''){
            op = getButtonText(button);
            firstNumComplete = true;
        }
        else{
            return;
        }
        
    });
});

//function for clearing and making multiple cacultations
equalButton.addEventListener('click', function(){
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
clearButton.addEventListener('click', function(){
    firstNum = '';
    secondNum = '';
    op = '';
    result = '';
    firstNumComplete = false;
    display.textContent = '';
});

//persentage 
percentButton.addEventListener('click', function(){
        result = operate(firstNum,'%',100);
        firstNum = result.toString(); 
        result = '';
        secondNum = ''; 
        op = ''; 
        firstNumComplete = true;
        display.textContent = firstNum;    
        return result;
});

//backspace
backspaceButton.addEventListener('click', function(){
    if(display.textContent === firstNum && firstNum !== ''){
        firstNum = firstNum.slice(0, -1);
        display.textContent = firstNum;
    }
    else if (display.textContent === secondNum && secondNum !== ''){
        secondNum = secondNum.slice(0, -1);
        display.textContent = secondNum;
    }
});

//dc button
decimalButton.addEventListener('click', function(){
    if(display.textContent === firstNum && firstNum !== ''){
        firstNum += '.';
        display.textContent = firstNum;
    }
    else if (display.textContent === secondNum && secondNum !== ''){
        secondNum += '.';
        display.textContent = secondNum;
    }
});

//plus or minus button
pmButton.addEventListener('click', function(){
    if(display.textContent === firstNum && firstNum !== ''){
        if(display.textContent[0] !== '-'){
            firstNum = '-' + firstNum;
            display.textContent = firstNum;
        }
        else{
            firstNum = firstNum.slice(1);
            display.textContent = firstNum;
        }
    }
    else if (display.textContent === secondNum && secondNum !== ''){
        if(display.textContent[0] !== '-'){
            secondNum = '-' + secondNum;
            display.textContent = secondNum;
        }
        else{
            secondNum = secondNum.slice(1);
            display.textContent = secondNum;
        }
    }
});

//so we can round to 0.00
function decimalCount (number) { 
    const numberAsString = number.toString();
    if (numberAsString.includes('.')) {
      return numberAsString.split('.')[1].length;
    }
    return 0;
}