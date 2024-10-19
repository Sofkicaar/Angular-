"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const komentar_kontroler_1 = require("../kontroler/komentar.kontroler");
const KomentarRuter = express_1.default.Router();
KomentarRuter.route('/dodajKomentar').post((req, res) => new komentar_kontroler_1.KomentarKontroler().dodajKomentar(req, res));
KomentarRuter.route('/dohvati').post((req, res) => new komentar_kontroler_1.KomentarKontroler().dohvati(req, res));
KomentarRuter.route('/postoji').post((req, res) => new komentar_kontroler_1.KomentarKontroler().postoji(req, res));
exports.default = KomentarRuter;
//# sourceMappingURL=komentar.ruter.js.map