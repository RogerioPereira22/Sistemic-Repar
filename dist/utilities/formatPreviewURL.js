"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPreviewURL = void 0;
var formatPagePath_1 = require("./formatPagePath");
var formatPreviewURL = function (collection, doc) {
    return "".concat(process.env.PAYLOAD_PUBLIC_APP_URL, "/api/preview?url=").concat((0, formatPagePath_1.formatPagePath)(collection, doc));
};
exports.formatPreviewURL = formatPreviewURL;
