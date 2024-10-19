"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registracija_kontroler_1 = require("../kontroler/registracija.kontroler");
const RegistracijaRuter = express_1.default.Router();
RegistracijaRuter.route('/zahtev').post((req, res) => new registracija_kontroler_1.RegistracijaKontroler().zahtev(req, res));
RegistracijaRuter.route('/dohvatiZahteve').get((req, res) => new registracija_kontroler_1.RegistracijaKontroler().dohvatiZahteve(req, res));
RegistracijaRuter.route('/odbij').post((req, res) => new registracija_kontroler_1.RegistracijaKontroler().odbij(req, res));
RegistracijaRuter.route('/dohvatiMejl').post((req, res) => new registracija_kontroler_1.RegistracijaKontroler().dohvatiMejl(req, res));
RegistracijaRuter.route('/dohvatiKorisnickoIme').post((req, res) => new registracija_kontroler_1.RegistracijaKontroler().dohvatiKorisnickoIme(req, res));
RegistracijaRuter.route('/postavi').post((req, res) => new registracija_kontroler_1.RegistracijaKontroler().postavi(req, res));
exports.default = RegistracijaRuter;
//# sourceMappingURL=registracija.ruter.js.map