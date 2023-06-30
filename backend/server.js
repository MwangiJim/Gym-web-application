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
import UserAccount from './models/UserAccount.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import ExerciseRecords from './models/ExerciseRecords.js';
import CompleteExercises from './models/CompleteExercises.js';

const PORT = 8080;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/gym_store")
.then((res)=>console.log("Db Connected"))
.catch((err)=>console.log(err.message))

app.use(express.json())
app.use(cors());

//send email notification on sign up
const transporter = nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:"kingongomwangi@outlook.com",
        pass:"Kingongo@[123]"
    }
});

//Authentication and creating accounts of users

app.post('/register',async(req,res)=>{
    const{username,email,password,userType,date,time,occupation,phonenumber,country} = req.body;

    let existingUser = await UserAccount.findOne({email:email});
    let hashPwd = await bcrypt.hash(password,10)
    if(existingUser){
        return res.status(500).json({error:'user already exists'})
    }
    else{
       let newUser =  await UserAccount.create({
            email:email,
            username:username,
            password:hashPwd,
            userType:userType,
            dateRegistered:date,
            timeRegistered:time,
            phoneNumber:phonenumber,
            Country:country,
            Occupation:occupation
        })
        const options = {
            from:"kingongomwangi@outlook.com",
            to:"",
            subject:"Welcome to BEFIT,This is node at work",
            text:"It Works and so should you..make sure you work out everyday use this link 'http://localhost:3000' to access it"
        }
        transporter.sendMail(options,function(err,info){
            if(err){
                console.log(err)
                return;
            }
            console.log(info.response)
        })
        //console.log(newUser);
        return res.status(200).json({status:'ok'})
    }
})
let JWT_TOKEN = 'svy3et2783ew1892wi293e746tregdyuewqdt1823ueos2yhe2983e123sie239e'

app.post('/login',async(req,res)=>{
    const {email,password} = req.body;

    let existingUser = await UserAccount.findOne({email:email});
    if(!existingUser){
        return res.status(402).json({error:'User does not exist'})
    }
    if(await bcrypt.compare(password,existingUser.password)){
        let token = jwt.sign({email:existingUser.email},JWT_TOKEN);
        if(res.status(200)){
            return res.send({status:'ok',data:token})
        }
        else{
            return res.send({error:'error'})
        }
    }
    res.json({status:'error',error:'Invalid Password'})
})
app.post('/userDetails',async(req,res)=>{
    const {token} = req.body;
    try {
        let user = jwt.verify(token,JWT_TOKEN,);
        let useremail = user.email;

        await UserAccount.findOne({email:useremail})
        .then((data)=>{
            console.log(data)
            return res.send({status:'ok',data:data})
        })
        .catch((err)=>{
            return res.send({status:'error',error:err})
        })
    } catch (error){}
})

app.get('/fetchUsers',async(req,res)=>{
    const Users = await UserAccount.find({userType:'User'})
    if(!Users){
        return res.status(500).json({status:'error',error:'Users not Found'})
    }
    else{
        return res.status(200).json({status:'ok',data:Users})
    }
})

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
    const{message,Occupation,timePosted,datePosted,userName} = req.body;
    if(!message){
        return res.status(400).json({"message":"No inputs!!!"})
    }
    else{
         const newTestimonial = await testimonials.create({
            message:message,
            timeCommented:timePosted,
            dateCommented:datePosted,
            Profession:Occupation,
            Username:userName
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
    let existingUser = await memberProfile.findOne({Email:email})
    if(existingUser){
        return res.status(400).json({data:"User already exists"})
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
    if(await trainerProfile.findOne({Email:email})){
        return res.status(400).json({"message":"Trainer Account Alreay exists"})
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

  app.post('/exerciseRecords',async(req,res)=>{
    const{calories,minutes,exercises} = req.body;
    if(!calories && !minutes){
        return res.status(500).json({"msg":"Error"})
    }
    else{
        const exerciseRecord = await ExerciseRecords.create({
            Calories:calories,
            Minutes:minutes,
            Exercises:exercises,
        })
        return res.status(200).json({status:"ok",data:exerciseRecord})
    }
  })
  app.put("/updateexerciseRecords/:id",async(req,res)=>{
     const {id}=req.params;
     const {calories,exercises,minutes} = req.body;
     if(!id) return res.status(500).json({status:"error",error:"id not found"})
   else{
    let updatedRecords = await ExerciseRecords.findByIdAndUpdate(id,{$set:{
        Calories:calories,
        Exercises:exercises,
        Minutes:minutes
    }},{returnOriginal:false})
    console.log(updatedRecords)
    return res.status(200).json({status:"ok",message:"Record Updated"})
   }
  })
  app.get("/exerciseRecords",async(req,res)=>{
    const FoundRecords = await ExerciseRecords.find();
    if(!FoundRecords){
        return res.status(500).json({status:"error",error:"Records not found!!"})
    }
    else{
        return res.status(200).json({status:"ok",data:FoundRecords})
    }
  })
app.post("/completeExercises",async(req,res)=>{
    const{date,time,exercisename,minutes,calories,totalTime,email} = req.body;
    if(!date,!time,!exercisename) return res.status(500).json({status:"error",error:"Error Accessing Server"})

    else{
        const newCompleteExercise = await CompleteExercises.create({
            Date:date,
            Time:time,
            ExerciseName:exercisename,
            Minutes:minutes,
            Calories:calories,
            totalTime:totalTime,
        })
        res.status(201).json({status:"ok"})
    }
})
app.get("/getCompleteExercises",async(req,res)=>{
    const FoundExercises = await CompleteExercises.find();
    if(!FoundExercises){
        return res.status(404).json({status:"error",error:"No Records Found!"})
    }
    else{
        return res.status(200).json({status:"ok",data:FoundExercises})
    }
})
app.all("*",(req,res)=>{
    return res.status(404).json({"message":"Page not Found"})
})

app.listen(PORT,()=>console.log(`App is listening at port ${PORT}`))