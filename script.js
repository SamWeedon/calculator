function add(a,b) {
    return parseFloat((Number(a) + Number(b)).toFixed(4));
}

function subtract(a,b) {
    return parseFloat((a - b).toFixed(4));
}

function multiply(a,b) {
    return parseFloat((a * b).toFixed(4));
}

function divide(a,b) {
    return parseFloat((a / b).toFixed(4));
}

function operate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    }
    else if (operator === '-') {
        return subtract(num1, num2);
    }
    else if (operator === '*') {
        return multiply(num1, num2);
    }
    else if (operator === '/') {
        return divide(num1, num2);
    }
}

const display = document.querySelector('.display');
display.textContent = '0';

function populate(button) {
    if (nextNumber === true) {
        display.textContent = "";
        nextNumber = false;
    }
    if (display.textContent === '0') {
        display.textContent = button;
    }
    else {
        display.textContent += button;
    }
}
/*
CALCULATION ALGORITHM:
On first operator click:
num1 = text
op = operator
On second/third/... click:
num2 = text
operate()
num1 = result
op = operator
text = result
CALCULATOR ALGORITHM FOR EQUALS:
On click:
num2 = text
operate()
num1 = result
op = undefined
*/


const digits = document.querySelectorAll('.digits > button');
const decimal = document.getElementById('.');
const addDigits = function() {
    populate(this.textContent)
        if (this.textContent === '.') {
            this.removeEventListener('click', addDigits);
        }
}
digits.forEach(function(digit) {
    digit.addEventListener('click', addDigits);
})

const operations = document.querySelectorAll('.operations > button');
let firstClick = true;
let op;
let num1;
let num2;
let outcome;
let nextNumber = false;
const equals = document.querySelector('.equals > button');
equals.addEventListener('click', function() {
    if (num1 && op) {
    num2 = display.textContent;
    outcome = operate(num1, num2, op);
    display.textContent = outcome;
    firstClick = true;
    nextNumber = true;
    decimal.addEventListener('click', addDigits);
    }
})

operations.forEach(function(operation) {
    operation.addEventListener('click', function() {
        if (firstClick) {
            num1 = display.textContent;
            op = operation.textContent;
            firstClick = false;
            nextNumber = true;
            decimal.addEventListener('click', addDigits);
        }
        else {
            num2 = display.textContent;
            outcome = operate(num1, num2, op);
            display.textContent = outcome;
            num1 = outcome;
            op = operation.textContent;
            nextNumber = true;
            decimal.addEventListener('click', addDigits);
        }
    })
})

const clear = document.querySelector('.clear > button');
clear.addEventListener('click', function() {
    display.textContent = '0';
    firstClick = true;
    op = '';
    num1 = '';
    num2 = '';
    outcome = '';
    nextNumber = false;
})

const backspace = document.querySelector('.backspace > button');
backspace.addEventListener('click', function() {
    let string = display.textContent;
    let stringBackspaced = string.substring(0, string.length - 1);
    if (string.includes('.') && stringBackspaced.includes('.') === false) {
        decimal.addEventListener('click', addDigits);
    }
    if (string.length <= 1){
        display.textContent = 0;
    }
    else {
        display.textContent = stringBackspaced;
    }
})

//start of keyboard-support code
document.addEventListener('keydown', (event) => {
    if (event.key !== 'Shift') {
        event.preventDefault();
        document.getElementById(event.key).click();
    }
})