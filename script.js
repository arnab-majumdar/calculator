class Calculator {
    constructor(prev, curr) {
       this.prev = prev;
       this.curr = curr;
    }

    clear () {
        this.prev.innerText = '';
        this.curr.value = '0';
        this.operation = undefined;
    }

    appendNum(num) {
        return this.curr.value =  this.curr.value + num;
    }

    selectOperator(operator) {
        this.operation = operator;
        this.prev.innerText = this.curr.value;
        this.curr.value = '';
    }

    updateScreen(num) {
        this.curr.value = num;
    }
}

const btnValues = [
    ["9", "8", "7", "+"],
    ["6", "5", "4", "-"],
    ["3", "2", "1", "x"],
    ["C", "0", "=", "/"],
];

const calcBody = document.getElementById('calculator');
const screen = document.getElementById('screen');
const previousScreen = document.getElementById('previousScreen');
const numbers = ["9", "8", "7", "6", "5", "4","3", "2", "1", "0"];
const operators = ["+",  "-", "x", "/"];

const compute = (firstOperand, secondOperand, operator) => {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '/':
            return firstOperand / secondOperand;
        case 'x':
            return firstOperand * secondOperand;
        default:
            return;
    }

};

const calculator = new Calculator(previousScreen, screen);

const calculatorFunc = (e) => {
    e.target.textContent === 'C' ? calculator.clear() : null;

    if (numbers.includes(e.target.textContent)) {
        calculator.curr.value = calculator.appendNum(e.target.textContent);
        calculator.updateScreen(calculator.curr.value);
    }

    if (!calculator.prev.innerText && calculator.curr.value && operators.includes(e.target.textContent)) {
        calculator.selectOperator(e.target.textContent);
    } else if (operators.includes(e.target.textContent)) {
        alert('invalid: select a number');
    }

    if (e.target.textContent === '=') {
        if (calculator.operation && calculator.curr.value && calculator.prev.innerText) {
            const computedValue = compute(Number(calculator.prev.innerText), Number(calculator.curr.value), calculator.operation);
            calculator.prev.innerText = calculator.prev.innerText + ' ' + calculator.operation + ' ' + calculator.curr.value + ' ' + e.target.textContent + ' ' + computedValue;
            calculator.curr.value = computedValue;
        }
    }
};

btnValues.flat().map((item) => {
    const $btn = document.createElement("button");
    $btn.id = item;
    $btn.className = 'calcBtn'
    $btn.innerText = item;
    $btn.addEventListener('click', calculatorFunc);
    calcBody.appendChild($btn);
});

