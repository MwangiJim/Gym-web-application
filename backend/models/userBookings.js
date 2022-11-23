import mongoose from 'mongoose'

const booking = mongoose.Schema({
    FullName:String,
    Age:Number,
    Level:String,
    Date:String,
    PhoneNumber:String,
    Email:String,
    Trainer:String,
})

export default mongoose.model("Booking",booking)