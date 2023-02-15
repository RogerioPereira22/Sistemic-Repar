"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStudyCards = void 0;
var blockFields_1 = require("../../fields/blockFields");
var richText_1 = __importDefault(require("../../fields/richText"));
exports.CaseStudyCards = {
    slug: "caseStudyCards",
    labels: {
        singular: "Case Study Cards",
        plural: "Case Study Cards",
    },
    fields: [
        (0, blockFields_1.blockFields)({
            name: "caseStudyCardFields",
            fields: [
                {
                    name: "cards",
                    type: "array",
                    fields: [
                        (0, richText_1.default)(),
                        {
                            name: "caseStudy",
                            type: "relationship",
                            relationTo: "case-studies",
                            required: true,
                        },
                    ],
                },
            ],
        }),
    ],
};
