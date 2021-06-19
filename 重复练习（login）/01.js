const express = require("express");

//创建一个express的application对象
const app = express();

app.get("/",(req,res)=>{
    res.send("下雨咯");
})

let port = '3002';
//监听端口号
app.listen(port,err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("服务启动，请访问" + ` http://127.0.0.1:${port}`);
    exec("start http://127.0.0.1:3002");
})
