import express from 'express'
import { ZahtevKontroler } from '../kontroler/zahtev.kontroler';


const ZahteviRuter=express.Router();


ZahteviRuter.route('/dodajKnj').post(
    (req, res)=>new ZahtevKontroler().dodajKnj(req, res)
)
ZahteviRuter.route('/odbij').post(
    (req, res)=>new ZahtevKontroler().odbij(req, res)
)
ZahteviRuter.route('/dohvatiSve').get(
    (req, res)=>new ZahtevKontroler().dohvatiSve(req, res)
)
ZahteviRuter.route('/postavi').post(
    (req, res)=>new ZahtevKontroler().postavi(req, res)
)
ZahteviRuter.route('/dohvId').post(
    (req, res)=>new ZahtevKontroler().dohvId(req, res)
)


export default ZahteviRuter;