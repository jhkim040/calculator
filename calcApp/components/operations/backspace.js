"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Backspace = (expression) => {
    if (expression.length <= 1) {
        return "0";
    }
    return expression.substring(0, expression.length - 1);
};
exports.default = Backspace;
