import mongoose from "mongoose";
import { menuSchema } from "./MenuCard.js";

const shopSchema = new mongoose.Schema({
    shopName:{
        type:String,
        // required:true
    },
    menuCard:[menuSchema],
    phoneNumber:{
        type:Number,
    },
    rating:{
        type:Number
    }
})

const Shop = mongoose.model("Shop",shopSchema)

export default Shop;