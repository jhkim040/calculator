"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChangeSign = (expression) => {
    const lastNumber = expression.charAt(expression.length - 1);
    return expression
        .substring(0, expression.length - 1)
        .concat(`(-${lastNumber})`);
};
exports.default = ChangeSign;
