"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knjiga_kontroler_1 = require("../kontroler/knjiga.kontroler");
const KnjigaRuter = express_1.default.Router();
KnjigaRuter.route('/dohvatiKnjige').get((req, res) => new knjiga_kontroler_1.KnjigaKontroler().dohvatiKnjige(req, res));
KnjigaRuter.route('/pretraziKnjiguNaziv').get((req, res) => new knjiga_kontroler_1.KnjigaKontroler().pretraziKnjiguNaziv(req, res));
KnjigaRuter.route('/dohvatiKnjigu').post((req, res) => new knjiga_kontroler_1.KnjigaKontroler().dohvatiKnjigu(req, res));
KnjigaRuter.route('/dodajKnjigu').post((req, res) => new knjiga_kontroler_1.KnjigaKontroler().dodajKnjigu(req, res));
KnjigaRuter.route('/azuriraj').post((req, res) => new knjiga_kontroler_1.KnjigaKontroler().azuriraj(req, res));
KnjigaRuter.route('/obrisiKnjigu').post((req, res) => new knjiga_kontroler_1.KnjigaKontroler().obrisiKnjigu(req, res));
KnjigaRuter.route('/azurirajId').post((req, res) => new knjiga_kontroler_1.KnjigaKontroler().azurirajId(req, res));
KnjigaRuter.route('/azurirajUiBr').post((req, res) => new knjiga_kontroler_1.KnjigaKontroler().azurirajUiBr(req, res));
KnjigaRuter.route('/pretraziIzdavac').get((req, res) => new knjiga_kontroler_1.KnjigaKontroler().pretraziIzdavac(req, res));
KnjigaRuter.route('postaviProsecnu').post((req, res) => new knjiga_kontroler_1.KnjigaKontroler().postaviProsecnu(req, res));
exports.default = KnjigaRuter;
//# sourceMappingURL=knjiga.ruter.js.map