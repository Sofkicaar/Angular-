import express from 'express'
import { KorisnikKontroler } from '../kontroler/korisnik.kontroler';

const KorisnikRuter=express.Router();

KorisnikRuter.route('/login').post(
    (req, res)=>new KorisnikKontroler().login(req,res)
)
KorisnikRuter.route('/registracija').post(
    (req, res)=>new KorisnikKontroler().registracija(req, res)
)
KorisnikRuter.route('/dohvatiKorisnickoIme').post(
(req, res)=>new KorisnikKontroler().dohvatiKorisnickoIme(req,res)
)

KorisnikRuter.route('/dohvatiMejl').post(
    (req, res)=>new KorisnikKontroler().dohvatiMejl(req, res)
)
KorisnikRuter.route('/dohvatiKorisnika').post(
    (req, res)=>new KorisnikKontroler().dohvatiKorisnika(req, res)
)
KorisnikRuter.route('/dohvatiZaduzene').post(
    (req, res)=>new KorisnikKontroler().dohvatiZaduzene(req, res)
)
KorisnikRuter.route('/dohvatiDane').post(
    (req, res)=>new KorisnikKontroler().dohvatiDane(req, res)
)
KorisnikRuter.route('/dohvatiDatum').post(
    (req, res)=>new KorisnikKontroler().dohvatiDatum(req, res)
)
KorisnikRuter.route('/vrati').post(
    (req, res)=>new KorisnikKontroler().vrati(req, res)
)
KorisnikRuter.route('/obrisiKorisnika').post(
    (req, res)=>new KorisnikKontroler().obrisiKorisnika(req, res)
)
KorisnikRuter.route('/dohvatiSveKor').get(
    (req, res)=>new KorisnikKontroler().dohvatiSveKor(req, res)
)
KorisnikRuter.route('/azuriraj').post(
    (req, res)=>new KorisnikKontroler().azuriraj(req, res)
)
KorisnikRuter.route('/azurirajSve').post(
    (req, res)=>new KorisnikKontroler().azurirajSve(req, res)
)
KorisnikRuter.route('/promeniLozinku').post(
    (req, res)=>new KorisnikKontroler().promeniLozinku(req, res)
)
KorisnikRuter.route('/promeniPriv').post(
    (req, res)=>new KorisnikKontroler().promeniPriv(req, res)
)
KorisnikRuter.route('/blokiraj').post(
    (req, res)=>new KorisnikKontroler().blokiraj(req, res)
)

export default KorisnikRuter;