import express, { Router } from 'express'
import { KomentarKontroler } from '../kontroler/komentar.kontroler'


const KomentarRuter=express.Router();

KomentarRuter.route('/dodajKomentar').post(
    (req, res)=>new KomentarKontroler().dodajKomentar(req, res)
)
KomentarRuter.route('/dohvati').post(
    (req, res)=>new KomentarKontroler().dohvati(req, res)
)
KomentarRuter.route('/postoji').post(
    (req, res)=>new KomentarKontroler().postoji(req, res)
)

export default KomentarRuter;