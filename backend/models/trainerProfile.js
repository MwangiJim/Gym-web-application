import mongoose from 'mongoose'

const TrainerProfile = mongoose.Schema({
    Username:String,
    Age:Number,
    City:String,
    Location:String,
    Message:String,
    HourPay:Number,
    LevelofExperience:String,
    Phone:String,
    Experience:String,
    Flag:String,
    Email:String,
})

export default mongoose.model("TrainerProfile",TrainerProfile)