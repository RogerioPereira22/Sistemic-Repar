"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickyHighlights = void 0;
var blockFields_1 = require("../../fields/blockFields");
var link_1 = __importDefault(require("../../fields/link"));
var richText_1 = __importDefault(require("../../fields/richText"));
exports.StickyHighlights = {
    slug: 'stickyHighlights',
    labels: {
        singular: 'Sticky Highlights Block',
        plural: 'Sticky Highlights Blocks',
    },
    fields: [
        (0, blockFields_1.blockFields)({
            name: 'stickyHighlightsFields',
            fields: [
                {
                    name: 'highlights',
                    type: 'array',
                    fields: [
                        (0, richText_1.default)(),
                        {
                            name: 'enableLink',
                            type: 'checkbox',
                        },
                        (0, link_1.default)({
                            appearances: false,
                            overrides: {
                                admin: {
                                    condition: function (_, _a) {
                                        var enableLink = _a.enableLink;
                                        return Boolean(enableLink);
                                    },
                                }
                            }
                        }),
                        {
                            name: 'type',
                            type: 'radio',
                            options: [
                                {
                                    label: 'Code',
                                    value: 'code',
                                },
                                {
                                    label: 'Media',
                                    value: 'media',
                                },
                            ],
                        },
                        {
                            name: 'code',
                            type: 'code',
                            required: true,
                            admin: {
                                condition: function (_, _a) {
                                    var type = _a.type;
                                    return type === 'code';
                                }
                            }
                        },
                        {
                            name: 'media',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                            admin: {
                                condition: function (_, _a) {
                                    var type = _a.type;
                                    return type === 'media';
                                }
                            }
                        },
                    ],
                },
            ],
        })
    ]
};
