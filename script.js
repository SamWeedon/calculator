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
    if (typeof button === 'number' && display.textContent === '0') {
        display.textContent = button;
    }
    else if (typeof button === 'number') {
        display.textContent += button;
    }
    /*
    POTENTIAL FUTURE REGEX
    else {
        let num1 = store(display.textContent.replace(/\D/g, ""));
        display.textContent = button;
        return num1;
    
    }
    */
}
/*
CALCULATION ALGORITHM:
On first run:
num1 = text
op = operator

On second/third/... run:
num2 = text
operate()
num1 = result
op = operator
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
operations.forEach(function(operation) {
    operation.addEventListener('click', function() {
        if (firstClick) {
            num1 = display.textContent;
            op = operation.textContent;
            display.textContent = "";
            firstClick = false;
        }
        else {
            num2 = display.textContent;
            outcome = operate(num1, num2, op);
            console.log(outcome);
            num1 = outcome;
            op = operation.textContent;
            display.textContent = "";
        }
    })
})
/*
FORMER STORE FUNCTION
function store(input) {
    return input;
}
*/