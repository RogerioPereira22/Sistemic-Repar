"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var blockFields_1 = require("../../fields/blockFields");
var richText_1 = __importDefault(require("../../fields/richText"));
exports.Form = {
    slug: 'form',
    labels: {
        singular: 'Form Block',
        plural: 'Form Blocks',
    },
    graphQL: {
        singularName: 'FormBlock',
    },
    fields: [
        (0, blockFields_1.blockFields)({
            name: 'formFields',
            fields: [
                {
                    name: 'container',
                    type: 'checkbox',
                    admin: {
                        description: 'Check this box to render this block with a background container.'
                    }
                },
                (0, richText_1.default)(),
                {
                    name: 'form',
                    type: 'relationship',
                    relationTo: 'forms',
                    required: true,
                }
            ]
        })
    ]
};
