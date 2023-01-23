import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import testimonials from './models/testimonials.js';
import pricingplan from './models/pricingplan.js';
import memberProfile from './models/memberProfile.js';
import trainerProfile from './models/trainerProfile.js';
import userBookings from './models/userBookings.js';
import Comments from './models/Comments.js';
import TrainerComments from './models/TrainerComments.js';
import path from 'path'

const PORT = 8080;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/gym_store")
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
    const{name,age,state,location,biography,Period,pushups,email} = req.body;
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
            PushupReps:pushups,
            Email:email,
        })
        res.status(201).json({"message":newMember})
       // console.log(newMember)
    }
})
app.put('/updateMember/:id',async(req,res)=>{
   // const{biography,name} = req.body;
    const id = req.params.id;
    if(!id){
        return res.status(400).json({'message':'No id found'})
    }
    else{
        const updatedMemberProfile = await memberProfile.findByIdAndUpdate(id,{$set:{
          Name:req.body.newName,
          Age:req.body.newAge,
          State:req.body.newState,
          Bio:req.body.newMessage,
          Location:req.body.newLocation
        }},{returnOriginal:false})
        res.status(200).json({'message':'Successfully updated'+ updatedMemberProfile})
        console.log('New Member profile '+ updatedMemberProfile)
    }
})
app.delete('/deleteMember/:id',async(req,res)=>{
    const id = req.params.id;
    if(!id){
        res.status(400).json({'message':'Id not found'})
    }
    else{
        const deletedAccount = await memberProfile.findByIdAndDelete(id);

        res.status(200).json({'msg':deletedAccount})
        console.log(deletedAccount);
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
        //console.log(foundTrainer)
    }
})
//route to get one trainer matching the Id
app.get('/userTrainer/:id',async(req,res)=>{
   const id = req.params.id;
   if(id){
   const foundTrainer =   await trainerProfile.findById(id)
   res.status(200).json({"message":foundTrainer})
  // console.log('The trainer',foundTrainer)
   }
   else{
    res.status(500).json({msg:'no user was found'})
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
       // console.log(newTrainer);
    }
})
app.put('/updateProfile/:id',async(req,res)=>{
      const id = req.params.id;
      if(!id){
        return res.status(500).json({'message':"No Id matching "+ id})
      }
      else{
        const updatedProfile = await trainerProfile.findByIdAndUpdate(id,{$set:{
           Username:req.body.name,
           HourPay:req.body.hourpay,
           City:req.body.city,
           Message:req.body.message,
           Location:req.body.location,
           Age:req.body.age, 
        }},{returnOriginal:false})
        res.status(200).json({"message":updatedProfile})
        console.log(updatedProfile)
      }
})
app.delete('/deleteTrainerProfile/:id',async(req,res)=>{
    const id=req.params.id;
    if(!id){
        return res.status(500).json({'message':"No Id matching "+ id})
     }
     else{
        const deletedTrainerAccount = await trainerProfile.findByIdAndDelete(id)
        res.status(200).json({message:deletedTrainerAccount})
        console.log(deletedTrainerAccount)
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
        //console.log(foundBookings)
    }
})
app.post('/bookings',async(req,res)=>{
   const {name,age,booked_Date,level,phoneNumber,email,trainer}=req.body;
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
        Email:email,
        Trainer:trainer
      })
      res.status(201).json({"message":newBooking})
     // console.log(newBooking)
   }
})
app.delete('/bookings/:id',async(req,res)=>{
    const id=req.params.id;
    if(!id){
        return res.status(500).json({"message":"No item matching id: "+id+"was found"})
    }
    else{
        let deletedItem = await userBookings.findByIdAndDelete(id)
        res.status(200).json({"message":deletedItem})
        console.log(deletedItem)
    }
})
//routes and comments for trainer and member
app.get('/Membercomments',async(req,res)=>{
    const foundComments = await Comments.find();
    if(!foundComments){
        return res.status(400).json({"message":"No Comments found"})
    }
    else{
        res.status(200).json({"message":foundComments})
       // console.log(foundComments)
    }
})
app.post('/Membercomments',async(req,res)=>{
  const {time,date,comment,rate}=req.body;
  if(!comment){
    return res.status(400).json({'message':"Bad Request"})
  }
  else{
    const newComment = await Comments.create({
        Comment:comment,
        TimeCommented:time,
        DateCommented:date,
        Rate:rate
    })
    res.status(201).json({'message':newComment})
  //  console.log(newComment);
  }
})

app.get('/Trainercomments',async(req,res)=>{
    const foundtrainerComments = await TrainerComments.find();
    if(!foundtrainerComments){
        return res.status(400).json({"message":"no messages found"})
    }
    else{
        res.status(200).json({'message':foundtrainerComments})
    }
})
app.post('/Trainercomments',async(req,res)=>{
    const {time,date,comment,rate}=req.body;
    if(!comment){
      return res.status(400).json({'message':"Bad Request"})
    }
    else{
      const newComment = await TrainerComments.create({
          Comment:comment,
          TimeCommented:time,
          DateCommented:date,
          Rate:rate
      })
      res.status(201).json({'message':newComment})
      //console.log(newComment);
    }
  })

app.all("*",(req,res)=>{
    return res.status(404).json({"message":"Page not Found"})
})

app.listen(PORT,()=>console.log(`App is listening at port ${PORT}`))