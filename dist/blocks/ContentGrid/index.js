"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentGrid = void 0;
var blockFields_1 = require("../../fields/blockFields");
var richText_1 = __importDefault(require("../../fields/richText"));
var label_1 = __importDefault(require("../../fields/richText/label"));
exports.ContentGrid = {
    slug: "contentGrid",
    fields: [
        (0, blockFields_1.blockFields)({
            name: "contentGridFields",
            fields: [
                {
                    name: "forceDarkBackground",
                    type: "checkbox",
                    admin: {
                        description: "Check this box to force this block to have a dark background.",
                    },
                },
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
                    name: "cells",
                    type: "array",
                    fields: [
                        {
                            name: "content",
                            type: "richText",
                            required: true,
                            admin: {
                                elements: ["link", "h4", "h5", label_1.default, "upload"],
                            },
                        },
                    ],
                },
            ],
        }),
    ],
};
