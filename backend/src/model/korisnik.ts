import mongoose from "mongoose";
import knjiga from "./knjiga";

const Schema = mongoose.Schema;

let Korisnik=new Schema({
    ime:{
        
        type: String
    },
    prezime :{
        type:String
    },
    korisnicko_ime:{
        type:String
    },
    lozinka :{
        type:String
    },
    tip:{
        type:String
    },
    imejl:{
        type:String
    },
    kontakt:{
        type:String
    },
    adresa:{
        type:String
    },
    zaduzene:{
        type:String
    },
    img:{
        type:String
    },
    blokiran:{
        type:Number
    }
    
})
export default mongoose.model('KorisnikModel',Korisnik, 'korisnik' )