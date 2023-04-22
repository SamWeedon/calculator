function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
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
    if (typeof button === 'number' && display.textContent === '0') {
        display.textContent = button;
    }
    else if (typeof button === 'number') {
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
*/


const digits = document.querySelectorAll('.digits > button');
digits.forEach(function(digit) {
    digit.addEventListener('click', function() {
        populate(Number(digit.textContent))
    })
})

const operations = document.querySelectorAll('.operations > button');
let firstClick = true;
let op;
let num1;
let num2;
let outcome;
let nextNumber = false;
operations.forEach(function(operation) {
    operation.addEventListener('click', function() {
        if (firstClick) {
            num1 = display.textContent;
            op = operation.textContent;
            firstClick = false;
            nextNumber = true;
        }
        else {
            num2 = display.textContent;
            outcome = operate(num1, num2, op);
            display.textContent = outcome;
            num1 = outcome;
            op = operation.textContent;
            nextNumber = true;
        }
    })
})