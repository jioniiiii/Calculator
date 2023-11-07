let firstNum;
let secondNum;
let op = '';
let buttonText;

let display = document.querySelector(".display");
const opButtons = document.querySelectorAll(".op");
const calculatorButtons = document.querySelectorAll('.button');

//basic function for calc
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function devide(a,b){
    if(b !== 0){
        return a / b;
    }
    else{
        console.log("cant devide with 0");
    }
}

//functtion for choosing operation
function operate(firstNum, op, secondNum){
    
    let result;

    if(op === "+"){
        result = add(firstNum,secondNum);
    }
    else if(op === "-"){
        result = subtract(firstNum,secondNum);
    }
    else if(op === "*"){
        result = multiply(firstNum,secondNum);
    }
    else{
        result = devide(firstNum,secondNum);
    }

    op = '';
    console.log('Result: ' + result);
    return result;

}

//fucntion for reading the buttons
function getButtonText(button) {
    return button.textContent || button.innerText;//gets the text inside the button element
}

calculatorButtons.forEach(function(button){
    button.addEventListener('click', function() {
        
        buttonText = getButtonText(button);//stored the last pressed button
        console.log('Button clicked: ' + buttonText);

        if(op === ''){//save the num to the vars for the op
            firstNum = buttonText;
        }
        else{
            secondNum = buttonText;
        }

        display.textContent = buttonText;
    });
});

opButtons.forEach(function(button){
    button.addEventListener('click', function() {

        op = getButtonText(button);
        console.log('Button clicked: ' + op);
    });
});