let problemText = "";
let solutionText = "";
let num1 = 0;
let num2 = 0;
let operator = "";

const topNum = document.querySelector('#inputNumbers');

topNum.value = problemText;

function addition(a,b) {
    return a + b;
};

function subtraction(a,b) {
    return a - b;
};

function multiplication(a,b) {
    return a * b;
};

function division(a,b) {
    return a / b;
};

function operate(operator,a,b) {
    if (operator == "plus") {
       return addition(a,b)
    }else if (operator == "minus") {
        return subtraction(a,b)
    }else if (operator == "multiply") {
        return multiplication(a,b)
    } else if (operator == "divisor") {
        return division(a,b)
    }else return "operator not found"
};

function clearAll() {
    problemText = "";
    solutionText = "";
     num1 = 0;
     num2 = 0;
    operator = "";
};


function displayNums(a) {
    problemText += a;
    topNum.value = problemText;
    return problemText;
};