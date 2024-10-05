
let firstNum = secondNum = operator = null;
let displayValue = '0';

// operation functions

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return Number((num1 / num2)).toFixed(3);
}


function updateDisplay(){
    if(display.textContent === "0"){
        display.textContent = '';
    }
    if(display.textContent.length >= 8){
        display.innerText = display.textContent.slice(0,8);
    }
    if (operator != null){
        display.textContent = '';
        operator = null;
    }
    else{
        display.textContent += displayValue;
    }
}


const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if(button.classList.contains("operand")){
            inputOperand()
        }
        else if(button.classList.contains("operator")){

        }
    });
});