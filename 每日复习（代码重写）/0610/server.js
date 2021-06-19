const express = require("express");

const {exec} = require("child_process");

const path = require("path");

const fs = require("fs");

const app = express();

app.get("/",(req,res)=>{
    const filePath = path.resolve(__dirname,"./index.html");
    const rs =fs.createReadStream(filePath);
    rs.pipe(res);
})

app.get("/img",(req,res)=>{
    const filePath = path.resolve(__dirname,"./01.jpg");
    const rs = fs.createReadStream(filePath);
    //设置强制缓存
    res.set("Cache-Control","max-age=10000");
    rs.pipe(res);
})

app.listen("3000",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("服务已经启动：http://127.0.0.1:3000");
})