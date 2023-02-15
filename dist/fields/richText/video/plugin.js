"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var withVideo = function (incomingEditor) {
    var editor = incomingEditor;
    var isVoid = editor.isVoid;
    editor.isVoid = function (element) { return (element.type === 'video' ? true : isVoid(element)); };
    return editor;
};
exports.default = withVideo;
