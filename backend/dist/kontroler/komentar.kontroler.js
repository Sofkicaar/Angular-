"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KomentarKontroler = void 0;
const komentar_1 = __importDefault(require("../model/komentar"));
class KomentarKontroler {
    constructor() {
        this.dodajKomentar = (req, res) => {
            let Komentar = new komentar_1.default({
                idk: req.body.idk,
                ostavio: req.body.ostavio,
                ocena: req.body.ocena,
                kom: req.body.kom,
                datum: req.body.datum
            });
            Komentar.save((err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "poruka": "ok" });
            });
        };
        this.dohvati = (req, res) => {
            let idk = req.body.idk;
            komentar_1.default.find({ 'idk': idk }, (err, kom) => {
                kom.sort((a, b) => (a.datum >= b.datum ? -1 : 1));
                if (err)
                    console.log(err);
                else
                    res.json(kom);
            });
        };
        this.postoji = (req, res) => {
            let idk = req.body.idk;
            let kor = req.body.ostavio;
            console.log(idk);
            console.log(kor);
            komentar_1.default.findOne({ 'idk': idk, 'ostavio': kor }, (err, kom) => {
                if (err)
                    console.log(err);
                else
                    res.json(kom);
            });
        };
    }
}
exports.KomentarKontroler = KomentarKontroler;
//# sourceMappingURL=komentar.kontroler.js.map