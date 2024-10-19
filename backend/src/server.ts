import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import KorisnikRuter from './ruter/korisnik.ruter';
import KnjigaRuter from './ruter/knjiga.ruter';
import ZaduzeneRuter from './ruter/zaduzene.ruter';
import KomentarRuter from './ruter/komentar.ruter';
import RegistracijaRuter from './ruter/registracija.ruter';
import ZahteviRuter from './ruter/zahtev.ruter';

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/projekat')
const connection=mongoose.connection
connection.once("open", ()=>{
    console.log('db connected')
})

const router=express.Router();
router.use('/korisnik', KorisnikRuter)
router.use('/knjiga', KnjigaRuter)
router.use('/zaduzene', ZaduzeneRuter)
router.use('/komentar', KomentarRuter)
router.use('/registracija', RegistracijaRuter)
router.use('/zahtevi', ZahteviRuter)
app.use('/', router)
app.listen(4000, () => console.log(`Express server running on port 4000`));