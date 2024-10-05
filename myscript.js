
let firstOperand = secondOperand = firstOperator = secondOperator = null;
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
    return Number((num1 / num2)).toFixed(5);
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
    if(firstOperator == null){
        if(displayValue === '0'){
            displayValue = operand;
        }
        else if(displayValue === firstOperand){
            displayValue = operand;
        }
        else{
            displayValue += operand;
        }
    }
    else{
        if(displayValue === firstOperand){
            displayValue = operand;
        }
        else{
            displayValue += operand;
        }
    }
}

function inputOperator(operator){
    if(firstOperator == null){
        firstOperator = operator;
        firstOperand = displayValue;
    }
}



function clearDisplay(){
    firstOperand = secondOperand = firstOperator = secondOperator = null;
    displayValue = '0';
}

function equals(){
    if(firstOperand == null){
        updateDisplay();
    }
    else{
        secondOperand = displayValue;
        result = caclulate(Number(firstOperand),Number(secondOperand),firstOperator);
        displayValue = result;
        firstOperand = displayValue;
        updateDisplay();
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
    else{
        return divide(num1, num2);
    }
}

// function clear(){
//     displayValue = "";
//     updateDisplay();
// }