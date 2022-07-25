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