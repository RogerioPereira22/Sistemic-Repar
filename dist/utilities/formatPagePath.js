"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPagePath = void 0;
var formatPagePath = function (collection, doc) {
    var slug = doc.slug;
    var prefix = '';
    if (collection) {
        switch (collection) {
            case 'pages':
                prefix = '';
                break;
            case 'posts':
                prefix = '/blog';
                break;
            default:
                prefix = "/".concat(collection);
        }
    }
    return "".concat(prefix, "/").concat(slug);
};
exports.formatPagePath = formatPagePath;
