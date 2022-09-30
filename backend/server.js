import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import testimonials from './models/testimonials.js';
import pricingplan from './models/pricingplan.js';
import memberProfile from './models/memberProfile.js';
import trainerProfile from './models/trainerProfile.js';
import userBookings from './models/userBookings.js';

const PORT = 8080;
const app = express();

mongoose.connect("mongodb://localhost:27017/gym_store")
.then((res)=>console.log("Db Connected"))
.catch((err)=>console.log(err.message))

app.use(express.json())
app.use(cors());

//routes for creating and fetching Testimonials
app.get('/testimonials',async(req,res)=>{
    const foundTestimonials = await testimonials.find();
    if(!foundTestimonials){
        return res.status(400).json({"message":"No Messages Found"})
    }
    else{
        return res.status(200).json({"message":foundTestimonials})
    }
})
app.post('/testimonials',async(req,res)=>{
    const{message,Occupation,timePosted,datePosted} = req.body;
    if(!message){
        return res.status(400).json({"message":"No inputs!!!"})
    }
    else{
         const newTestimonial = await testimonials.create({
            message:message,
            timeCommented:timePosted,
            dateCommented:datePosted,
            Profession:Occupation,
         })

         res.status(201).json({"message":newTestimonial})
         //console.log(newTestimonial)
    }
})
//routes for creating and fetching purchased plan
app.get('/purchased_plan',async(req,res)=>{
    const fetchedPlans = await pricingplan.find();

    if(!fetchedPlans){
        return res.status(400).json({"message":"No plans Were found"})
    }else{
        res.status(200).json({"message":fetchedPlans})
    }
})
app.post('/purchased_plan',async(req,res)=>{
    const{purchasePlan,datePurchased,timePurchased,purchasePlanPeriod}=req.body;
    if(!purchasePlan){
        return res.status(400).json({"message":"No plan Bought"})
    }else{
        const newPlan = await pricingplan.create({
            Plan:purchasePlan,
            DatePurchased:datePurchased,
            TimePurchased:timePurchased,
            PlanPeriod:purchasePlanPeriod,
        })
        res.status(201).json({"message":newPlan})
       // console.log(newPlan)
    }
})
//routes for creating and updating Profile
app.get('/newMember',async(req,res)=>{
    const memberFound = await memberProfile.find();
    if(!memberFound){
        return res.status(400).json({"message":"No Profile Found"})
    }
    else{
       res.status(200).json({"message":memberFound})
       // console.log(memberFound)
    }
})
app.post('/newMember',async(req,res)=>{
    const{name,age,state,location,biography,Period,pushups} = req.body;
    if(!name){
        return res.status(400).json({"message":"Input Fields Required!!!"})
    }
    else{
        const newMember = await memberProfile.create({
            Name:name,
            Age:age,
            State:state,
            Location:location,
            Bio:biography,
            TrainingFrequency:Period,
            PushupReps:pushups
        })
        res.status(201).json({"message":newMember})
       // console.log(newMember)
    }
})
app.put('/newMember',async(req,res)=>{
   // const{biography,name} = req.body;
   const filter = await memberProfile.findOne({Name:req.body.name})
   const update = {
          Bio:req.body.newBio,
          Name:req.body.newName,
          Location:req.body.newLocation,
          State:req.body.newState
     }
    const Member = await memberProfile.findOneAndUpdate(filter,update,{
        returnOriginal:false,
    })
    if(!Member){
        return res.status(400).json({"message":"Operation Failed!!"})
    }
    else{
        res.status(200).json({"message":Member})
        console.log(Member)
    }
})
//routes and controllers for new trainer
app.get('/newTrainer',async(req,res)=>{
    const foundTrainer = await trainerProfile.find();
    if(!foundTrainer){
        return res.status(400).json({'message':"No match Found"})
    }
    else{
        res.status(200).json({"message":foundTrainer})
    }
})
app.post('/newTrainer',async(req,res)=>{
    const{userName,age,city,location,message,hourlyPay,levelofExperience,phone,experience,flag,email}=req.body;
    if(!userName||!age){
        return res.status(400).json({"message":"No Inputs in the Fields"})
    }
    else{
        const newTrainer = await trainerProfile.create({
            Username:userName,
            Age:age,
            City:city,
            Location:location,
            Message:message,
            HourPay:hourlyPay,
            LevelofExperience:levelofExperience,
            Phone:phone,
            Experience:experience,
            Flag:flag,
            Email:email
        })
        res.status(201).json({newTrainer})
        console.log(newTrainer);
    }
})
//routes and controllers for bookings
app.get("/bookings",async(req,res)=>{
    const foundBookings = await userBookings.find();
    if(!foundBookings){
        return res.status(400).json({"message":"No Bookings Found!!"})
    }
    else{
        res.status(200).json({"message":foundBookings})
        console.log(foundBookings)
    }
})
app.post('/bookings',async(req,res)=>{
   const {name,age,booked_Date,level,phoneNumber,email}=req.body;
   if(!name ||!age){
    return res.status(400).json({"message":'Inputs Required'})
   }
   else{
      const newBooking = await userBookings.create({
        FullName:name,
        Age:age,
        Date:booked_Date,
        Level:level,
        PhoneNumber:phoneNumber,
        Email:email
      })
      res.status(201).json({"message":newBooking})
      console.log(newBooking)
   }
})
app.all("*",(req,res)=>{
    return res.status(404).json({"message":"Page not Found"})
})

app.listen(PORT,()=>console.log(`App is listening at port ${PORT}`))