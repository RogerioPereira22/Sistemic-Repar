"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var blockFields_1 = require("../../fields/blockFields");
var richText_1 = __importDefault(require("../../fields/richText"));
exports.Slider = {
    slug: "slider",
    fields: [
        (0, blockFields_1.blockFields)({
            name: "sliderFields",
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
                    type: "select",
                    name: "sliderType",
                    required: true,
                    options: [
                        {
                            label: "Quote Slider",
                            value: "quoteSlider",
                        },
                        {
                            label: "Image Slider",
                            value: "imageSlider",
                        },
                    ],
                },
                {
                    type: "array",
                    name: "imageSlides",
                    required: true,
                    minRows: 3,
                    admin: {
                        condition: function (_, siblingData) {
                            return siblingData.sliderType === "imageSlider";
                        },
                    },
                    fields: [
                        {
                            type: "upload",
                            name: "image",
                            relationTo: "media",
                            required: true,
                        },
                    ],
                },
                {
                    type: "array",
                    name: "quoteSlides",
                    required: true,
                    minRows: 3,
                    admin: {
                        condition: function (_, siblingData) {
                            return siblingData.sliderType === "quoteSlider";
                        },
                    },
                    fields: [
                        (0, richText_1.default)({
                            name: "richText",
                            required: true,
                            admin: {
                                elements: [],
                                leaves: ["underline"],
                            },
                        }),
                        {
                            type: "date",
                            name: "quoteDate",
                            required: true,
                        },
                    ],
                },
            ],
        }),
    ],
};
