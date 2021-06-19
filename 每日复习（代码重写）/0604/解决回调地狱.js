// const fs=require("fs");
// const { resolve } = require("path");
// const path=require("path");
// const filePath=path.resolve(__dirname,"text.txt");
// (async()=>{
//    const fd = await new Promise((resolve,reject)=>{
//        fs.open(filePath,"a",(err,fd)=>{
//            if(err){
//                reject(err);
//                return;
//            }
//            resolve(fd);
//        })
//    })
//    await new Promise((resolve,reject)=>{
//        fs.write(fd,"红太狼",(err,fd)=>{
//            if(err){
//                reject(err);
//                return;
//            }
//            resolve(fd);
//        })
//    })
//    const re = await new Promise((resolve,reject)=>{
//        fs.close(fd,(err)=>{
//            if(err){
//                reject(err);
//                return;
//            }
//            resolve("全部完成");
//        })
//    })
//    return re;
// })()
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// const fs=require("fs");
// const { resolve } = require("path");
// const path=require("path");
// const filePath=path.resolve(__dirname,"text.txt");
// (async()=>{
//    const fd = await new Promise((resolve,reject)=>{
//        fs.open(filePath,"a",(err,fd)=>{
//            if(err){
//                reject(err);
//                return;
//            }
//            resolve(fd);
//        })
//    })
//    await new Promise((resolve,reject)=>{
//        fs.write(fd,"红太狼",(err,fd)=>{
//            if(err){
//                reject(err);
//                return;
//            }
//            resolve(fd);
//        })
//    })
//    const re = await new Promise((resolve,reject)=>{
//        fs.close(fd,(err)=>{
//            if(err){
//                reject(err);
//                return;
//            }
//            resolve("全部完成");
//        })
//    })
//    return re;
// })()
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

const fs=require("fs");
const { resolve } = require("path");
const path=require("path");
const filePath=path.resolve(__dirname,"text.txt");
(async()=>{
   const fd = await new Promise((resolve,reject)=>{
       fs.open(filePath,"a",(err,fd)=>{
           if(err){
               reject(err);
               return;
           }
           resolve(fd);
       })
   })
   await new Promise((resolve,reject)=>{
       fs.write(fd,"小灰灰",(err,fd)=>{
           if(err){
               reject(err);
               return;
           }
           resolve(fd);
       })
   })
   const re = await new Promise((resolve,reject)=>{
       fs.close(fd,(err)=>{
           if(err){
               reject(err);
               return;
           }
           resolve("全部完成");
       })
   })
   return re;
})()
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})