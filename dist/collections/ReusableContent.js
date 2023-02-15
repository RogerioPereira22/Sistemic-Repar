"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReusableContent = void 0;
var isAdmin_1 = require("../access/isAdmin");
var Banner_1 = require("../blocks/Banner");
var BlogContent_1 = require("../blocks/BlogContent");
var BlogMarkdown_1 = require("../blocks/BlogMarkdown");
var CallToAction_1 = require("../blocks/CallToAction");
var CardGrid_1 = require("../blocks/CardGrid");
var CaseStudiesHighlight_1 = require("../blocks/CaseStudiesHighlight");
var CaseStudyCards_1 = require("../blocks/CaseStudyCards");
var Code_1 = require("../blocks/Code");
var CodeFeature_1 = require("../blocks/CodeFeature");
var Content_1 = require("../blocks/Content");
var ContentGrid_1 = require("../blocks/ContentGrid");
var Form_1 = require("../blocks/Form");
var HoverHighlights_1 = require("../blocks/HoverHighlights");
var LinkGrid_1 = require("../blocks/LinkGrid");
var Media_1 = require("../blocks/Media");
var MediaContent_1 = require("../blocks/MediaContent");
var Slider_1 = require("../blocks/Slider");
var Steps_1 = require("../blocks/Steps");
var StickyHighlights_1 = require("../blocks/StickyHighlights");
exports.ReusableContent = {
    slug: "reusable-content",
    admin: {
        useAsTitle: "title",
    },
    access: {
        create: isAdmin_1.isAdmin,
        read: function () { return true; },
        readVersions: isAdmin_1.isAdmin,
        update: isAdmin_1.isAdmin,
        delete: isAdmin_1.isAdmin,
    },
    labels: {
        singular: "Reusable Content",
        plural: "Reusable Contents",
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "layout",
            type: "blocks",
            required: true,
            blocks: [
                Banner_1.Banner,
                BlogContent_1.BlogContent,
                BlogMarkdown_1.BlogMarkdown,
                CallToAction_1.CallToAction,
                CardGrid_1.CardGrid,
                CaseStudyCards_1.CaseStudyCards,
                CaseStudiesHighlight_1.CaseStudiesHighlight,
                Code_1.Code,
                CodeFeature_1.CodeFeature,
                Content_1.Content,
                ContentGrid_1.ContentGrid,
                Form_1.Form,
                HoverHighlights_1.HoverHighlights,
                LinkGrid_1.LinkGrid,
                Media_1.MediaBlock,
                MediaContent_1.MediaContent,
                Slider_1.Slider,
                Steps_1.Steps,
                StickyHighlights_1.StickyHighlights,
            ],
        },
    ],
};
