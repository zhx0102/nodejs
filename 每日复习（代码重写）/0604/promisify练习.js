// const fs=require("fs");
// const path=require("path");
// const filePath=path.resolve(__dirname,'text.txt');
// const {promisify}=require("util");
// //使用promisify处理异步方法
// const open=promisify(fs.open);
// const write=promisify(fs.write);
// const close=promisify(fs.close);
// (async()=>{
//     const fd=await open(filePath,"a");
//     await write(fd,"今天天气不错");
//     const re = await close(fd);
//     return "写入成功";
// })()
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// const fs=require("fs");
// const path=require("path");
// const filePath=path.resolve(__dirname,'text.txt');
// const {promisify}=require("util");
// const open=promisify(fs.open);
// const write=promisify(fs.write);
// const close=promisify(fs.close);
// (async()=>{
//     const fd=await open(filePath,"a");
//     await write(fd,"今天天气不错");
//     const re = await close(fd);
//     return "写入成功";
// })()
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

const fs=require("fs");
const path=require("path");
const filePath=path.resolve(__dirname,'text.txt');
const {promisify}=require("util");
const open=promisify(fs.open);
const write=promisify(fs.write);
const close=promisify(fs.close);
(async()=>{
    const fd=await open(filePath,"a");
    await write(fd,"今天天气不错");
    const re = await close(fd);
    return "写入成功";
})()
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})