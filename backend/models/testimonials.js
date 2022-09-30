import mongoose from "mongoose";

const Testimonials = mongoose.Schema({
    message:String,
    timeCommented:String,
    dateCommented:String,
    Profession:String
})

export default mongoose.model("Testimonial",Testimonials)