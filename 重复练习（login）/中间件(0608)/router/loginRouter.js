const express=require("express");
const router = new express.Router();
const path = require("path");

//引入当前mongoose的当前用户信息集合
const userModel = require("../model/userModel");


//登录接口
router.get("/login",async(req,res)=>{
    const{
        username,password
    }=req.query;
    //拿用户信息

    //查看用户的账号和密码是否为空
    if(!username||!password){
         //拼接err.ejs路径
         const filePath=path.resolve(__dirname,"../views/err.ejs");
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
         const filePath=path.resolve(__dirname,"../views/err.ejs");
         return res.render(filePath,{
             errData:"用户名不存在"
         })
    }

    //如果用户名存在，则判断密码是否正确
    if(isHasUser.password!=password){
        //拼接err.ejs路径
        const filePath=path.resolve(__dirname,"../views/err.ejs");
        return res.render(filePath,{
            errData:"密码错误"
        })
    }

    //登陆成功要设置cookie,响应给客户端(把id设置给cookie)
    res.cookie("userId",isHasUser._id,{
        maxAge:1000*60*60*24,
        httpOnly:true
    });



    // return res.send("登陆成功");
    const filePath=path.resolve(__dirname,"../views/center.html");
    res.sendFile(filePath);
})


module.exports=router;