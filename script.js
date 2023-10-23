const previousOperandTextElement = document.querySelector('data-previous-operand');
const currentOperandTextElement = document.querySelector('data-current-operand');
const numberButtons = document.querySelectorAll('data-number');
const operatorButton = document.querySelectorAll('data-operation');
const allClearButton = document.querySelector('data-all-clear');
const equalsButton = document.querySelector('data-equals-button');
const deleteButton = document.querySelector('data-delete-button');


class Calculator {
    constructor (currentOperand, previousOperand) {
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
    }

    updateDisplay() {
        
    }

}



//operations
    function add(a,b) {
        let result = a + b;
        return result
    }
    function subtract(a,b) {
        let result = a - b;
        return result
    }
    function multiply(a,b) {
        let result = a * b;
        return result
    }
    function divide(a,b) {
        let result = a / b;
        return result
    }


operate(currentOperand, previousOperand, operator) {
    switch(operator) {
        case '+': 
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return 'Invalid';
    }
}




allClear(){

}