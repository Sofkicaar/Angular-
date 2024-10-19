import express from 'express';
import RegistracijaModel from '../model/registracija'

export class RegistracijaKontroler{
    zahtev=(req:express.Request, res:express.Response)=>{
        let Registracija=new RegistracijaModel({
            ime: req.body.ime,
            prezime:req.body.prezime,
            korisnicko_ime: req.body.korisnicko_ime,
            kontakt: req.body.kontakt,
            adresa:req.body.adresa,
            imejl:req.body.imejl,
            lozinka:req.body.lozinka,
            blokiran:req.body.blokiran,
            tip:req.body.tip,
            img: req.body.img,
            prihvati:req.body.prihvati
        })
       // console.log("registracija");
        Registracija.save((err, resp)=>{
            if(err) console.log(err);
            else res.json({"poruka":"ok"})
        })
    }

    dohvatiKorisnickoIme=(req:express.Request, res:express.Response)=>{
        let korisnicko_ime=req.body.korisnicko_ime;

    RegistracijaModel.findOne({'korisnicko_ime':korisnicko_ime}, (err, reg)=>{
            if(err) console.log(err);
            else res.json(reg)
        })
    }
    postavi=(req:express.Request, res:express.Response)=>{
        let prihvati=req.body.prihvati;
        let korIme=req.body.korisnicko_ime;
        RegistracijaModel.updateOne({'korisnicko_ime':korIme}, {$set:{'prihvati':prihvati}}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({"poruka":"ok"})
        })
    }

    dohvatiMejl=(req:express.Request, res:express.Response)=>{
        let imejl=req.body.imejl;
        
        RegistracijaModel.findOne({'imejl':imejl}, (err, reg)=>{
             if(err) console.log(err);
             else res.json(reg)
        })
    }

    dohvatiZahteve=(req:express.Request, res:express.Response)=>{
        RegistracijaModel.find({}, (err, reg)=>{
            if(err) console.log(err)
            else res.json(reg)
        })
    }

    odbij=(req:express.Request,res:express.Response)=>{
        let korIme=req.body.korisnicko_ime;

        RegistracijaModel.deleteOne({'korisnicko_ime':korIme}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({"poruka":"ok"})
        })
    }
}