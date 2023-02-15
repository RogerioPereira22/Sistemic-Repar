"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardGrid = void 0;
var blockFields_1 = require("../../fields/blockFields");
var link_1 = __importDefault(require("../../fields/link"));
var linkGroup_1 = __importDefault(require("../../fields/linkGroup"));
var richText_1 = __importDefault(require("../../fields/richText"));
exports.CardGrid = {
    slug: 'cardGrid',
    fields: [
        (0, blockFields_1.blockFields)({
            name: 'cardGridFields',
            fields: [
                (0, richText_1.default)(),
                (0, linkGroup_1.default)({
                    appearances: false,
                    overrides: {
                        admin: {
                            description: 'These links will be placed above the card grid as calls-to-action.'
                        }
                    }
                }),
                {
                    name: 'cards',
                    type: 'array',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                        },
                        {
                            name: 'enableLink',
                            type: 'checkbox',
                        },
                        (0, link_1.default)({
                            disableLabel: true,
                            appearances: false,
                            overrides: {
                                admin: {
                                    condition: function (_, _a) {
                                        var enableLink = _a.enableLink;
                                        return enableLink;
                                    },
                                }
                            }
                        }),
                    ]
                },
            ]
        })
    ]
};
