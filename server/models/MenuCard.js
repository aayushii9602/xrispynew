import mongoose from "mongoose";

export const menuSchema = new mongoose.Schema({
    foodName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String
    }
})

const MenuCard = mongoose.model("MenuCard",menuSchema)

export default MenuCard;