const express = require("express");
const app = express();
const path = require("path");

//body-parser中间件是处理post请求数据的
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.get("/",(req,res)=>{
    const filePath=path.resolve(__dirname,"./index.html");
    res.sendFile(filePath);

})

app.post("/login",(req,res)=>{
    const {
        user,
        pass
    }=req.body;
    console.log(req.body);

    if(user === "zhx" && pass==="123"){
        const data = {
            mes:"ok",
            code:1
        }
        return res.json(data);
    }

    const err={
        mes:"no OK",
        code:0
    }
    return res.json(err);
})
app.get("/login",(req,res)=>{
    const {
        user,
        pass
    } = req.query;
    console.log(req.query);

    if (user === "zhx" && pass === "123") {
        const data = {
            mes: "ok",
            code: 1
        }
        return res.json(data);
    }


    const err = {
        mes: "no ok",
        code: 0
    }
    return res.json(err);
})

app.listen("3000", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("http://127.0.0.1:3000");
})