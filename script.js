class Calculator {
    constructor(prev, curr) {
       this.prev = prev;
       this.curr = curr;
    }

    clear () {
        this.prev = '';
        this.curr = '';
        this.operation = undefined;
    }

    appendNum(num) {
        return this.curr = this.curr + num;
    }

    selectOperator(operator) {
        this.operation = operator;
    }

    updateScreen() {
        console.log('update screen', this.curr);
        this.prev.value =  typeof this.curr === 'string' ? this.curr : null;
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
    if (numbers.includes(e.target.textContent)) {
        calculator.curr = calculator.appendNum(e.target.textContent);
        calculator.updateScreen(calculator.curr);
        console.log('this ',this.curr, this.prev );
        console.log('calc ',calculator.curr, calculator.prev );
    }

    if (this.curr && operators.includes(e.target.textContent)) {

    } else if (operators.includes(e.target.textContent) && !this.curr) {
        console.log('this ',this.curr, this.prev );
        console.log('calc ',calculator.curr, calculator.prev );
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

