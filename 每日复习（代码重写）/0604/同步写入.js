// const fs=require("fs");
// const path=require("path");

// //得到要写入文件的绝对路径
// const filePath=path.resolve(__dirname,"text.txt");
// console.log(filePath);
// //同步打开文件
// //第二个参数是文件系统的flag，默认r代表可写。如果没有这个文件会报错
// const fd = fs.openSync(filePath,"a");
// console.log(fd);//返回值是一个当前文件的id标识
// //同步写入
// fs.writeSync(fd,"喜羊羊被吃了");
// //关闭文件
// fs.closeSync(fd);

const fs=require("fs");
const path=require("path");
const filePath=path.resolve(__dirname,"text.txt");
console.log(filePath);
const fd=fs.openSync(filePath,"a");
fs.writeSync(fd,"鸡公煲");
fs.closeSync(fd);