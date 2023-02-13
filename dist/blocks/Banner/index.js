"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
var blockFields_1 = require("../../fields/blockFields");
exports.Banner = {
    slug: 'banner',
    fields: [
        (0, blockFields_1.blockFields)({
            name: 'bannerFields',
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'type',
                            type: 'select',
                            defaultValue: 'default',
                            options: [
                                {
                                    label: 'Default',
                                    value: 'default',
                                },
                                {
                                    label: 'Success',
                                    value: 'success',
                                },
                                {
                                    label: 'Warning',
                                    value: 'warning',
                                },
                                {
                                    label: 'Error',
                                    value: 'error',
                                },
                            ],
                            admin: {
                                width: '50%',
                            }
                        },
                        {
                            name: 'addCheckmark',
                            type: 'checkbox',
                            admin: {
                                width: '50%',
                                style: {
                                    alignSelf: 'center',
                                }
                            }
                        },
                    ]
                },
                {
                    name: 'content',
                    type: 'richText',
                    required: true,
                    admin: {
                        elements: [
                            'link',
                        ],
                    }
                }
            ]
        }),
    ]
};
