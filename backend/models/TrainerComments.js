import mongoose from "mongoose";

const trainercomments = mongoose.Schema({
    Comment:String,
    DateCommented:String,
    TimeCommented:String,
    Rate:Number,
})

export default mongoose.model('TrainerComment',trainercomments);