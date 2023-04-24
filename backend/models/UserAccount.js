import mongoose from 'mongoose'

const User = mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    password:String,
})

export default mongoose.model('User',User);