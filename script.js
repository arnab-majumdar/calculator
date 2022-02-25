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
        console.log('update screen', this.curr, this.prev);
        this.curr.value = num;
        // this.prev.innerText = this.prev.innerText : null;
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

const calculator = new Calculator(previousScreen, screen);

const calculatorFunc = (e) => {
    e.target.textContent === 'C' ? calculator.clear() : null;
    console.log(e.target.textContent);

    if (numbers.includes(e.target.textContent)) {
        calculator.curr.value = calculator.appendNum(e.target.textContent);
        calculator.updateScreen(calculator.curr.value);
    }

    if (!calculator.prev.innerText && calculator.curr.value && operators.includes(e.target.textContent)) {
        calculator.selectOperator();
        console.log('calculator.curr.value', calculator.curr.value);
        console.log('calculator.prev.innerText', calculator.prev.innerText);
    } else if (operators.includes(e.target.textContent) && !calculator.curr) {
        alert('select a number');
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

