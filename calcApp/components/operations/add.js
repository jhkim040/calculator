"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Add = (expression, keyword) => {
    if (expression === "0" && typeof keyword == "number") {
        return keyword.toString();
    }
    return expression.concat(keyword.toString());
};
exports.default = Add;
