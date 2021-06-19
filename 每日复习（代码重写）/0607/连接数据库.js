//引入mongoose
const mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/mongo_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    createIndexes: true
});
//连接以后的触发的事件
mongoose.connection.once("open", (err) => {
    if (err) {
        console.log(err)
    }
    console.log("数据库连接成功")
})

