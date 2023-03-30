const Add = (expression: string, keyword: number | string): string => {
  if (expression === "0" && typeof keyword == "number") {
    return keyword.toString();
  }
  return expression.concat(keyword.toString());
};

export default Add;
