"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Registracija = new Schema({
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    korisnicko_ime: {
        type: String
    },
    lozinka: {
        type: String
    },
    tip: {
        type: String
    },
    imejl: {
        type: String
    },
    kontakt: {
        type: String
    },
    adresa: {
        type: String
    },
    img: {
        type: String
    },
    prihvati: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('RegistracijaModel', Registracija, 'registracija');
//# sourceMappingURL=registracija.js.map