import mongoose from 'mongoose'

const ExerciseRecords = mongoose.Schema({
    Calories:Number,
    Minutes:Number,
    Exercises:Number
})

export default mongoose.model("Records",ExerciseRecords);