const Compute = (expression: string): string => {
  try {
    const signs: string[] = ["+", "-", "*", "÷", "%"];
    let operatorIndex: number = -1;
    let operator: string = "";

    for (let i: number = 0; i < expression.length; i++) {
      for (let j: number = 0; j < signs.length; j++) {
        if (expression.charAt(i) == signs[j]) {
          if (i > 0 && expression.charAt(i - 1) == "(") {
            break;
          }
          operatorIndex = i;
          operator = signs[j];
        }
      }
    }

    const a: number = Number(
      expression.substring(0, operatorIndex).replace(/[()]/g, "")
    );
    const b: number = Number(
      expression
        .substring(operatorIndex + 1, expression.length)
        .replace(/[()]/g, "")
    );

    let result: number = 0;
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
export default Compute;
