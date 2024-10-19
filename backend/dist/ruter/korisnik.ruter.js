"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const korisnik_kontroler_1 = require("../kontroler/korisnik.kontroler");
const KorisnikRuter = express_1.default.Router();
KorisnikRuter.route('/login').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().login(req, res));
KorisnikRuter.route('/registracija').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().registracija(req, res));
KorisnikRuter.route('/dohvatiKorisnickoIme').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().dohvatiKorisnickoIme(req, res));
KorisnikRuter.route('/dohvatiMejl').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().dohvatiMejl(req, res));
KorisnikRuter.route('/dohvatiKorisnika').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().dohvatiKorisnika(req, res));
KorisnikRuter.route('/dohvatiZaduzene').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().dohvatiZaduzene(req, res));
KorisnikRuter.route('/dohvatiDane').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().dohvatiDane(req, res));
KorisnikRuter.route('/dohvatiDatum').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().dohvatiDatum(req, res));
KorisnikRuter.route('/vrati').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().vrati(req, res));
KorisnikRuter.route('/obrisiKorisnika').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().obrisiKorisnika(req, res));
KorisnikRuter.route('/dohvatiSveKor').get((req, res) => new korisnik_kontroler_1.KorisnikKontroler().dohvatiSveKor(req, res));
KorisnikRuter.route('/azuriraj').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().azuriraj(req, res));
KorisnikRuter.route('/azurirajSve').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().azurirajSve(req, res));
KorisnikRuter.route('/promeniLozinku').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().promeniLozinku(req, res));
KorisnikRuter.route('/promeniPriv').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().promeniPriv(req, res));
KorisnikRuter.route('/blokiraj').post((req, res) => new korisnik_kontroler_1.KorisnikKontroler().blokiraj(req, res));
exports.default = KorisnikRuter;
//# sourceMappingURL=korisnik.ruter.js.map