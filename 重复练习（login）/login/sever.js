
const express = require("express");
const mongoose = require("mongoose");
//连接数据库
require("./db");
//引入当前mongoose的当前用户信息集合
const userModel = require("./model/userModel");

//创建一个express的application对象
const app = express();

//引入path
const path = require("path");

//引入ejs
const ejs =require("ejs");

//通知express使用ejs模板
app.set("view engine","ejs");
app.set("views","views");


//注册接口
app.get("/register",async(req,res)=>{
    console.log(req.query);
    //查看用户输入内容

    const {username,password}=req.query;

    //查看用户的账号和密码是否为空
    if(!username||!password){
        //拼接err.ejs路径
        const filePath=path.resolve(__dirname,"./public/err.ejs");
        return res.render(filePath,{
            errData:"账号和密码不可为空"
        })
    }

    //判断当前用户名是否被注册
    //去数据库查询当前用户名
    const isHasUser = await userModel.findOne({
        username
    });
    
    if(isHasUser){
        //拼接err.ejs路径
        const filePath=path.resolve(__dirname,"./public/err.ejs");
        return res.render(filePath,{
            errData:"用户名已被注册"
        })
    }


    //向数据库写入数据
    const registerData = await userModel.create({
        username,password
    })
    console.log(registerData);
    // res.send("注册成功");
    //如果注册成功，直接重定向到登陆页面
    res.redirect("/login.html");
})


//登录接口
app.get("/login",async(req,res)=>{
    const{
        username,password
    }=req.query;
    //拿用户信息

    //查看用户的账号和密码是否为空
    if(!username||!password){
         //拼接err.ejs路径
         const filePath=path.resolve(__dirname,"./public/err.ejs");
         return res.render(filePath,{
             errData:"账号和密码不可为空"
         })
        
    }

    //根据username去数据库查询是否存在该用户
    const isHasUser = await userModel.findOne({
        username
    })

    if(!isHasUser){
         //拼接err.ejs路径
         const filePath=path.resolve(__dirname,"./public/err.ejs");
         return res.render(filePath,{
             errData:"用户名不存在"
         })
    }

    //如果用户名存在，则判断密码是否正确
    if(isHasUser.password!=password){
        //拼接err.ejs路径
        const filePath=path.resolve(__dirname,"./public/err.ejs");
        return res.render(filePath,{
            errData:"密码错误"
        })
    }
    // return res.send("登陆成功");
    const filePath=path.resolve(__dirname,"./public/center.html");
    res.sendFile(filePath);
})

//图片接口
app.get("/static/:src",(req,res)=>{
    const {src}=req.params;
    const filePath = path.resolve(__dirname,"./static",src);
    res.sendFile(filePath);
})

//index.html的路径
app.get("/index.html", (req, res) => {
    //获取index.html的路径
    const filePath = path.resolve(__dirname, "./public/index.html");
    res.sendFile(filePath);
})
app.get("/",(req,res)=>{
    res.redirect("/index.html");
})

//login.html的路径
app.get("/login.html", (req, res) => {
    //获取index.html的路径
    const filePath = path.resolve(__dirname, "./public/login.html");
    res.sendFile(filePath);
})

//register.html的路径
app.get("/register.html", (req, res) => {
    //获取index.html的路径
    const filePath = path.resolve(__dirname, "./public/register.html");
    res.sendFile(filePath);
})

let port = '3002';
//监听端口号
app.listen(port,err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("服务启动，请访问" + ` http://127.0.0.1:${port}`);
})
