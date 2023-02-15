"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogMarkdown = void 0;
var blockFields_1 = require("../../fields/blockFields");
var Field_1 = require("./Field");
exports.BlogMarkdown = {
    slug: "blogMarkdown",
    labels: {
        singular: 'Markdown',
        plural: 'Markdown Blocks',
    },
    fields: [
        (0, blockFields_1.blockFields)({
            name: "blogMarkdownFields",
            fields: [
                {
                    name: 'markdown',
                    type: 'text',
                    required: true,
                    admin: {
                        components: {
                            Field: Field_1.BlogMarkdownField
                        }
                    }
                }
            ],
        }),
    ],
};
