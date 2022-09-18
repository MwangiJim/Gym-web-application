import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const PORT =8080;
const app = express()

app.use(express.json())
app.use(cors());

app.get('/api',(req,res)=>{
    res.status(200).json({"message":"ok"})
})

app.listen(PORT,()=>console.log(`App is listening at port ${PORT}`))