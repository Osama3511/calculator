
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let displayValue = '0';
let result = 0;

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
    if(num2 === 0){
        return "ERROR";
    }
    return ((num1 / num2)).toFixed(5);
}

// updates the display to show displayValue each time we change it
function updateDisplay(){
    const display = document.querySelector("#display");
    display.textContent = displayValue;

    if(displayValue.length > 9){
        display.textContent = displayValue.slice(0,9);
    }

}

updateDisplay();

const buttons = document.querySelectorAll("button");

// goes through each button click
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if(button.classList.contains("operand")){
            inputOperand(button.value);
            updateDisplay();
        }
        else if(button.classList.contains("operator")){
            inputOperator(button.value);
        }
        else if(button.classList.contains("clear")){
            clearDisplay();
            updateDisplay();
        }
        else if(button.classList.contains("equals")){
            equals();
            updateDisplay();
        }
    });
});



function inputOperand(operand){
    // inputs to firstOperand by check if there is no operator clicked
    if(firstOperator == null){
        if(displayValue === '0' || displayValue == 0){
            displayValue = operand;
        }
        // if displayValue equals to firstOperand that means its a result and resets it 
        else if(displayValue === firstOperand){
            displayValue = operand;
        }
        else{
            displayValue += operand;
        }
    }
    // inputs to secondOperand
    else{
        // same expression in line 74
        if(displayValue === firstOperand){
            displayValue = operand;
        }
        else{
            displayValue += operand;
        }
    }
}

function inputOperator(operator){
    if(firstOperator != null && secondOperator == null){
        secondOperator = operator;
        equals();
        updateDisplay();
    }
    else if(firstOperator != null && secondOperator != null){
        let doddo = 13;
    }
    else{
        firstOperator = operator;
        firstOperand = displayValue;
    }
}



function clearDisplay(){
    firstOperand = secondOperand = firstOperator = secondOperator = null;
    displayValue = '0';
}

function equals(){
    if(firstOperator === null){
        displayValue = displayValue
    }
    else if(secondOperator != null){
        secondOperand = displayValue;
        result = caclulate(Number(firstOperand),Number(secondOperand),secondOperator);
        displayValue = result.toString();
        firstOperand = displayValue;
        firstOperator = null;
        secondOperand = null;
        secondOperator = null;
        result = null;
    }
    else{
        secondOperand = displayValue;
        result = caclulate(Number(firstOperand),Number(secondOperand),firstOperator);
        displayValue = result.toString();
        firstOperand = displayValue;
        firstOperator = null;
        secondOperand = null;
        result = null;
    }
}


function caclulate(num1, num2, op){
    if(op === '+'){
        return add(num1, num2);
    }
    else if(op === '-'){
        return subtract(num1, num2);
    }
    else if(op === '*'){
        return multiply(num1 ,num2);
    }
    else if(op === '/'){
        return divide(num1, num2);
    }
}

