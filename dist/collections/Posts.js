"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
var isAdmin_1 = require("../access/isAdmin");
var publishedOnly_1 = require("../access/publishedOnly");
var Banner_1 = require("../blocks/Banner");
var BlogContent_1 = require("../blocks/BlogContent");
var BlogMarkdown_1 = require("../blocks/BlogMarkdown");
var Code_1 = require("../blocks/Code");
var Media_1 = require("../blocks/Media");
var richText_1 = __importDefault(require("../fields/richText"));
var slug_1 = require("../fields/slug");
var formatPreviewURL_1 = require("../utilities/formatPreviewURL");
var regeneratePage_1 = require("../utilities/regeneratePage");
exports.Posts = {
    slug: "posts",
    admin: {
        useAsTitle: "title",
        preview: function (doc) { return (0, formatPreviewURL_1.formatPreviewURL)("posts", doc); },
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
                    collection: "posts",
                    doc: doc,
                });
            },
        ],
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        (0, richText_1.default)({
            name: "excerpt",
        }),
        {
            name: "content",
            type: "blocks",
            blocks: [Banner_1.Banner, BlogContent_1.BlogContent, Code_1.Code, BlogMarkdown_1.BlogMarkdown, Media_1.MediaBlock],
            required: true,
        },
        (0, slug_1.slugField)(),
        {
            name: "author",
            type: "relationship",
            relationTo: "users",
            required: true,
            admin: {
                position: "sidebar",
            },
        },
        {
            name: 'publishedOn',
            type: 'date',
            required: true,
            admin: {
                position: 'sidebar',
            }
        }
    ],
};
