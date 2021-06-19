//入口文件

//映入mongoose
const mongoose = require("mongoose");


//创建一个express的application对象
const express=require("express");
const app=express();
const path=require("path");

//首先引入ejs
const ejs = require("ejs");

app.set("view engine","ejs");
app.set("views","views");

app.get("/",(req,res)=>{
    const filePath = path.resolve(__dirname,"index.ejs");
    const data = "hello world";
    res.render(filePath,{
        data:data,
        name:"laowang"
    })
})


let port="3002";
app.listen(port,err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("服务器启动，请访问：http://127.0.0.1:"+port);
})