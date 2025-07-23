let currentInput = "";
let operator = "";
let firstValue = "";

function appendNumber(num) {
  if (num === "." && currentInput.includes(".")) return;
  currentInput = currentInput + num;
  document.getElementById("display").value = currentInput;
}

function setOperator(opr) {
  document.getElementById("operator").innerHTML = opr;
  if (currentInput == "") return;
  firstValue = currentInput;
  operator = opr;
  currentInput = "";
}

function Calculate() {
  if (firstValue == "" || currentInput == "" || operator == "") return;

  let result;
  let num1 = parseFloat(firstValue);
  let num2 = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      if (num2 === 0) {
        document.getElementById("display").value = "Error";
        currentInput = "";
        firstValue = "";
        operator = "";
        return;
      }
      result = num1 / num2;
      break;

    default:
      return;
  }
  document.getElementById("display").value = result;
  currentInput = result.toString();
  firstValue = "";
  operator = "";
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  firstValue = "";
  document.getElementById("display").value = 0;
  document.getElementById("operator").innerHTML = "";
}
