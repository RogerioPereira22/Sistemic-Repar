"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogMarkdownField = void 0;
var react_1 = __importDefault(require("react"));
var Textarea_1 = __importDefault(require("payload/dist/admin/components/forms/field-types/Textarea"));
require("./index.scss");
var BlogMarkdownField = function (_a) {
    var path = _a.path, name = _a.name;
    return (react_1.default.createElement("div", { className: "markdown" },
        react_1.default.createElement(Textarea_1.default, { path: path, name: name, required: true })));
};
exports.BlogMarkdownField = BlogMarkdownField;
