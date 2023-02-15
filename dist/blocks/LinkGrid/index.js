"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkGrid = void 0;
var blockFields_1 = require("../../fields/blockFields");
var linkGroup_1 = __importDefault(require("../../fields/linkGroup"));
exports.LinkGrid = {
    slug: 'linkGrid',
    fields: [
        (0, blockFields_1.blockFields)({
            name: 'linkGridFields',
            fields: [
                (0, linkGroup_1.default)({
                    appearances: false,
                })
            ]
        })
    ]
};
