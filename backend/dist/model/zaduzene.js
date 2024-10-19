"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Zaduzene = new Schema({
    naziv: {
        type: String
    },
    autor: {
        type: String
    },
    zaduzio: {
        type: String
    },
    datumZad: {
        type: String
    },
    datumVrac: {
        type: String
    },
    dani: {
        type: Number
    },
    idk: {
        type: Number
    },
    ocena: {
        type: Number
    },
    komentar: {
        type: String
    },
    slika: {
        type: String
    },
    produzio: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('ZaduzeneModel', Zaduzene, 'zaduzene');
//# sourceMappingURL=zaduzene.js.map