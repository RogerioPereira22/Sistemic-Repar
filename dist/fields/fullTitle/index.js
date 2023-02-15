"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullTitle = void 0;
var populateFullTitle_1 = __importDefault(require("./populateFullTitle"));
exports.fullTitle = {
    name: 'fullTitle',
    type: 'text',
    hooks: {
        beforeChange: [
            populateFullTitle_1.default,
        ],
    },
    admin: {
        components: {
            Field: function () { return null; },
        },
    },
};
