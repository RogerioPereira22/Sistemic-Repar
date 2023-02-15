"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeFeature = void 0;
var blockFields_1 = require("../../fields/blockFields");
var link_1 = __importDefault(require("../../fields/link"));
var richText_1 = __importDefault(require("../../fields/richText"));
exports.CodeFeature = {
    slug: 'codeFeature',
    fields: [
        (0, blockFields_1.blockFields)({
            name: 'codeFeatureFields',
            fields: [
                {
                    name: 'disableBlockSpacing',
                    type: 'checkbox',
                },
                {
                    name: 'heading',
                    type: 'text',
                    required: true,
                },
                (0, richText_1.default)({
                    admin: {
                        elements: ['ul', 'ol', 'link']
                    }
                }),
                {
                    name: 'enableLink',
                    type: 'checkbox',
                },
                (0, link_1.default)({
                    overrides: {
                        admin: {
                            condition: function (_, _a) {
                                var enableLink = _a.enableLink;
                                return Boolean(enableLink);
                            }
                        }
                    }
                }),
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'language',
                            type: 'select',
                            defaultValue: 'none',
                            options: [
                                {
                                    label: 'None',
                                    value: 'none',
                                },
                                {
                                    label: 'JavaScript',
                                    value: 'js',
                                },
                                {
                                    label: 'TypeScript',
                                    value: 'ts',
                                },
                            ]
                        },
                        {
                            name: 'label',
                            label: 'Code Label',
                            type: 'text',
                        },
                    ]
                },
                {
                    name: 'code',
                    type: 'code',
                    required: true,
                },
            ]
        })
    ]
};
