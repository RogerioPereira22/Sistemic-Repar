"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallToAction = void 0;
var blockFields_1 = require("../../fields/blockFields");
var linkGroup_1 = __importDefault(require("../../fields/linkGroup"));
var richText_1 = __importDefault(require("../../fields/richText"));
exports.CallToAction = {
    slug: 'cta',
    labels: {
        singular: 'Call to Action',
        plural: 'Calls to Action',
    },
    fields: [
        (0, blockFields_1.blockFields)({
            name: 'ctaFields',
            fields: [
                (0, richText_1.default)(),
                {
                    name: 'feature',
                    type: 'select',
                    defaultValue: 'none',
                    required: true,
                    options: [
                        {
                            label: 'None',
                            value: 'none',
                        },
                        {
                            label: 'Create Payload App',
                            value: 'cpa',
                        },
                    ]
                },
                (0, linkGroup_1.default)({
                    appearances: false,
                }),
            ]
        })
    ]
};
