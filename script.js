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
    else {
        let num1 = store(display.textContent.replace(/\D/g, ""));
        display.textContent = button;
        return num1;
    
    }
    */
}
/*
I need the algorithm to store the number and store the operator 
when an operation is clicked. When a digit is pressed, it needs to 
replace the number with this digit and so on. When equal is pressed, 
it needs to store the second number and call the operate function with 
the stored variables. When a second, third, etc. operator is pressed,
it needs to make the "second" number the "first" number and store the
operator.
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
let num2 = false;
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
            if (!num2) {
                num2 = display.textContent;
                outcome = operate(num1, num2, op);
                console.log(outcome);
                num1 = num2;
                num2 = outcome;
                display.textContent = "";
                op = operation.textContent;
            }
            else {
                outcome = operate(num1, num2, op);
                num2 = display.textContent;
                console.log(outcome);
                num1 = num2;
                num2 = outcome;
                display.textContent = "";
                op = operation.textContent;
            }
        }
    })
})

function store(input) {
    return input;
}