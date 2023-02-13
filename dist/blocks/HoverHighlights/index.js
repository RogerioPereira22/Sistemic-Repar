"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverHighlights = void 0;
var blockFields_1 = require("../../fields/blockFields");
var link_1 = __importDefault(require("../../fields/link"));
var richText_1 = __importDefault(require("../../fields/richText"));
exports.HoverHighlights = {
    slug: 'hoverHighlights',
    labels: {
        singular: 'Hover Highlights Block',
        plural: 'Hover Highlights Blocks',
    },
    fields: [
        (0, blockFields_1.blockFields)({
            name: 'hoverHighlightsFields',
            fields: [
                (0, richText_1.default)(),
                {
                    name: 'addRowNumbers',
                    type: 'checkbox',
                },
                {
                    name: 'highlights',
                    type: 'array',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'description',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'media',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                        },
                        {
                            name: 'enableLink',
                            type: 'checkbox',
                        },
                        (0, link_1.default)({
                            appearances: false,
                            disableLabel: true,
                            overrides: {
                                admin: {
                                    condition: function (_, _a) {
                                        var enableLink = _a.enableLink;
                                        return Boolean(enableLink);
                                    },
                                }
                            }
                        }),
                    ],
                },
            ],
        })
    ]
};
