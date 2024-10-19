"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zahtev_kontroler_1 = require("../kontroler/zahtev.kontroler");
const ZahteviRuter = express_1.default.Router();
ZahteviRuter.route('/dodajKnj').post((req, res) => new zahtev_kontroler_1.ZahtevKontroler().dodajKnj(req, res));
ZahteviRuter.route('/odbij').post((req, res) => new zahtev_kontroler_1.ZahtevKontroler().odbij(req, res));
ZahteviRuter.route('/dohvatiSve').get((req, res) => new zahtev_kontroler_1.ZahtevKontroler().dohvatiSve(req, res));
ZahteviRuter.route('/postavi').post((req, res) => new zahtev_kontroler_1.ZahtevKontroler().postavi(req, res));
ZahteviRuter.route('/dohvId').post((req, res) => new zahtev_kontroler_1.ZahtevKontroler().dohvId(req, res));
exports.default = ZahteviRuter;
//# sourceMappingURL=zahtev.ruter.js.map