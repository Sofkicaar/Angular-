"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnjigaKontroler = void 0;
const knjiga_1 = __importDefault(require("../model/knjiga"));
class KnjigaKontroler {
    constructor() {
        this.dohvatiKnjige = (req, res) => {
            knjiga_1.default.find({}, (err, knjiga) => {
                knjiga.sort((a, b) => (a.uzeta >= b.uzeta ? -1 : 1));
                if (err)
                    console.log(err);
                else
                    res.json(knjiga);
            });
        };
        this.dohvatiKnjigu = (req, res) => {
            let idKnjige = req.body.idk;
            knjiga_1.default.findOne({ 'idKnj': idKnjige }, (err, knjiga) => {
                if (err)
                    console.log(err);
                else
                    res.json(knjiga);
            });
        };
        this.pretraziKnjiguNaziv = (req, res) => {
            let searchParam1 = req.query.param;
            knjiga_1.default.find({ $or: [{ 'naziv': { $regex: searchParam1, $options: "$i" } }, { 'pisac': { $regex: searchParam1, $options: "$i" } }] }, (err, knjiga) => {
                if (err)
                    console.log(err);
                else
                    res.json(knjiga);
            });
        };
        this.pretraziIzdavac = (req, res) => {
            let searchParam = req.query.param;
            knjiga_1.default.find({ 'izdavac': { $regex: searchParam, $options: "$i" } }, (err, knjiga) => {
                if (err)
                    console.log(err);
                else
                    res.json(knjiga);
            });
        };
        this.dodajKnjigu = (req, res) => {
            console.log(req.body.img);
            const knjiga = new knjiga_1.default({
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
                img: req.body.img
            });
            console.log(knjiga);
            console.log(knjiga.img);
            knjiga.save((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
        this.azuriraj = (req, res) => {
            let idKnj = req.body.idKnj;
            let novNaziv = req.body.naziv;
            let noviPisac = req.body.pisac;
            let noviIzdavac = req.body.izdavac;
            let novaGodina = req.body.godinaIzdavanja;
            let noviZanr = req.body.zanr;
            let noviJezik = req.body.jezik;
            let noviBroj = req.body.brojKnjiga;
            let novaSlika = req.body.img;
            console.log(novNaziv);
            console.log(novaGodina);
            console.log(idKnj);
            knjiga_1.default.updateOne({ 'idKnj': idKnj }, {
                $set: {
                    'naziv': novNaziv,
                    'pisac': noviPisac,
                    'godinaIzdavanja': novaGodina,
                    'zanr': noviZanr,
                    'jezik': noviJezik,
                    'izdavac': noviIzdavac,
                    'brojKnjiga': noviBroj,
                    'img': novaSlika
                }
            }, (err, resp) => {
                if (err)
                    console.log("ovde ne valja!");
                else {
                    res.json({ "poruka": "ok" });
                }
            });
        };
        this.obrisiKnjigu = (req, res) => {
            let idk = req.body.idKnj;
            knjiga_1.default.deleteOne({ 'idKnj': idk }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
            // KnjigaModel.updateMany({'idKnj>idk':idk}, {$set: {'idKnj': --idk }})
        };
        this.azurirajId = (req, res) => {
            let idk = req.body.idKnj;
            let naziv = req.body.naziv;
            console.log(idk);
            console.log(naziv);
            knjiga_1.default.updateOne({ 'naziv': naziv }, { $set: { 'idKnj': idk } }, (err, resp) => {
                if (err)
                    console.log("ovde ne valja!");
                else {
                    res.json({ "poruka": "ok" });
                }
            });
        };
        this.azurirajUiBr = (req, res) => {
            let idk = req.body.idKnj;
            let broj = req.body.brojKnjiga;
            let uzeta = req.body.uzeta;
            knjiga_1.default.updateOne({ 'idKnj': idk }, { $set: { 'brojKnjiga': broj, 'uzeta': uzeta } }, (err, resp) => {
                if (err)
                    console.log("ovde ne valja!");
                else {
                    res.json({ "poruka": "ok" });
                }
            });
        };
        this.postaviProsecnu = (req, res) => {
            let idk = req.body.idKnj;
            let oc = req.body.ocena;
            knjiga_1.default.updateOne({ 'idKnj': idk }, { $set: { 'ocena': oc } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
    }
}
exports.KnjigaKontroler = KnjigaKontroler;
//# sourceMappingURL=knjiga.kontroler.js.map