import express from 'express'

import { ZaduzeneKontroler } from '../kontroler/zaduzene.kontroler';

const ZaduzeneRuter=express.Router()

ZaduzeneRuter.route('/dohvatiKnjigu').post(
    (req, res)=>new ZaduzeneKontroler().dohvatiKnjigu(req, res)
)
ZaduzeneRuter.route('/zaduziKnjigu').post(
    (req, res)=>new ZaduzeneKontroler().zaduziKnjigu(req, res)
)
ZaduzeneRuter.route('/dohvatiSveZaduzene').get(
    (req, res)=>new ZaduzeneKontroler().dohvatiSveZaduzene(req, res)
)
ZaduzeneRuter.route('/dohvatiKnjNaziv').post(
    (req, res)=>new ZaduzeneKontroler().dohvatiKnjNaziv(req, res)
)
ZaduzeneRuter.route('/produzi').post(
    (req, res)=>new ZaduzeneKontroler().produzi(req, res)
)

export default ZaduzeneRuter;