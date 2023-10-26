const previousOperandTextElement = document.querySelector('data-previous-operand');
const currentOperandTextElement = document.querySelector('data-current-operand');
const numberButtons = document.querySelectorAll('data-number');
const operatorButton = document.querySelectorAll('data-operation');
const allClearButton = document.querySelector('data-all-clear');
const equalsButton = document.querySelector('data-equals-button');
const deleteButton = document.querySelector('data-delete-button');



let a;  //num1
let b;  //num2
let operator;



function operator(previousOperand, currentOperand, operator) {
    

    switch(operator){
        case '+':
            return add(previousOperand, currentOperand);
            
        case '-':
            return subtract(previousOperand, currentOperand);

        case '÷':
            return divide(previousOperand, currentOperand);

        case '*':
            return multiply(previousOperand, currentOperand);
        default:
            return 'ERROR';
    }
}

function add(a, b){
        return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by Zero'
    } 
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

