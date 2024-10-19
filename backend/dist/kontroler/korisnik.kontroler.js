"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikKontroler = void 0;
const korisnik_1 = __importDefault(require("../model/korisnik"));
const zaduzene_1 = __importDefault(require("../model/zaduzene"));
class KorisnikKontroler {
    constructor() {
        this.login = (req, res) => {
            let korisnicko_ime = req.body.korisnicko_ime;
            let lozinka = req.body.lozinka;
            korisnik_1.default.findOne({ 'korisnicko_ime': korisnicko_ime, 'lozinka': lozinka }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else {
                    res.json(korisnik);
                }
            });
        };
        this.registracija = (req, res) => {
            let Korisnik = new korisnik_1.default({
                ime: req.body.ime,
                prezime: req.body.prezime,
                korisnicko_ime: req.body.korisnicko_ime,
                kontakt: req.body.kontakt,
                adresa: req.body.adresa,
                imejl: req.body.imejl,
                lozinka: req.body.lozinka,
                blokiran: req.body.bokiran,
                tip: req.body.tip,
                img: req.body.img
            });
            // console.log("registracija");
            Korisnik.save((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
        this.dohvatiMejl = (req, res) => {
            let imejl = req.body.imejl;
            korisnik_1.default.findOne({ 'imejl': imejl }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.dohvatiKorisnickoIme = (req, res) => {
            let korisnicko_ime = req.body.korisnicko_ime;
            korisnik_1.default.findOne({ 'korisnicko_ime': korisnicko_ime }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.dohvatiKorisnika = (req, res) => {
            let imeForm = req.body.ime;
            let prezimeForm = req.body.prezime;
            let imejlForm = req.body.imejl;
            let kontaktForm = req.body.kontakt;
            let adresaForm = req.body.adresa;
            korisnik_1.default.find({ 'ime': imeForm, 'prezime': prezimeForm, 'imejl': imejlForm, 'kontakt': kontaktForm, 'adresa': adresaForm }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.dohvatiZaduzene = (req, res) => {
            let korIme = req.body.korisnicko_ime;
            zaduzene_1.default.find({ 'zaduzio': { $regex: korIme } }, (err, knjiga) => {
                if (err)
                    console.log(err);
                else
                    res.json(knjiga);
            });
        };
        this.vrati = (req, res) => {
            let idk = req.body.idk;
            let datumVrac = req.body.datumVrac;
            zaduzene_1.default.updateOne({ 'idk': idk }, { $set: { 'datumVrac': datumVrac } }, (err, knjiga) => {
                if (err)
                    console.log(err);
                res.json({ "poruka": "ok" });
            });
        };
        this.blokiraj = (req, res) => {
            let korIme = req.body.korisnicko_ime;
            let blok = req.body.blokiran;
            korisnik_1.default.updateOne({ 'korisnicko_ime': korIme }, { $set: { 'blokiran': blok } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
        this.dohvatiDane = (req, res) => {
            let korIme = req.body.korisnicko_ime;
            zaduzene_1.default.find({ 'zaduzio': korIme }, (err, knjiga) => {
                if (err)
                    console.log(err);
                else
                    res.json(knjiga);
            });
        };
        this.dohvatiDatum = (req, res) => {
            let korIme = req.body.korisnicko_ime;
            zaduzene_1.default.find({ 'zaduzio': korIme }, (err, knjiga) => {
                if (err)
                    console.log(err);
                else
                    res.json(knjiga);
            });
        };
        this.obrisiKorisnika = (req, res) => {
            let korIme = req.body.korisnicko_ime;
            korisnik_1.default.deleteOne({ 'korisnicko_ime': korIme }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
        this.dohvatiSveKor = (req, res) => {
            korisnik_1.default.find({}, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.azuriraj = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let kontakt = req.body.kontakt;
            let adresa = req.body.adresa;
            let tip = req.body.tip;
            let korIme = req.body.korisnicko_ime;
            let slika = req.body.img;
            korisnik_1.default.updateOne({ 'korisnicko_ime': korIme }, {
                $set: {
                    'ime': ime,
                    'prezime': prezime,
                    'adresa': adresa,
                    'kontakt': kontakt,
                    'tip': tip,
                    'korisnicko_ime': korIme,
                    'img': slika
                }
            }, (err, resp) => {
                if (err)
                    console.log("ovde ne valja!");
                else {
                    res.json({ "poruka": "ok" });
                }
            });
        };
        this.azurirajSve = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let lozinka = req.body.lozinka;
            let kontakt = req.body.kontakt;
            let adresa = req.body.adresa;
            let tip = req.body.tip;
            let imejl = req.body.imejl;
            let korIme = req.body.korisnicko_ime;
            let slika = req.body.img;
            korisnik_1.default.updateOne({ 'korisnicko_ime': korIme }, {
                $set: {
                    'ime': ime,
                    'prezime': prezime,
                    'lozinka': lozinka,
                    'adresa': adresa,
                    'kontakt': kontakt,
                    'tip': tip,
                    'imejl': imejl,
                    'korisnicko_ime': korIme,
                    'img': slika
                }
            }, (err, resp) => {
                if (err)
                    console.log("ovde ne valja!");
                else {
                    res.json({ "poruka": "ok" });
                }
            });
        };
        this.promeniLozinku = (req, res) => {
            let lozinka = req.body.loz1;
            let noval = req.body.loz2;
            korisnik_1.default.updateOne({ 'lozinka': lozinka }, { $set: { 'lozinka': noval } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'updated' });
            });
        };
        this.promeniPriv = (req, res) => {
            let korIme = req.body.korisnicko_ime;
            let tip = req.body.tip;
            korisnik_1.default.updateOne({ 'korisnicko_ime': korIme }, { $set: { 'tip': tip } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'poruka': 'updated' });
            });
        };
    }
}
exports.KorisnikKontroler = KorisnikKontroler;
//# sourceMappingURL=korisnik.kontroler.js.map