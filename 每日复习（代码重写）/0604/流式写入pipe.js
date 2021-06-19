// const { RSA_NO_PADDING } = require("constants");
// const fs=require("fs");
// const path=require("path");
// // const filePath=path.resolve(__dirname,"text.txt");
// const readFilePath=path.resolve(__dirname,"09.mp4");
// const writeFilePath=path.resolve(__dirname,"01.mp4");
// const rs=fs.createReadStream(readFilePath);
// //流式写入数据，创建可写流
// const ws=fs.createWriteStream(writeFilePath,{
//     flag:"a"
// });
// //pipe会持续性消费可读流数据
// //将可读流数据写入到可写流中
// //会自动关闭可写流
// rs.pipe(ws);
// //监听可读流
// rs.on("end",(err)=>{
//     console.log("读取完成");
// })

// const { RSA_NO_PADDING } = require("constants");
// const fs=require("fs");
// const path=require("path");
// const readFilePath=path.resolve(__dirname,"09.mp4");
// const writeFilePath=path.resolve(__dirname,"01.mp4");
// const rs=fs.createReadStream(readFilePath);
// const ws=fs.createWriteStream(writeFilePath,{
//     flag:"a"
// });
// rs.pipe(ws);
// rs.on("end",(err)=>{
//     console.log("读取完成");
// })

const { RSA_NO_PADDING } = require("constants");
const fs=require("fs");
const path=require("path");
const readFilePath=path.resolve(__dirname,"09.mp4");
const writeFilePath=path.resolve(__dirname,"01.mp4");
const rs=fs.createReadStream(readFilePath);
const ws=fs.createWriteStream(writeFilePath,{
    flag:"a"
});
rs.pipe(ws);
rs.on("end",(err)=>{
    console.log("读取完成");
})