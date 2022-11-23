import mongoose from 'mongoose'

const MemberProfile = mongoose.Schema({
    Name:String,
    State:String,
    Age:Number,
    Location:String,
    Bio:String,
    TrainingFrequency:String,
    PushupReps:String,
    Email:String
})

export default mongoose.model('MemberProfile',MemberProfile)