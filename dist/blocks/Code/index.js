"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
var blockFields_1 = require("../../fields/blockFields");
exports.Code = {
    slug: 'code',
    fields: [
        (0, blockFields_1.blockFields)({
            name: 'codeFields',
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
                    name: 'code',
                    type: 'code',
                    required: true,
                },
            ]
        })
    ]
};
