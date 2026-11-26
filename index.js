let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let answer = document.getElementById('answerbx');


function addNumbers() {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let sum = num1 + num2;
    answer.textContent = 'The sum is: ' + sum;
}

function minusNumbers() {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let difference = num1 - num2;
    answer.textContent = 'The difference is: ' + difference;
}

function multiplyNumbers() {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let product = num1 * num2;
    answer.textContent = 'The product is: ' + product;
}

function divideNumbers() {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let quotient = num1 / num2;
    answer.textContent = 'The quotient is: ' + quotient;
}