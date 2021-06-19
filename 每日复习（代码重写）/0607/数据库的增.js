
//引入mongoose
const mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/atguigu", {
    useNewUrlParser: true,
    useUnifiedTopplogy: true,
    createIndexes: true
});
//连接后的触发事件
mongoose.connection.once("open", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("数据库连接成功");
})
//创建核心对象
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: Number,
        unique: true,
        required: true
    },
    sex: String,
    // hobby:Array,
    hooby: [String], //限制每个值都为数组，且数组值都为字符串
    createTime: {
        type: Date,
        default: Date.now
    }
});
//创建model对象
const teacherModel=mongoose.model("teacher",teacherSchema);

//增
// const rs=teacherModel.create({
//     name:"石悦豪",
//     age:18,
//     sex:"男",
//     hobby:["唱","跳"],
//     createTime:Date.now()
// },err=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("数据添加成功")
// })
//增加多个文档
const rs=teacherModel.create([{
    name:"小王",
    age:33,
    sex:"男",
    hobby:["喝水","跳"],
    createTime:Date.now()
},
{
    name:"周五",
    age:12,
    sex:"男",
    hobby:["喝赔","rap"],
    createTime:Date.now()
}])
rs.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})