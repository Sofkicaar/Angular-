import express from 'express';
import KomentarModel from '../model/komentar';

export class KomentarKontroler{

    dodajKomentar=(req:express.Request, res:express.Response)=>{
        let Komentar=new KomentarModel({
            idk:req.body.idk,
            ostavio:req.body.ostavio,
            ocena:req.body.ocena,
            kom:req.body.kom,
            datum:req.body.datum
        })
        
     Komentar.save((err, resp)=>{
        if(err) console.log(err);
        else res.json({"poruka":"ok"})
    })
}

dohvati=(req:express.Request, res:express.Response)=>{
    let idk=req.body.idk
    KomentarModel.find({'idk':idk}, (err, kom)=>{
        kom.sort((a, b) => (
            a.datum>= b.datum ? -1 : 1
        ))
        if(err) console.log(err)
        else res.json(kom)
    })
}

postoji=(req:express.Request, res:express.Response)=>{
    let idk=req.body.idk;
    let kor=req.body.ostavio;
    console.log(idk)
    console.log(kor)
    KomentarModel.findOne({'idk':idk, 'ostavio':kor}, (err, kom)=>{
        if(err) console.log(err)
        else res.json(kom)
    })
}
}