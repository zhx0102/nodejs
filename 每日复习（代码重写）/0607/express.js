//终端输入：npm i express

//1.引入第三方模块express
const express = require("express");

//2.创建一个express的application对象
const app = express();

const fs = require("fs");
const path = require("path");

//书写接口
app.get("/",(req,res)=>{
    //req:请求,res:响应
    console.log("/被请求了");
    // console.log(req);
    //发送请求
    //http://127.0.0.1:3001/?user=laowang&pass=123
    console.log(req.method);//GET
    //请求方法
    console.log(req.params);//{}
    //post请求的数据
    // console.log(req.query);
    //{ user: 'laowang', pass: '123' }
    // get请求查询字符串组成的对象
    console.log(req.url);
    //?user=laowang&pass=123
    //请求的路径信息

    //响应下载
    // const filePath = path.resolve(__dirname,"index.html");
    // res.download(filePath);


    //响应
    // res.end()不会设置响应头content-type
    // res.send("今天热呀~~~~~~");
    //自动设置响应头content-type

    //把数据转化成json响应
    // res.json(1);
    

    //发送文件，如果浏览器可以打开，则使用的是浏览器打开
    const filePath = path.resolve(__dirname,"index.html");
    res.sendFile(filePath);

    //重定向
    // res.redirect("http://docs.lipeihua.vip");

    //设置响应头
    // res.set("hello","world");
    //设置状态码
    // res.status(200);
    // res.send("今天天气真热");


})

app.post("/register",(req,res)=>{
    console.log("post请求");
    res.send("图片路径出错");
})

app.get("/login",(req,res)=>{
    res.send("登陆成功");
})

app.get("/:id",(req,res)=>{
    res.send("登陆成功");
})

//3.给当前服务监听端口号
app.listen(3001,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("服务启动成功,请访问："+'http://127.0.0.1:3001');
})


