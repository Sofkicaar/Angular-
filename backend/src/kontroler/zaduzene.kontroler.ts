import  express from 'express';
import ZaduzeneModel from '../model/zaduzene'

export class ZaduzeneKontroler{
     
    dohvatiKnjigu=(req:express.Request, res:express.Response)=>{
        let idKnjige=req.body.idk;
    
        ZaduzeneModel.findOne({'idk':idKnjige}, (err, knjiga)=>{
            if(err) console.log(err)
            else res.json(knjiga)
        })
       }

       dohvatiKnjNaziv=(req:express.Request, res:express.Response)=>{
        let naziv=req.body.naziv;

        ZaduzeneModel.find({'naziv':naziv}, (err, knjiga)=>{
            if(err) console.log(err)
            else console.log(knjiga)
        })
       }

       dohvatiSveZaduzene=(req:express.Request, res:express.Response)=>{
        ZaduzeneModel.find({}, (err, knjiga)=>{
            if(err) console.log(err)
            else res.json(knjiga)
        })
       }

       zaduziKnjigu=(req:express.Request, res:express.Response)=>{

        let Zaduzena=new ZaduzeneModel({
             idk:req.body.idk,
             naziv:req.body.naziv, 
             autor:req.body.autor,
             zaduzio:req.body.zaduzio,
             datumZad:req.body.datumZad,
             datumVrac:req.body.datumVrac,
             dani:req.body.dani,
             ocena:req.body.ocena,
             komentar:req.body.komentar,
             produzio:req.body.produzio,
             slika:req.body.slika
        })
        Zaduzena.save((err, resp)=>{
            if(err) console.log(err)
            else res.json({"poruka":"ok"})
        })
        
        
       }
       produzi=(req:express.Request, res:express.Response)=>{

       let dani=req.body.dani;
       let idk=req.body.idk;
       let produzio=req.body.produzio;
       ZaduzeneModel.updateOne({'idk':idk}, {$set:{'dani':dani, 'produzio':produzio}}, (err, resp)=>{
        if(err) console.log(err)
        else res.json({"poruka":"ok"})
       })
        
       }
       
}