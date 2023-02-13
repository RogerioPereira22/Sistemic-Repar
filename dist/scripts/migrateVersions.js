var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var payload = require("payload");
require("dotenv").config();
var _a = process.env, PAYLOAD_SECRET = _a.PAYLOAD_SECRET, MONGODB_URI = _a.MONGODB_URI;
// This function ensures that there is at least one corresponding version for any document
// within each of your draft-enabled collections.
var ensureAtLeastOneVersion = function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Initialize Payload
            // IMPORTANT: make sure your ENV variables are filled properly here
            // as the below variable names are just for reference.
            return [4 /*yield*/, payload.init({
                    secret: PAYLOAD_SECRET,
                    mongoURL: MONGODB_URI,
                    local: true,
                })];
            case 1:
                // Initialize Payload
                // IMPORTANT: make sure your ENV variables are filled properly here
                // as the below variable names are just for reference.
                _a.sent();
                // For each collection
                return [4 /*yield*/, Promise.all(payload.config.collections.map(function (_a) {
                        var slug = _a.slug, versions = _a.versions;
                        return __awaiter(_this, void 0, void 0, function () {
                            var docs, VersionsModel_1, existingCollectionDocIds_1, versionsWithoutParentDocs;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!(versions === null || versions === void 0 ? void 0 : versions.drafts)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, payload.find({
                                                collection: slug,
                                                limit: 0,
                                                depth: 0,
                                                locale: "all",
                                            })];
                                    case 1:
                                        docs = (_b.sent()).docs;
                                        VersionsModel_1 = payload.versions[slug];
                                        existingCollectionDocIds_1 = [];
                                        return [4 /*yield*/, Promise.all(docs.map(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                                                var versionDocs, e_1;
                                                var _a;
                                                return __generator(this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0:
                                                            existingCollectionDocIds_1.push(doc.id);
                                                            return [4 /*yield*/, VersionsModel_1.find({
                                                                    parent: doc.id,
                                                                    updatedAt: { $gte: doc.updatedAt },
                                                                }, null, { limit: 1 }).lean()];
                                                        case 1:
                                                            versionDocs = _b.sent();
                                                            if (!(versionDocs.length === 0)) return [3 /*break*/, 6];
                                                            _b.label = 2;
                                                        case 2:
                                                            _b.trys.push([2, 4, , 5]);
                                                            return [4 /*yield*/, VersionsModel_1.create({
                                                                    parent: doc.id,
                                                                    version: doc,
                                                                    autosave: Boolean((_a = versions === null || versions === void 0 ? void 0 : versions.drafts) === null || _a === void 0 ? void 0 : _a.autosave),
                                                                    updatedAt: doc.updatedAt,
                                                                    createdAt: doc.createdAt,
                                                                })];
                                                        case 3:
                                                            _b.sent();
                                                            return [3 /*break*/, 5];
                                                        case 4:
                                                            e_1 = _b.sent();
                                                            console.error("Unable to create version corresponding with collection ".concat(slug, " document ID ").concat(doc.id), (e_1 === null || e_1 === void 0 ? void 0 : e_1.errors) || e_1);
                                                            return [3 /*break*/, 5];
                                                        case 5:
                                                            console.log("Created version corresponding with ".concat(slug, " document ID ").concat(doc.id));
                                                            _b.label = 6;
                                                        case 6: return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                    case 2:
                                        _b.sent();
                                        return [4 /*yield*/, VersionsModel_1.deleteMany({
                                                parent: { $nin: existingCollectionDocIds_1 },
                                            })];
                                    case 3:
                                        versionsWithoutParentDocs = _b.sent();
                                        if (versionsWithoutParentDocs.deletedCount > 0) {
                                            console.log("Removing ".concat(versionsWithoutParentDocs.deletedCount, " versions for ").concat(slug, " collection - parent documents no longer exist"));
                                        }
                                        _b.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        });
                    }))];
            case 2:
                // For each collection
                _a.sent();
                console.log("Done!");
                process.exit(0);
                return [2 /*return*/];
        }
    });
}); };
ensureAtLeastOneVersion();
