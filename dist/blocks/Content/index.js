"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var blockFields_1 = require("../../fields/blockFields");
var richText_1 = __importDefault(require("../../fields/richText"));
exports.Content = {
    slug: "content",
    fields: [
        (0, blockFields_1.blockFields)({
            name: "contentFields",
            fields: [
                {
                    name: "useLeadingHeader",
                    label: "Use Leading Header",
                    type: "checkbox",
                },
                (0, richText_1.default)({
                    name: "leadingHeader",
                    label: "Leading Header",
                    admin: {
                        condition: function (_, siblingData) { return siblingData.useLeadingHeader; },
                    },
                }),
                {
                    name: "layout",
                    type: "select",
                    defaultValue: "oneColumn",
                    options: [
                        {
                            label: "One Column",
                            value: "oneColumn",
                        },
                        {
                            label: "Two Columns",
                            value: "twoColumns",
                        },
                        {
                            label: "Two Thirds + One Third",
                            value: "twoThirdsOneThird",
                        },
                        {
                            label: "Half + Half",
                            value: "halfAndHalf",
                        },
                        {
                            label: "Three Columns",
                            value: "threeColumns",
                        },
                    ],
                },
                (0, richText_1.default)({
                    name: "columnOne",
                }),
                (0, richText_1.default)({
                    name: "columnTwo",
                    admin: {
                        condition: function (_, siblingData) {
                            return [
                                "twoColumns",
                                "twoThirdsOneThird",
                                "halfAndHalf",
                                "threeColumns",
                            ].includes(siblingData.layout);
                        },
                    },
                }),
                (0, richText_1.default)({
                    name: "columnThree",
                    admin: {
                        condition: function (_, siblingData) {
                            return siblingData.layout === "threeColumns";
                        },
                    },
                }),
            ],
        }),
    ],
};
