"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
// Import MongoDB client
var mongodb_1 = require("mongodb");
// MongoDB connection URI
var uri = "mongodb+srv://Chris:Chris6211@db.4zy7r.mongodb.net/db?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true&appName=db";
// Create a new MongoClient
var client = new mongodb_1.MongoClient(uri);
function updateUserProfiles() {
    return __awaiter(this, void 0, void 0, function () {
        var database, userProfiles, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 6]);
                    // Connect to the MongoDB client
                    return [4 /*yield*/, client.connect()];
                case 1:
                    // Connect to the MongoDB client
                    _a.sent();
                    console.log("Connected to MongoDB");
                    database = client.db("db");
                    userProfiles = database.collection("user_profiles");
                    return [4 /*yield*/, userProfiles.updateMany({}, {
                            $set: {
                                phished: false,
                                victims: 0,
                                loot: 0,
                                referral: "",
                                updated: false,
                            },
                        })];
                case 2:
                    result = _a.sent();
                    console.log("Matched ".concat(result.matchedCount, " documents and updated ").concat(result.modifiedCount, " documents."));
                    return [3 /*break*/, 6];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error updating documents:", error_1);
                    return [3 /*break*/, 6];
                case 4: 
                // Close the database connection
                return [4 /*yield*/, client.close()];
                case 5:
                    // Close the database connection
                    _a.sent();
                    console.log("Connection closed.");
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// Run the update function
updateUserProfiles();
