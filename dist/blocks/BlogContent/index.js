"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogContent = void 0;
var blockFields_1 = require("../../fields/blockFields");
var richText_1 = __importDefault(require("../../fields/richText"));
exports.BlogContent = {
    slug: "blogContent",
    fields: [
        (0, blockFields_1.blockFields)({
            name: "blogContentFields",
            fields: [(0, richText_1.default)({}, { elements: ["ul"] })],
        }),
    ],
};
