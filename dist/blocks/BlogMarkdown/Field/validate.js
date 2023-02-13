"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
var validate = function (value) {
    if (typeof value !== 'string' || (value === null || value === void 0 ? void 0 : value.length) === 0) {
        return 'This field is required.';
    }
    return true;
};
exports.validate = validate;
