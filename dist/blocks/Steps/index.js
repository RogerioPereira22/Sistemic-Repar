"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Steps = void 0;
var blockFields_1 = require("../../fields/blockFields");
var CodeFeature_1 = require("../CodeFeature");
var Content_1 = require("../Content");
var HoverHighlights_1 = require("../HoverHighlights");
var StickyHighlights_1 = require("../StickyHighlights");
exports.Steps = {
    slug: 'steps',
    labels: {
        singular: 'Steps Block',
        plural: 'Steps Blocks',
    },
    fields: [
        (0, blockFields_1.blockFields)({
            name: 'stepsFields',
            fields: [
                {
                    name: 'steps',
                    type: 'array',
                    required: true,
                    fields: [
                        {
                            name: 'layout',
                            type: 'blocks',
                            blocks: [
                                CodeFeature_1.CodeFeature,
                                Content_1.Content,
                                HoverHighlights_1.HoverHighlights,
                                StickyHighlights_1.StickyHighlights,
                            ]
                        }
                    ]
                }
            ]
        })
    ]
};
