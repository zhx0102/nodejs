const fs=require("fs");
const path=require("path");
// const filePath=path.resolve(__dirname,"text.txt");
const readFilePath=path.resolve(__dirname,"09.mp4");
const writeFilePath=path.resolve(__dirname,"01.mp4");

// //流式读取数据
// //创建可读流
// const rs=fs.createReadStream(readFilePath);
// //流式写入数据，创建可写流
// const ws=fs.createWriteStream(writeFilePath,{
//     flag:"a"
// });
// rs.on("data",(chunk)=>{
//     //chunk就是读取数据
//     ws.write(chunk);
// })
// //end事件，监督可读流关闭
// rs.on("end",()=>{
//     ws.close();
// })

// ws.on("close",()=>{
//     console.log("文件写入完毕");
// })


// const rs=fs.createReadStream(readFilePath);
// const ws=fs.createWriteStream(writeFilePath,{
//     flag:"a"
// });
// rs.on("data",(chunk)=>{
//     ws.write(chunk);
// })
// rs.on("end",()=>{
//     ws.close();
// })

// ws.on("close",()=>{
//     console.log("文件写入完毕");
// })

const rs=fs.createReadStream(readFilePath);
const ws=fs.createWriteStream(writeFilePath,{
    flag:"a"
});
rs.on("data",(chunk)=>{
    ws.write(chunk);
})
rs.on("end",()=>{
    ws.close();
})
ws.on("close",()=>{
    console.log("文件读取完毕");
})
