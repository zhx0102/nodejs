const express=require("express");
const router = new express.Router();
const path = require("path");

const isEmptyRouterFn=(req,res,next)=>{
    // console.log("body",req.body);
    //查看用户输入内容

    const {username,password}=req.query;

    //查看用户的账号和密码是否为空
    if(!username||!password){
        //拼接err.ejs路径
        const filePath=path.resolve(__dirname,"../views/err.ejs");
        return res.render(filePath,{
            errData:"账号和密码不可为空"
        })
    }
    //当处理完成，需要继续向下走，需要调用next方法
    next();
};

//处理账号密码中间件
router.use("/login",isEmptyRouterFn);
router.use("/register",isEmptyRouterFn);


module.exports=router;