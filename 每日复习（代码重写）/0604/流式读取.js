const fs=require("fs");
const path=require("path");
// const filePath=path.resolve(__dirname,"text.txt");
const filePath=path.resolve(__dirname,"09.mp4");

// //创建可读流
// const rs = fs.createReadStream(filePath);
// //rs是打开了可读流
// //可读流每次最大释放数据大小是64kb，将会一直持续释放数据
// //可读流data方法就是来消费可读流的
// rs.on("data",(chunk)=>{
//     //chunk就是持续读取的数
//     //只要读取数据，data就会触发
//     console.log(chunk);
// })
// rs.on("end",()=>{
//     console.log("数据读取完毕");
// })

// //创建可读流
// const rs = fs.createReadStream(filePath);
// rs.on("data",(chunk)=>{
//     console.log(chunk);
// })
// rs.on("end",()=>{
//     console.log("数据读取完毕");
// })


//创建可读流
const rs = fs.createReadStream(filePath);
rs.on("data",(chunk)=>{
    console.log(chunk);
})
rs.on("end",()=>{
    console.log("数据读取完毕");
})