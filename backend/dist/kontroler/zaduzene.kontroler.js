"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZaduzeneKontroler = void 0;
const zaduzene_1 = __importDefault(require("../model/zaduzene"));
class ZaduzeneKontroler {
    constructor() {
        this.dohvatiKnjigu = (req, res) => {
            let idKnjige = req.body.idk;
            zaduzene_1.default.findOne({ 'idk': idKnjige }, (err, knjiga) => {
                if (err)
                    console.log(err);
                else
                    res.json(knjiga);
            });
        };
        this.dohvatiKnjNaziv = (req, res) => {
            let naziv = req.body.naziv;
            zaduzene_1.default.find({ 'naziv': naziv }, (err, knjiga) => {
                if (err)
                    console.log(err);
                else
                    console.log(knjiga);
            });
        };
        this.dohvatiSveZaduzene = (req, res) => {
            zaduzene_1.default.find({}, (err, knjiga) => {
                if (err)
                    console.log(err);
                else
                    res.json(knjiga);
            });
        };
        this.zaduziKnjigu = (req, res) => {
            let Zaduzena = new zaduzene_1.default({
                idk: req.body.idk,
                naziv: req.body.naziv,
                autor: req.body.autor,
                zaduzio: req.body.zaduzio,
                datumZad: req.body.datumZad,
                datumVrac: req.body.datumVrac,
                dani: req.body.dani,
                ocena: req.body.ocena,
                komentar: req.body.komentar,
                produzio: req.body.produzio,
                slika: req.body.slika
            });
            Zaduzena.save((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
        this.produzi = (req, res) => {
            let dani = req.body.dani;
            let idk = req.body.idk;
            let produzio = req.body.produzio;
            zaduzene_1.default.updateOne({ 'idk': idk }, { $set: { 'dani': dani, 'produzio': produzio } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
    }
}
exports.ZaduzeneKontroler = ZaduzeneKontroler;
//# sourceMappingURL=zaduzene.kontroler.js.map