"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var withLargeBody = function (incomingEditor) {
    var editor = incomingEditor;
    var shouldBreakOutOnEnter = editor.shouldBreakOutOnEnter;
    editor.shouldBreakOutOnEnter = function (element) {
        return element.type === "large-body" ? true : shouldBreakOutOnEnter(element);
    };
    return editor;
};
exports.default = withLargeBody;
