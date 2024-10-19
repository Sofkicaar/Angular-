import mongoose from "mongoose";


const Schema = mongoose.Schema;

let Registracija=new Schema({
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
   
    img:{
        type:String
    },
    prihvati:{
        type:Number
    }
})
export default mongoose.model('RegistracijaModel', Registracija,'registracija')