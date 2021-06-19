// const fs=require("fs");
// const path=require("path");
// //得到文件路径
// const filePath=path.resolve(__dirname,"text.txt");

// //异步打开文件
// fs.open(filePath,"a",(err,fd)=>{
//    //回调函数一般第一个参数都是err，因为nodejs遵循错误优先处理机制
//    if(err){
//        return;
//    }
//    //第二个参数fd就是我打开的文件id标识
//    //异步写入文件
//    fs.write(fd,"灰太狼",(err)=>{
//        if(err){
//            return;
//        }
//        //异步关闭文件
//        fs.close(fd,(err)=>{
//            if(err){
//                return;
//            }
//            console.log("文件关闭成功");
//        })
//    })
// });

// const fs=require("fs");
// const path=require("path");
// const filePath=path.resolve(__dirname,"text.txt");
// fs.open(filePath,"a",(err,fd)=>{
//     if(err){
//         return;
//     }
//     fs.write(fd,"懒洋洋",(err)=>{
//         if(err){
//             return;
//         }
//         fs.close(fd,(err)=>{
//             if(err){
//                 return;
//             }
//             console.log("文件关闭成功");
//         })
//     })
// })

const fs=require("fs");
const path=require("path");
const filePath=path.resolve(__dirname,"text.txt");
fs.open(filePath,"a",(err,fd)=>{
    if(err){return;}
    fs.write(fd,"慢羊羊吃草",(err)=>{
        if(err){return;}
        fs.close(fd,(err)=>{
            if(err){return;}
            console.log("文件关闭成功");
        })
    })
})