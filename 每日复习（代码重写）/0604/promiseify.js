const fs=require("fs");
const path=require("path");
// const filePath=path.resolve(__dirname,"text.txt");
const filePath=path.resolve(__dirname,"09.mp4");



// const p1=new Promise((resolve,reject)=>{
//     fs.readFile(filePath,(err,re)=>{
//         if(err){
//             reject(err);
//             return;
//         }
//         console.log(re);
//         resolve(re);
//         // console.log(re.toString());
    
//     })
// })
// p1.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// const{
//     promisify
// }=require("util");
// const readFile=promisify(fs.readFile);
// console.log(readFile);

// readFile(filePath).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


const{
    promisify
}=require("util");
const readFile=promisify(fs.readFile);
console.log(readFile);

readFile(filePath).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})


