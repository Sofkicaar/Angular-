import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Knjiga=new Schema({
    idKnj:{
        type:Number
    },
    naziv:{
        type:String
    },
    pisac:{
        type:String
    },
    godinaIzdavanja:{
        type:Number
    },
    zanr:{
        type:Array
    },
    uzeta:{
        type:Number
    },
    jezik:{
        type:String
    },
    ocena:{
        type: Number
    },
    izdavac:{
        type:String
    },
    brojKnjiga:{
        type:Number
    },
    zaduzio:{
        type:String
    },
    img:{
        type:String
    }

})
export default mongoose.model('KnjigaModel', Knjiga,'knjiga')