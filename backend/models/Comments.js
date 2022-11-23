import mongoose from "mongoose";

const comments = mongoose.Schema({
    Comment:String,
    DateCommented:String,
    TimeCommented:String,
    Rate:Number,
})

export default mongoose.model('Membercomment',comments);