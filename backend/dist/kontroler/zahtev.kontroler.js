"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZahtevKontroler = void 0;
const zahtev_1 = __importDefault(require("../model/zahtev"));
class ZahtevKontroler {
    constructor() {
        this.dodajKnj = (req, res) => {
            let Zahtev = new zahtev_1.default({
                naziv: req.body.naziv,
                pisac: req.body.pisac,
                uzeta: req.body.uzeta,
                zanr: req.body.zanr,
                godinaIzdavanja: req.body.godinaIzdavanja,
                izdavac: req.body.izdavac,
                jezik: req.body.jezik,
                idKnj: req.body.idKnj,
                brojKnjiga: req.body.brojKnjiga,
                ocena: req.body.ocena,
                img: req.body.img,
                prihvati: req.body.prihvati
            });
            Zahtev.save((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
        this.odbij = (req, res) => {
            let idk = req.body.idKnj;
            zahtev_1.default.deleteOne({ 'idKnj': idk }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
        this.dohvatiSve = (req, res) => {
            zahtev_1.default.find({}, (err, zah) => {
                if (err)
                    console.log(err);
                else
                    res.json(zah);
            });
        };
        this.postavi = (req, res) => {
            let idk = req.body.idKnj;
            let postavi = req.body.prihvati;
            zahtev_1.default.updateOne({ 'idKnj': idk }, { $set: { 'prihvati': postavi } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
        this.dohvId = (req, res) => {
            let idk = req.body.idKnj;
            zahtev_1.default.findOne({ 'idKnj': idk }, (err, zah) => {
                if (err)
                    console.log(err);
                else
                    res.json(zah);
            });
        };
    }
}
exports.ZahtevKontroler = ZahtevKontroler;
//# sourceMappingURL=zahtev.kontroler.js.map