// const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema({
//     username:{
//         type:String,
//         unique:true,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// //创建model
// const userModel = mongoose.model("userInfo",userSchema);

// module.exports = userModel;

// const mongoose = require("mongoose");
// const userSchame = new mongoose.Schema({
//     username:{
//         type:String,
//         unique:true,
//         required:true
//     }
//     ,pssword:{
//         type:String,
//         required:true
//     }
// })

// //创建model
// const userModel = mongoose.model("userInfo",userSchame);
// module.exports = userModel;


// const mongoose = require("mongoose");
// const userSchame = mongoose.Schema({
//     username:{
//         type:String,
//         unique:true,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })
// const userModel = mongoose.model("login",userSchame);
// module.exports = userModel;

// const mongoose = require("mongoose");
// const userSchema=mongoose.Schema({
//     username:{
//         type:String,
//         unique:true,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })
// const userModel = mongoose.model("login",userSchema);
// module.exports=userModel;

const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        require:true
    }
})
const userModel = mongoose.model("userInfo",userSchema);
module.exports=userModel;