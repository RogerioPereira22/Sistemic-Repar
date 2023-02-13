"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var isAdmin_1 = require("../access/isAdmin");
var link_1 = __importDefault(require("../fields/link"));
exports.Footer = {
    slug: 'footer',
    access: {
        read: function () { return true; },
        update: isAdmin_1.isAdmin
    },
    fields: [
        {
            name: 'columns',
            type: 'array',
            minRows: 1,
            maxRows: 3,
            fields: [
                {
                    name: 'navItems',
                    type: 'array',
                    fields: [
                        (0, link_1.default)({
                            appearances: false,
                        }),
                    ]
                }
            ]
        }
    ]
};
