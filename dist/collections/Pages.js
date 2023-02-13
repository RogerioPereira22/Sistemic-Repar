"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pages = void 0;
var isAdmin_1 = require("../access/isAdmin");
var publishedOnly_1 = require("../access/publishedOnly");
var CallToAction_1 = require("../blocks/CallToAction");
var CardGrid_1 = require("../blocks/CardGrid");
var CaseStudiesHighlight_1 = require("../blocks/CaseStudiesHighlight");
var CaseStudyCards_1 = require("../blocks/CaseStudyCards");
var CodeFeature_1 = require("../blocks/CodeFeature");
var Content_1 = require("../blocks/Content");
var ContentGrid_1 = require("../blocks/ContentGrid");
var Form_1 = require("../blocks/Form");
var HoverHighlights_1 = require("../blocks/HoverHighlights");
var LinkGrid_1 = require("../blocks/LinkGrid");
var Media_1 = require("../blocks/Media");
var MediaContent_1 = require("../blocks/MediaContent");
var ReusableContent_1 = require("../blocks/ReusableContent");
var Slider_1 = require("../blocks/Slider");
var Steps_1 = require("../blocks/Steps");
var StickyHighlights_1 = require("../blocks/StickyHighlights");
var fullTitle_1 = require("../fields/fullTitle");
var hero_1 = require("../fields/hero");
var slug_1 = require("../fields/slug");
var formatPreviewURL_1 = require("../utilities/formatPreviewURL");
var regeneratePage_1 = require("../utilities/regeneratePage");
exports.Pages = {
    slug: 'pages',
    admin: {
        useAsTitle: 'fullTitle',
        preview: function (doc) { return (0, formatPreviewURL_1.formatPreviewURL)('pages', doc); },
        defaultColumns: ['fullTitle', 'slug', 'createdAt', 'updatedAt'],
    },
    versions: {
        drafts: true,
    },
    access: {
        create: isAdmin_1.isAdmin,
        read: publishedOnly_1.publishedOnly,
        readVersions: isAdmin_1.isAdmin,
        update: isAdmin_1.isAdmin,
        delete: isAdmin_1.isAdmin,
    },
    hooks: {
        afterChange: [
            function (_a) {
                var payload = _a.req.payload, doc = _a.doc;
                (0, regeneratePage_1.regeneratePage)({
                    payload: payload,
                    collection: 'pages',
                    doc: doc
                });
            },
        ]
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        fullTitle_1.fullTitle,
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero',
                    fields: [
                        hero_1.hero,
                    ]
                },
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'layout',
                            type: 'blocks',
                            required: true,
                            blocks: [
                                CallToAction_1.CallToAction,
                                CardGrid_1.CardGrid,
                                CaseStudyCards_1.CaseStudyCards,
                                CaseStudiesHighlight_1.CaseStudiesHighlight,
                                CodeFeature_1.CodeFeature,
                                Content_1.Content,
                                ContentGrid_1.ContentGrid,
                                Form_1.Form,
                                HoverHighlights_1.HoverHighlights,
                                LinkGrid_1.LinkGrid,
                                Media_1.MediaBlock,
                                MediaContent_1.MediaContent,
                                ReusableContent_1.ReusableContent,
                                Slider_1.Slider,
                                Steps_1.Steps,
                                StickyHighlights_1.StickyHighlights,
                            ]
                        }
                    ]
                }
            ]
        },
        (0, slug_1.slugField)(),
    ]
};
