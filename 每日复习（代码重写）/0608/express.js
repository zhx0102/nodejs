const express =require("express");
const app=express();
const path=require("path");
// const filePath=path(__dirname,"index.html");
app.get("/:id",(req,res)=>{
    console.log(req.params);
    console.log(":id");
})
app.get("/",(req,res)=>{
    console.log("根目录访问");

    console.log(req.url);
    // console.log(req.query);

    res.send("你好世界");
    // res.download(filePath);
    // res.sendFile();
    // res.json();
    // res.redirect();
})
let port = '3002';
app.listen(port,err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("服务器启动，请访问："+"http://127.0.0.1:"+port);
})