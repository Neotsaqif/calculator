const output = document.getElementById("output");
const digits = 10;
output.textContent = 0;

let result = 0;
let op;
let calc = false;
let number = 0;
let numberSV = 0;

function cleared() {
  result = 0;
  calc = false;
  number = 0;
  numberSV = 0;
  output.textContent = number;
}

function addNum(num) {
  number = number * digits + num;
  output.textContent = number;
  console.log(number);
}

function newData(opV) {
  if (!calc) {
    numberSV = number;
    number = 0;
    op = opV;
    calc = true;
    output.textContent = number;
    console.log(numberSV);
    console.log(op);
  } else {
    calculation();
    numberSV = number;
    number = 0;
    op = opV;
    calc = true;
    output.textContent = number;
    console.log(numberSV);
    console.log(op);
  }
}

function revert() {
  number *= -1;
  output.textContent = number;
  console.log(number);
}

function calculation() {
  calc = false;
  console.log("calc run");
  switch (op) {
    case "+":
      result = numberSV + number;
      break;
    case "-":
      result = numberSV - number;
      break;
    case "*":
      result = numberSV * number;
      break;
    case "/":
      result = numberSV / number;
      break;
  }
  console.log("calc run");
  output.textContent = result;
  console.log(result);
  number = result;
}
