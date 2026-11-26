let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');


function addNumbers() {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let sum = num1 + num2;
    alert('The sum is: ' + sum);
}