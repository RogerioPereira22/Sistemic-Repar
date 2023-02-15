"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hero = void 0;
var linkGroup_1 = __importDefault(require("./linkGroup"));
var label_1 = __importDefault(require("./richText/label"));
var largeBody_1 = __importDefault(require("./richText/largeBody"));
exports.hero = {
    name: "hero",
    label: false,
    type: "group",
    fields: [
        {
            type: "select",
            name: "type",
            label: "Type",
            required: true,
            defaultValue: "default",
            options: [
                {
                    label: "Default",
                    value: "default",
                },
                {
                    label: "Content and Media",
                    value: "contentMedia",
                },
                {
                    label: "Form",
                    value: "form",
                },
                {
                    label: "Home",
                    value: "home",
                },
            ],
        },
        {
            name: "richText",
            type: "richText",
            admin: {
                elements: ["h1", largeBody_1.default, "ul", label_1.default],
                leaves: ["underline",],
            },
        },
        {
            name: "sidebarContent",
            type: "richText",
            admin: {
                elements: ["link"],
                leaves: ["underline"],
                condition: function (_, _a) {
                    var _b = _a === void 0 ? {} : _a, type = _b.type;
                    return type === "default";
                },
            },
        },
        (0, linkGroup_1.default)({
            overrides: {
                admin: {
                    condition: function (_, _a) {
                        var _b = _a === void 0 ? {} : _a, type = _b.type;
                        return ["contentMedia", "default"].includes(type);
                    },
                },
            },
        }),
        (0, linkGroup_1.default)({
            appearances: false,
            overrides: {
                name: "actions",
                label: "Sidebar Actions",
                maxRows: 3,
                admin: {
                    condition: function (_, _a) {
                        var type = _a.type;
                        return type === "home";
                    },
                },
            },
        }),
        (0, linkGroup_1.default)({
            appearances: ["primary", "secondary"],
            overrides: {
                name: "buttons",
                label: "Buttons",
                maxRows: 2,
                admin: {
                    condition: function (_, _a) {
                        var type = _a.type;
                        return type === "home";
                    },
                },
            },
        }),
        {
            name: "media",
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {
                condition: function (_, _a) {
                    var _b = _a === void 0 ? {} : _a, type = _b.type;
                    return ["contentMedia", "home"].includes(type);
                },
            },
        },
        {
            name: "adjectives",
            type: "array",
            minRows: 3,
            maxRows: 6,
            fields: [
                {
                    name: "adjective",
                    type: "text",
                    required: true,
                },
            ],
            admin: {
                condition: function (_, _a) {
                    var type = _a.type;
                    return type === "home";
                },
            },
        },
        {
            name: "form",
            type: "relationship",
            relationTo: "forms",
            admin: {
                condition: function (_, _a) {
                    var type = _a.type;
                    return type === "form";
                },
            },
        },
    ],
};
