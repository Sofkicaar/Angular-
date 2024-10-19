"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistracijaKontroler = void 0;
const registracija_1 = __importDefault(require("../model/registracija"));
class RegistracijaKontroler {
    constructor() {
        this.zahtev = (req, res) => {
            let Registracija = new registracija_1.default({
                ime: req.body.ime,
                prezime: req.body.prezime,
                korisnicko_ime: req.body.korisnicko_ime,
                kontakt: req.body.kontakt,
                adresa: req.body.adresa,
                imejl: req.body.imejl,
                lozinka: req.body.lozinka,
                blokiran: req.body.blokiran,
                tip: req.body.tip,
                img: req.body.img,
                prihvati: req.body.prihvati
            });
            // console.log("registracija");
            Registracija.save((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
        this.dohvatiKorisnickoIme = (req, res) => {
            let korisnicko_ime = req.body.korisnicko_ime;
            registracija_1.default.findOne({ 'korisnicko_ime': korisnicko_ime }, (err, reg) => {
                if (err)
                    console.log(err);
                else
                    res.json(reg);
            });
        };
        this.postavi = (req, res) => {
            let prihvati = req.body.prihvati;
            let korIme = req.body.korisnicko_ime;
            registracija_1.default.updateOne({ 'korisnicko_ime': korIme }, { $set: { 'prihvati': prihvati } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
        this.dohvatiMejl = (req, res) => {
            let imejl = req.body.imejl;
            registracija_1.default.findOne({ 'imejl': imejl }, (err, reg) => {
                if (err)
                    console.log(err);
                else
                    res.json(reg);
            });
        };
        this.dohvatiZahteve = (req, res) => {
            registracija_1.default.find({}, (err, reg) => {
                if (err)
                    console.log(err);
                else
                    res.json(reg);
            });
        };
        this.odbij = (req, res) => {
            let korIme = req.body.korisnicko_ime;
            registracija_1.default.deleteOne({ 'korisnicko_ime': korIme }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
    }
}
exports.RegistracijaKontroler = RegistracijaKontroler;
//# sourceMappingURL=registracija.kontroler.js.map