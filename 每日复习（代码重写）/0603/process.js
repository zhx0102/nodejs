console.log(process.argv);
//查看node启动时，传递命令行参数
//是一个数组，第一个参数是node命令的位置
//第二个是当前文件路径
//后边参数是用户启动时启动的

const proArr=process.argv;
if(proArr[2]==='start'){
    console.log('开始启动服务');

}else if(proArr[2]==='end'){
    console.log('关闭服务');
}else{
    console.log('请重新传递任务');
}

console.log(process.argv0);

//process.cwd();
//node的工作目录，而不是当前文件目录

console.log(process.cwd());

let i=0;
setInterval(()=>{
    console.log(i++);
    if(i>4){
        process.exit('');
    }
},1000);