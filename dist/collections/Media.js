"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
var path_1 = __importDefault(require("path"));
var isAdmin_1 = require("../access/isAdmin");
exports.Media = {
    slug: 'media',
    upload: {
        staticDir: path_1.default.resolve(__dirname, '../../media'),
    },
    access: {
        create: isAdmin_1.isAdmin,
        read: function () { return true; },
        update: isAdmin_1.isAdmin,
        delete: isAdmin_1.isAdmin,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'darkModeFallback',
            type: 'upload',
            relationTo: 'media',
            admin: {
                description: 'Choose an upload to render if the visitor is using dark mode.'
            }
        },
    ]
};
