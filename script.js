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



function operator() {
    

    switch(){
        case '+':
            add()
        break;
            
        case '-':
            subtract();
        break;

        case '÷':
            divide();
        break;

        case '*':
            multiply();
        break;
    }
}

function add(a, b){
        return a + b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b
}

