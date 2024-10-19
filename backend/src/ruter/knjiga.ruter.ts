import express from "express";
import { KnjigaKontroler } from "../kontroler/knjiga.kontroler";
import KorisnikRuter from "./korisnik.ruter";

const KnjigaRuter=express.Router();

KnjigaRuter.route('/dohvatiKnjige').get(
    (req, res)=>new KnjigaKontroler().dohvatiKnjige(req, res)
)

KnjigaRuter.route('/pretraziKnjiguNaziv').get(
    (req, res)=>new KnjigaKontroler().pretraziKnjiguNaziv(req, res)
)
KnjigaRuter.route('/dohvatiKnjigu').post(
    (req, res)=>new KnjigaKontroler().dohvatiKnjigu(req, res)
)
KnjigaRuter.route('/dodajKnjigu').post(
    (req, res)=>new KnjigaKontroler().dodajKnjigu(req, res)
)
KnjigaRuter.route('/azuriraj').post(
    (req, res)=>new KnjigaKontroler().azuriraj(req, res)
)

KnjigaRuter.route('/obrisiKnjigu').post(
    (req, res)=>new KnjigaKontroler().obrisiKnjigu(req, res)
)
KnjigaRuter.route('/azurirajId').post(
    (req, res)=>new KnjigaKontroler().azurirajId(req, res)
)
KnjigaRuter.route('/azurirajUiBr').post(
    (req, res)=>new KnjigaKontroler().azurirajUiBr(req, res)
)
KnjigaRuter.route('/pretraziIzdavac').get(
    (req, res)=>new KnjigaKontroler().pretraziIzdavac(req, res)
)
KnjigaRuter.route('postaviProsecnu').post(
    (req, res)=>new KnjigaKontroler().postaviProsecnu(req, res)
)

export default KnjigaRuter;