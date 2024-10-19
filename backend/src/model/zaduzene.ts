import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Zaduzene=new Schema({
    naziv:{
        type:String
    },
    autor:{
    type:String
    },
    zaduzio:{
        type:String
    },
    datumZad:{
        type:String
    },
    datumVrac:{
        type:String
    },
    dani:{
        type:Number
    },
    idk:{
        type:Number
    },
    ocena:{
        type:Number
    },
    komentar:{
        type:String
    },
    slika:{
        type:String
    },
    produzio:{
        type:Number
    }
})
export default mongoose.model('ZaduzeneModel', Zaduzene,'zaduzene')
