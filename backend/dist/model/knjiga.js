"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Knjiga = new Schema({
    idKnj: {
        type: Number
    },
    naziv: {
        type: String
    },
    pisac: {
        type: String
    },
    godinaIzdavanja: {
        type: Number
    },
    zanr: {
        type: Array
    },
    uzeta: {
        type: Number
    },
    jezik: {
        type: String
    },
    ocena: {
        type: Number
    },
    izdavac: {
        type: String
    },
    brojKnjiga: {
        type: Number
    },
    zaduzio: {
        type: String
    },
    img: {
        type: String
    }
});
exports.default = mongoose_1.default.model('KnjigaModel', Knjiga, 'knjiga');
//# sourceMappingURL=knjiga.js.map