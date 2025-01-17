"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Komentar = new Schema({
    idk: {
        type: Number
    },
    ostavio: {
        type: String
    },
    ocena: {
        type: Number
    },
    kom: {
        type: String
    },
    datum: {
        type: String
    }
});
exports.default = mongoose_1.default.model('KomentarModel', Komentar, 'komentar');
//# sourceMappingURL=komentar.js.map