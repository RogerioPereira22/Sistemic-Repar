"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishedOnly = void 0;
var publishedOnly = function (_a) {
    var _b;
    var user = _a.req.user;
    if ((_b = user === null || user === void 0 ? void 0 : user.roles) === null || _b === void 0 ? void 0 : _b.includes('admin')) {
        return true;
    }
    return {
        _status: {
            equals: 'published'
        },
    };
};
exports.publishedOnly = publishedOnly;
