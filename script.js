const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete-button]');


class Calculator {
    constructor(currentOperandTextElement, previousOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear();
}


clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = null;
}

delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
}

appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
}


flushOperator(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
        this.compute();
}
}


compute() {
    let computation;
    const previous = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(previous) || isNaN(current)) return;
    switch (this.operation) {
        case '+':
            computation = previous + current;
        break;

        case '-':
            computation = previous - current;
        break;

        case '*':
            computation = previous * current;
        break;

        case '÷':
            computation = previous / current;
        break;

        default:
            return
    }
    this.currentOperand = computation;
    this.previousOperand = '';
    this.operation = undefined;
}


updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation !=null) {
        this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    }
}

}



let calculator = new Calculator(
    currentOperandTextElement,
    previousOperandTextElement
);

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operatorButton.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.flushOperator(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});












