import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Komentar=new Schema({
    idk:{
        type:Number
    },
    ostavio:{
        type:String
    },
    ocena:{
        type:Number
    },
    kom:{
        type:String
    },
    datum:{
        type:String
    }
})

export default mongoose.model('KomentarModel', Komentar, 'komentar')