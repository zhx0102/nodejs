
//引入mongoose
const mongoose = require("mongoose");
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


//4.创建model对象（集合）
//两个参数：集合的名字  集合的约束对象
const teacherModel = mongoose.model("teacher", teacherSchema);

//把创建的schema对象暴露出去
module.exports=teacherModel;
