//入口文件

//映入mongoose
const mongoose = require("mongoose");

//连接数据库
require("./db");

//引入mongoose的当前用户信息集合
const userModel=require("./model/userModel");

//创建一个express的application对象
const express=require("express");
const app=express();
const path=require("path");

app.get ("/register",async(req,res)=>{
    console.log(req.query);
    const {username,password}=req.query;
    if(!username || !password){
        const filePath = path.resolve(__dirname,"./public/err.ejs");
        return res.render(filePath,{
            errData:"账号或者密码不能为空"
        })
    }

    //判断用户名是否被注册(去数据库查)
    const isHasUser = await userModel.findOne({
        username
    })
    if(isHasUser){
        const filePath = path.resolve(__dirname,"./public/err.ejs");
        return res.render(filePath,{
            errData:"用户名已被注册"
        })
    }

    //向数据库直接写入
    const registerData = await userModel.create({
        username,
        password
    })

    console.log(registerData);
    res.send('注册成功');
})

app.get("/login",async(req,res)=>{
    const {
        username,password
    }=req.query;

    if(!username || !password){
        const filePath = path.resolve(__dirname,"./public/err.ejs");
        return res.render(filePath,{
            errData:"账号或者密码不能为空"
        })
    }

    //根据username从数据库查询是否存在该用户
    const isHasUser = await userModel.findOne({
        username
    });

    if(!isHasUser){
        const filePath = path.resolve(__dirname,"./public/err.ejs");
        return res.render(filePath,{
            errData:"用户名不存在"
        })
    }

    if(isHasUser.password!=password){
        const filePath = path.resolve(__dirname,"./public/err.ejs");
        return res.render(filePath,{
            errData:"密码错误"
        })
    }
    const filePath = path.resolve(__dirname,"./public/center.html");
    res.sendFile(filePath);
})

//图片接口
app.get("/static/:src",(req,res)=>{
    const {src} = req.params;
    const filePath=path.resolve(__dirname,"./static",src);
    res.sendFile(filePath);
})

//默认打开的时index.html
app.get("/",(req,res)=>{
    res.redirect("/index.html");
})
//index.html路径
app.get("/index.html",(req,res)=>{
    const filePath=path.resolve(__dirname,"./public/index.html");
    res.sendFile(filePath);
})
//login.index的路径
app.get("/login.html",(req,res)=>{
    const filePath=path.resolve(__dirname,"./public/login.html");
    res.sendFile(filePath);
})
//register.html的路径
app.get("/register.html",(req,res)=>{
    const filePath=path.resolve(__dirname,"./public/register.html");
    res.sendFile(filePath);
})

let port="3002";
app.listen(port,err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("服务器启动，请访问：http://127.0.0.1:"+port);
})