const fs=require("fs");
const path=require("path");
const filePath=path.resolve(__dirname,"text.txt");

// //流式写入创建可写流
// const fd = fs.createWriteStream(filePath,{
//     flsg:"a"
// });
// //可写流有一个open和close事件，
// //当文件打开可写流和关闭时触发
// fd.on("open",()=>{
//     console.log("可写流打开，开始写入");

// })
// fd.on("close",()=>{
//     console.log("可写流关闭，停止写入");

// })
// fd.write("锄禾日当午");
// fd.write("汗滴禾下土");
// fd.close();

// //流式写入，创建可写流
// const fd=fs.createWriteStream(filePath,{
//     flag:"a"
// });
// //可写流有open和close事件，分别在文件打开和关闭时触发
// fd.on("open",()=>{
//     console.log("可写流打开，开始写入");
// })
// fd.on("close",()=>{
//     console.log("写入流关闭，停止写入");
// })
// //可以往写入流中赛数据
// fd.write("锄禾日当午");
// fd.close();

//流式写入，创建可写流
const fd=fs.createWriteStream(filePath,{
    flag:"a"
});
//可写流有open和close事件，分别在文件打开和关闭时触发
fd.on("open",()=>{
    console.log("可写流打开，开始写入");
})
fd.on("close",()=>{
    console.log("写入流关闭，停止写入");
})
//可以往写入流中赛数据
fd.write("锄禾日当午");
fd.close();
