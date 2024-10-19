import { constants } from 'buffer'
import express from 'express'
import { allowedNodeEnvironmentFlags } from 'process'
import KnjigaModel from '../model/knjiga'

export class KnjigaKontroler {

    dohvatiKnjige = (req: express.Request, res: express.Response) => {

        KnjigaModel.find({}, (err, knjiga) => {

            knjiga.sort((a, b) => (
                a.uzeta >= b.uzeta ? -1 : 1
            ))
            if (err) console.log(err)
            else res.json(knjiga)
        })
    }
    
    dohvatiKnjigu = (req: express.Request, res: express.Response) => {
        let idKnjige = req.body.idk;

        KnjigaModel.findOne({ 'idKnj': idKnjige }, (err, knjiga) => {
            if (err) console.log(err)
            else res.json(knjiga)
        })
    }



    pretraziKnjiguNaziv = (req: express.Request, res: express.Response) => {

        let searchParam1 = req.query.param;

        KnjigaModel.find({ $or: [{ 'naziv': { $regex: searchParam1, $options: "$i" } }, { 'pisac': { $regex: searchParam1, $options: "$i" } }] }, (err, knjiga) => {

            if (err) console.log(err)
            else res.json(knjiga)
        })
    }
    pretraziIzdavac = (req: express.Request, res: express.Response) => {

        let searchParam = req.query.param;
        

        KnjigaModel.find({'izdavac': { $regex: searchParam, $options: "$i" } }, (err, knjiga) => {

            if (err) console.log(err)
            else res.json(knjiga)
        })
    }


    dodajKnjigu=(req:express.Request, res:express.Response)=>{
        console.log(req.body.img)
        const knjiga=new KnjigaModel({
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
            img: req.body.img
        })
        console.log(knjiga)
        console.log(knjiga.img)
        knjiga.save((err, resp)=>{
            if(err) console.log(err)
            else res.json({"poruka":"ok"})
        })
    }

    azuriraj=(req:express.Request, res:express.Response)=>{
        let idKnj=req.body.idKnj;
        let novNaziv=req.body.naziv;
        let noviPisac=req.body.pisac;
        let noviIzdavac=req.body.izdavac;
        let novaGodina=req.body.godinaIzdavanja;
        let noviZanr=req.body.zanr;
        let noviJezik=req.body.jezik;
        let noviBroj=req.body.brojKnjiga;
        let novaSlika=req.body.img;
        console.log(novNaziv);
        console.log(novaGodina);
        console.log(idKnj)
        KnjigaModel.updateOne({'idKnj':idKnj},{
            $set:{
                'naziv':novNaziv,
                'pisac':noviPisac,
                'godinaIzdavanja':novaGodina,
                'zanr':noviZanr,
                'jezik':noviJezik,
                'izdavac':noviIzdavac,
                'brojKnjiga':noviBroj,
                'img':novaSlika
            }
        }, (err, resp)=>{
            if(err) console.log("ovde ne valja!")
            else {
                res.json({"poruka":"ok"})}
               
        })
    }

    obrisiKnjigu=(req:express.Request, res:express.Response)=>{
        let idk=req.body.idKnj;

        KnjigaModel.deleteOne({'idKnj':idk}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({"poruka":"ok"})
        })
      
       // KnjigaModel.updateMany({'idKnj>idk':idk}, {$set: {'idKnj': --idk }})
    }
    azurirajId=(req:express.Request, res:express.Response)=>{
        let idk=req.body.idKnj;
        let naziv=req.body.naziv;
        console.log(idk)
        console.log(naziv)
        KnjigaModel.updateOne({'naziv':naziv},{ $set:{'idKnj':idk}}, (err, resp)=>{
            if(err) console.log("ovde ne valja!")
            else {
               
                res.json({"poruka":"ok"})}
        })
    }

    azurirajUiBr=(req:express.Request, res:express.Response)=>{
        let idk=req.body.idKnj;
        let broj=req.body.brojKnjiga;
        let uzeta=req.body.uzeta;

        KnjigaModel.updateOne({'idKnj':idk}, { $set:{'brojKnjiga':broj, 'uzeta':uzeta}}, (err, resp)=>{
            if(err) console.log("ovde ne valja!")
            else {
                res.json({"poruka":"ok"})}
        })
    }

    postaviProsecnu=(req:express.Request, res:express.Response)=>{
        let idk=req.body.idKnj;
        let oc=req.body.ocena;

        KnjigaModel.updateOne({'idKnj':idk}, {$set:{'ocena':oc}}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({"poruka":"ok"})
        })
    }

}