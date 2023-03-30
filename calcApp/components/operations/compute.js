"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Compute = (expression) => {
  try {
    const signs = ["+", "-", "*", "÷", "%"];
    let operatorIndex = -1;
    let operator = "";

    for (let i = 0; i < expression.length; i++) {
      for (let j = 0; j < signs.length; j++) {
        if (expression[i] == signs[j]) {
          if (i > 0 && expression[i - 1] == "(") {
            break;
          }
          operatorIndex = i;
          operator = signs[j];
        }
      }
    }

    const a = Number(
      expression.substring(0, operatorIndex).replace(/[()]/g, "")
    );
    const b = Number(
      expression
        .substring(operatorIndex + 1, expression.length)
        .replace(/[()]/g, "")
    );
    // console.log(expression);
    // console.log(a);
    // console.log(b);
    let result = 0;
    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "÷":
        result = a / b;
        break;
      case "%":
        result = a % b;
        break;
      default:
        return expression;
    }
    return result.toString();
  } catch (e) {
    console.log(e);
    return expression;
  }
};
exports.default = Compute;
