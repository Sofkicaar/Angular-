"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zaduzene_kontroler_1 = require("../kontroler/zaduzene.kontroler");
const ZaduzeneRuter = express_1.default.Router();
ZaduzeneRuter.route('/dohvatiKnjigu').post((req, res) => new zaduzene_kontroler_1.ZaduzeneKontroler().dohvatiKnjigu(req, res));
ZaduzeneRuter.route('/zaduziKnjigu').post((req, res) => new zaduzene_kontroler_1.ZaduzeneKontroler().zaduziKnjigu(req, res));
ZaduzeneRuter.route('/dohvatiSveZaduzene').get((req, res) => new zaduzene_kontroler_1.ZaduzeneKontroler().dohvatiSveZaduzene(req, res));
ZaduzeneRuter.route('/dohvatiKnjNaziv').post((req, res) => new zaduzene_kontroler_1.ZaduzeneKontroler().dohvatiKnjNaziv(req, res));
ZaduzeneRuter.route('/produzi').post((req, res) => new zaduzene_kontroler_1.ZaduzeneKontroler().produzi(req, res));
exports.default = ZaduzeneRuter;
//# sourceMappingURL=zaduzene.ruter.js.map