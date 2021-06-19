const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/login");

//监听数据库是否连接成功
mongoose.connection.once("open",err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("数据库连接成功");
    
})