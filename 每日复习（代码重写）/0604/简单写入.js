const fs=require("fs");
const path=require("path");
const filePath=path.resolve(__dirname,"text.txt");
// fs.writeFile(filePath,"牵着你的手",{
//     flag:"a"
// },(err)=>{
//     if(err){
//         return;
//     }
//     console.log("文件写入成功");
// })

// fs.writeFile(filePath,"牵着手往前走",{
//     flag:"a"
// },(err)=>{
//     if(err){
//         return;
//     }
//     console.log('文件写入成功');
// })

fs.writeFile(filePath,"唱歌",{
    flag:"a"
},(err)=>{
    if(err){return;}
    console.log("写入成功");
})