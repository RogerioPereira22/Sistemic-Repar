"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_nested_docs_1 = __importDefault(require("@payloadcms/plugin-nested-docs"));
var config_1 = require("payload/config");
var path_1 = __importDefault(require("path"));
var plugin_form_builder_1 = __importDefault(require("@payloadcms/plugin-form-builder"));
var plugin_seo_1 = __importDefault(require("@payloadcms/plugin-seo"));
var ReusableContent_1 = require("./collections/ReusableContent");
var Users_1 = require("./collections/Users");
var CaseStudies_1 = require("./collections/CaseStudies");
var Pages_1 = require("./collections/Pages");
var Footer_1 = require("./globals/Footer");
var MainMenu_1 = require("./globals/MainMenu");
var Posts_1 = require("./collections/Posts");
var Media_1 = require("./collections/Media");
var richText_1 = __importDefault(require("./fields/richText"));
exports.default = (0, config_1.buildConfig)({
    collections: [
        CaseStudies_1.CaseStudies,
        Media_1.Media,
        Pages_1.Pages,
        Posts_1.Posts,
        ReusableContent_1.ReusableContent,
        Users_1.Users,
    ],
    globals: [
        Footer_1.Footer,
        MainMenu_1.MainMenu,
    ],
    graphQL: {
        disablePlaygroundInProduction: false,
    },
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
    plugins: [
        (0, plugin_form_builder_1.default)({
            formOverrides: {
                fields: [
                    (0, richText_1.default)({
                        name: 'leader',
                        label: 'Leader Text',
                        admin: {
                            elements: []
                        }
                    }),
                ]
            }
        }),
        (0, plugin_seo_1.default)({
            collections: [
                'case-studies',
                'pages',
                'posts',
            ],
            uploadsCollection: 'media',
        }),
        (0, plugin_nested_docs_1.default)({
            collections: ['pages'],
            generateLabel: function (_, doc) { return doc.title; },
            generateURL: function (docs) { return docs.reduce(function (url, doc) { return "".concat(url, "/").concat(doc.slug); }, ''); },
        }),
    ],
    cors: [
        process.env.PAYLOAD_PUBLIC_APP_URL,
        'https://sistemic-repar-production.up.railway.app/',
    ].filter(Boolean),
    admin: {
        webpack: function (config) { return (__assign(__assign({}, config), { resolve: __assign(__assign({}, config.resolve), { alias: __assign(__assign({}, config.resolve.alias), { react: path_1.default.resolve(__dirname, '../node_modules/react'), 'react-dom': path_1.default.resolve(__dirname, '../node_modules/react-dom'), 'react-router-dom': path_1.default.resolve(__dirname, '../node_modules/react-router-dom') }) }) })); }
    }
});
