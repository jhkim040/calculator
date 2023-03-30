const ChangeSign = (expression: string): string => {
  const lastNumber: string = expression.charAt(expression.length - 1);
  return expression
    .substring(0, expression.length - 1)
    .concat(`(-${lastNumber})`);
};
export default ChangeSign;
