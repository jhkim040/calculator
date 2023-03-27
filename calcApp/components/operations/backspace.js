const Backspace = (expression) => {
  if (!expression || expression.length <= 1) {
    return "0";
  }
  return expression.substr(0, expression.length - 1);
};

export default Backspace;
