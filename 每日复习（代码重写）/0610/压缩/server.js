const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const zlib = require("zlib");

app.get("/",(req,res)=>{
    const filePath = path.resolve(__dirname,"./index.html");
    const rs =fs.createReadStream(filePath);

    //获取请求中的Accept-Encoding可以接受的类型
    //根据可接受的类型完成压缩选择
    console.log(req.headers["accept-encoding"]);
    const acceptEncoding = req.headers["accept-encoding"];
    //可以使用includes判断字符串中是否含有某个值
    if(acceptEncoding.includes("gzip")){
        const zlibFile = rs.pipe(zlib.createGzip());
        res.set("Content-Encoding","gzip");
        return zlibFile.pipe(res);
    }

    if(acceptEncoding.includes("deflate")){
        const zlibFile = rs.pipe(zlib.createDeflate());
        res.set("Content-Encoding","deflate");
        return zlibFile.pipe(res);
    }

    if(acceptEncoding.includes("br")){
        const zlibFile = rs.pipe(zlib.createBrotliCompress());
        res.set("Content-Encoding","br");
        return zlibFile.pipe(res);
    }

    rs.pipe(res);


})

app.listen("3000",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("http://127.0.0.1:3000");
})