const mongoose= require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        requird:true
    },
    password:{
        type:String,
        requird:true
    }
})

const userModel=mongoose.model("userInfo",userSchema);
module.exports=userModel;