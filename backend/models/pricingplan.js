import mongoose from "mongoose";

const PricingPlans = mongoose.Schema({
    Plan:String,
    PlanPeriod:Number,
    DatePurchased:String,
    TimePurchased:String,
})

export default mongoose.model('Pricingplan',PricingPlans)