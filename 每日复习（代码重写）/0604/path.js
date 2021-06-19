//path.resolve()
//可以将路径或路径片段的序列解析为绝对路径
const path = require("path");
const filePath1=path.resolve("./index.txt");
console.log(filePath1);
//根据当前路径得到其他绝对路径
const filePath2=path.resolve("./","01.txt");
console.log(filePath2);

//需求1：在path.js当前文件获取process.js的绝对路径
const tbxrPath=path.resolve("./0603","./0603/buff.js");
console.log(tbxrPath);

//需求：在path.js获取其他目录文件的绝对路径
const otherPath=path.resolve(__dirname,"01.txt");
console.log(otherPath);