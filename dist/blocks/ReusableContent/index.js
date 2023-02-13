"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReusableContent = void 0;
var blockFields_1 = require("../../fields/blockFields");
exports.ReusableContent = {
    slug: 'reusableContentBlock',
    fields: [
        (0, blockFields_1.blockFields)({
            name: 'reusableContentBlockFields',
            fields: [
                {
                    name: 'reusableContent',
                    type: 'relationship',
                    relationTo: 'reusable-content',
                    required: true,
                }
            ]
        })
    ]
};
