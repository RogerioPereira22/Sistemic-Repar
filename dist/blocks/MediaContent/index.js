"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaContent = void 0;
var blockFields_1 = require("../../fields/blockFields");
var link_1 = __importDefault(require("../../fields/link"));
var richText_1 = __importDefault(require("../../fields/richText"));
exports.MediaContent = {
    slug: "mediaContent",
    fields: [
        (0, blockFields_1.blockFields)({
            name: "mediaContentFields",
            fields: [
                {
                    type: "row",
                    fields: [
                        {
                            name: "alignment",
                            type: "select",
                            defaultValue: "contentMedia",
                            options: [
                                {
                                    label: "Content + Media",
                                    value: "contentMedia",
                                },
                                {
                                    label: "Media + Content",
                                    value: "mediaContent",
                                },
                            ],
                            admin: {
                                description: "Choose how to align the content for this block.",
                                width: "50%",
                            },
                        },
                        {
                            name: "container",
                            type: "checkbox",
                            admin: {
                                description: "Check this box to render this block with a background container.",
                                width: "50%",
                                style: {
                                    alignSelf: "flex-end",
                                },
                            },
                        },
                    ],
                },
                (0, richText_1.default)(),
                {
                    name: "enableLink",
                    type: "checkbox",
                },
                (0, link_1.default)({
                    appearances: false,
                    overrides: {
                        admin: {
                            condition: function (_, _a) {
                                var enableLink = _a.enableLink;
                                return enableLink;
                            },
                        },
                    },
                }),
                {
                    name: "media",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
            ],
        }),
    ],
};
