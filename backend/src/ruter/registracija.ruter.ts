import express from 'express'
import { RegistracijaKontroler } from '../kontroler/registracija.kontroler';


const RegistracijaRuter=express.Router();

RegistracijaRuter.route('/zahtev').post(
    (req, res)=>new RegistracijaKontroler().zahtev(req, res)
)
RegistracijaRuter.route('/dohvatiZahteve').get(
    (req, res)=>new RegistracijaKontroler().dohvatiZahteve(req, res)
)
RegistracijaRuter.route('/odbij').post(
    (req, res)=>new RegistracijaKontroler().odbij(req, res)
)
RegistracijaRuter.route('/dohvatiMejl').post(
    (req, res)=>new RegistracijaKontroler().dohvatiMejl(req, res)
)
RegistracijaRuter.route('/dohvatiKorisnickoIme').post(
    (req, res)=>new RegistracijaKontroler().dohvatiKorisnickoIme(req, res)
)
RegistracijaRuter.route('/postavi').post(
    (req, res)=>new RegistracijaKontroler().postavi(req, res)
)
export default RegistracijaRuter;