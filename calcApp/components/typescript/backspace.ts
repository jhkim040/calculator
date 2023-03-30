const Backspace = (expression: string): string => {
  if (expression.length <= 1) {
    return "0";
  }
  return expression.substring(0, expression.length - 1);
};

export default Backspace;
