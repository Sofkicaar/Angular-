import  express from 'express';
import zahtev from '../model/zahtev';
import ZahtevModel from '../model/zahtev'





export class ZahtevKontroler{



    dodajKnj=(req:express.Request, res:express.Response)=>{
        let Zahtev=new ZahtevModel({
            naziv: req.body.naziv,
            pisac: req.body.pisac, 
            uzeta: req.body.uzeta,
            zanr: req.body.zanr, 
            godinaIzdavanja: req.body.godinaIzdavanja, 
            izdavac: req.body.izdavac,
            jezik: req.body.jezik, 
            idKnj: req.body.idKnj,
            brojKnjiga: req.body.brojKnjiga,
            ocena:req.body.ocena,
            img: req.body.img,
            prihvati:req.body.prihvati
        })
        Zahtev.save((err, resp)=>{
            if(err) console.log(err)
            else res.json({"poruka":"ok"})
        })
    }

    odbij=(req:express.Request,res:express.Response)=>{
        let idk=req.body.idKnj;

        ZahtevModel.deleteOne({'idKnj':idk}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({"poruka":"ok"})
        })
    }

    dohvatiSve=(req:express.Request, res:express.Response)=>{
        ZahtevModel.find({}, (err, zah)=>{
            if(err) console.log(err)
            else res.json(zah)
        })
    }

    postavi=(req:express.Request, res:express.Response)=>{
        let idk=req.body.idKnj;
        let postavi=req.body.prihvati;

        ZahtevModel.updateOne({'idKnj':idk}, {$set:{'prihvati':postavi}}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({"poruka":"ok"})
        })
    }

    dohvId=(req:express.Request, res:express.Response)=>{
        let idk=req.body.idKnj;

        ZahtevModel.findOne({'idKnj':idk}, (err, zah)=>{
            if(err) console.log(err)
            else res.json(zah)
        })
    }
}