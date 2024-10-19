import  express from 'express';
import korisnik from '../model/korisnik';
import KorisnikModel from '../model/korisnik'
import KnjigaModel from '../model/knjiga'
import ZaduzeneModel from '../model/zaduzene'
export class KorisnikKontroler{
    login=(req: express.Request, res:express.Response)=>{
        let korisnicko_ime=req.body.korisnicko_ime;
        let lozinka=req.body.lozinka;


        KorisnikModel.findOne({'korisnicko_ime': korisnicko_ime, 'lozinka':lozinka}, (err, korisnik)=>{
            if(err) console.log(err);
            else {
                res.json(korisnik)
               
            }
        })
    }

    registracija=(req:express.Request, res:express.Response)=>{
        let Korisnik=new KorisnikModel({
            ime: req.body.ime,
            prezime:req.body.prezime,
            korisnicko_ime: req.body.korisnicko_ime,
            kontakt: req.body.kontakt,
            adresa:req.body.adresa,
            imejl:req.body.imejl,
            lozinka:req.body.lozinka,
            blokiran:req.body.bokiran,
            tip:req.body.tip,
            img: req.body.img
        })
       // console.log("registracija");
        Korisnik.save((err, resp)=>{
            if(err) console.log(err);
            else res.json({"poruka":"ok"})
        })
       
    }

    

   

    dohvatiMejl=(req:express.Request, res:express.Response)=>{
        let imejl=req.body.imejl;
        
        KorisnikModel.findOne({'imejl':imejl}, (err, korisnik)=>{
             if(err) console.log(err);
             else res.json(korisnik)
        })
    }

    dohvatiKorisnickoIme=(req:express.Request, res:express.Response)=>{
        let korisnicko_ime=req.body.korisnicko_ime;

        KorisnikModel.findOne({'korisnicko_ime':korisnicko_ime}, (err, korisnik)=>{
            if(err) console.log(err);
            else res.json(korisnik)
        })
    }

    dohvatiKorisnika=(req:express.Request, res:express.Response)=>{
        let imeForm=req.body.ime;
        let prezimeForm=req.body.prezime;
        let imejlForm=req.body.imejl;
        let kontaktForm=req.body.kontakt;
        let adresaForm=req.body.adresa;
      

        KorisnikModel.find({'ime':imeForm, 'prezime':prezimeForm, 'imejl':imejlForm, 'kontakt':kontaktForm, 'adresa':adresaForm}, (err, korisnik)=>{
            if(err) console.log(err)
            else res.json(korisnik)
        })

    }
   dohvatiZaduzene=(req:express.Request, res:express.Response)=>{
    let korIme=req.body.korisnicko_ime
    ZaduzeneModel.find({'zaduzio':{$regex:korIme}}, (err, knjiga)=>{
        if(err) console.log(err)
        else res.json(knjiga)
    })
   }

   vrati=(req:express.Request, res:express.Response)=>{
    let idk=req.body.idk
    let datumVrac=req.body.datumVrac;
    

    ZaduzeneModel.updateOne({'idk':idk}, {$set:{'datumVrac':datumVrac}}, (err, knjiga)=>{
        if(err) console.log(err)
        res.json({"poruka":"ok"})
    })
   
   }

   blokiraj=(req:express.Request, res:express.Response)=>{
    let korIme=req.body.korisnicko_ime;
    let blok=req.body.blokiran;
    KorisnikModel.updateOne({'korisnicko_ime':korIme}, {$set:{'blokiran':blok}}, (err, resp)=>{
        if(err) console.log(err)
        else res.json({"poruka":"ok"})
    })
   }

   dohvatiDane=(req:express.Request, res:express.Response)=>{
    let korIme=req.body.korisnicko_ime

    ZaduzeneModel.find({'zaduzio':korIme}, (err, knjiga)=>{
        if (err) console.log(err)
        else res.json(knjiga)
    })
}

dohvatiDatum=(req:express.Request, res:express.Response)=>{
    let korIme=req.body.korisnicko_ime;

    ZaduzeneModel.find({'zaduzio':korIme}, (err, knjiga)=>{
        if (err) console.log(err)
        else res.json(knjiga)
    })
}

obrisiKorisnika=(req:express.Request, res:express.Response)=>{
    let korIme=req.body.korisnicko_ime;

    KorisnikModel.deleteOne({'korisnicko_ime':korIme}, (err, resp)=>{
        if(err) console.log(err)
        else res.json({"poruka":"ok"})
    })
}

dohvatiSveKor=(req:express.Request, res:express.Response)=>{
    KorisnikModel.find({}, (err, korisnik)=>{
        if(err) console.log(err)
        else res.json(korisnik)
    })
}

azuriraj=(req:express.Request, res:express.Response)=>{
   let ime=req.body.ime;
   let prezime=req.body.prezime;
  
   let kontakt=req.body.kontakt;
   let adresa=req.body.adresa;
   let tip=req.body.tip;
  
   let korIme=req.body.korisnicko_ime;
   let slika=req.body.img;


    
    KorisnikModel.updateOne({'korisnicko_ime':korIme},{
        $set:{
            'ime':ime,
            'prezime':prezime,
            
            'adresa':adresa,
            'kontakt':kontakt,
            'tip':tip,
            
            'korisnicko_ime':korIme,
            'img':slika
        }
    }, (err, resp)=>{
        if(err) console.log("ovde ne valja!")
        else {
            res.json({"poruka":"ok"})}
           
    })
}
azurirajSve=(req:express.Request, res:express.Response)=>{
    let ime=req.body.ime;
    let prezime=req.body.prezime;
    let lozinka=req.body.lozinka;
    let kontakt=req.body.kontakt;
    let adresa=req.body.adresa;
    let tip=req.body.tip;
    let imejl=req.body.imejl;
    let korIme=req.body.korisnicko_ime;
    let slika=req.body.img;
 
 
     
     KorisnikModel.updateOne({'korisnicko_ime':korIme},{
         $set:{
             'ime':ime,
             'prezime':prezime,
             'lozinka':lozinka,
             'adresa':adresa,
             'kontakt':kontakt,
             'tip':tip,
             'imejl':imejl,
             'korisnicko_ime':korIme,
             'img':slika
         }
     }, (err, resp)=>{
         if(err) console.log("ovde ne valja!")
         else {
             res.json({"poruka":"ok"})}
            
     })
 }

promeniLozinku=(req:express.Request,res:express.Response)=>{
    let lozinka=req.body.loz1;
    let noval=req.body.loz2;
    KorisnikModel.updateOne({'lozinka': lozinka}, {$set: {'lozinka': noval}}, (err, resp)=>{
        if(err) console.log(err)
        else res.json({'message': 'updated'})
    })

}

promeniPriv=(req:express.Request, res:express.Response)=>{
    let korIme=req.body.korisnicko_ime;
    let tip=req.body.tip;
    KorisnikModel.updateOne({'korisnicko_ime':korIme}, {$set:{'tip':tip}}, (err, resp)=>{
        if(err) console.log(err)
        else res.json({'poruka': 'updated'})
    })

}

   
}