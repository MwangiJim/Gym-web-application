import mongoose from 'mongoose'

const User = mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    password:String,
    userType:String,
    dateRegistered:String,
    timeRegistered:String,
    phoneNumber:String,
    Country:String,
    Occupation:String
})

export default mongoose.model('User',User);