const express = require("express");
const router = new express.Router();
const path = require("path");

const regRouterFn = (req,res,next)=>{
    const {username,password}=req.query;
    const userReg = /^[0-9a-zA-Z_]{1,10}$/;
    const passReg = /^[0-9a-zA-Z_]{1,10}$/;
    if (!userReg.test(username) || !passReg.test(password)) {
        //拼接err.ejs的路径
        const filePath = path.resolve(__dirname, "../views/err.ejs");
        return res.render(filePath, {
            errData: "账号和密码格式不对"
        })
    }

    next();

}

//处理账号密码正则校验
router.use("/login",regRouterFn);
router.use("/register",regRouterFn);




module.exports = router;