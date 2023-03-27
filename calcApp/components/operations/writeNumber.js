const WriteNumber = (expression, number) => {
  if (expression === "0") {
    return number.toString();
  }
  return expression.concat(number);
};

export default WriteNumber;
