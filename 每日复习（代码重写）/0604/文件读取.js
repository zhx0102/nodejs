const fs=require("fs");
const path=require("path");
// const filePath=path.resolve(__dirname,"text.txt");
const filePath=path.resolve(__dirname,"09.mp4");

fs.readFile(filePath,(err,re)=>{
    if(err){
        return;
    }
    console.log(re);
    // console.log(re.toString());

})