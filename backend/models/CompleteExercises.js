import mongoose from "mongoose";

const CompleteExercises = mongoose.Schema({
    Minutes:Number,
    Calories:Number,
    Date:String,
    Time:String,
    ExerciseName:String,
    totalTime:String,
})
export default mongoose.model("Completeexercises",CompleteExercises)