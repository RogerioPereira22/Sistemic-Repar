"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-use-before-define
var react_1 = __importDefault(require("react"));
var rich_text_1 = require("payload/components/rich-text");
require("./index.scss");
var baseClass = "rich-text-label-button";
var ToolbarButton = function () { return (react_1.default.createElement(rich_text_1.ElementButton, { format: "label" },
    react_1.default.createElement("div", { className: baseClass }, "label"))); };
exports.default = ToolbarButton;
