// const http=require("http");
// //使用http模块创建一个服务  参数是一个回调函数 监听客户端请求（当客用户端请求了这个服务器 则回调函数调用）
// const server = http.createServer((request,response)=>{
//     console.log("客户端请求");
//     //回调函数有两个参数，一个是请求对象request 一个是响应对象response
//     response.setHeader("Content-Type","text/plain;charset=utf-8");
//     // response的end方法就是返回响应，参数就是响应的内容
//     response.end("你真棒");
// })
// let port = "3000";
// let host = '192.168.17.66';
// //给当前创建的服务添加端口号和主机地址,第三个参数是个回调函数，当启动服务的时候调用
// server.listen(port,host,()=>{
//     console.log("服务器启动,请访问：" + `http://${host}:${port}`);
// })


// const http=require("http");
// const server = http.createServer((request,response)=>{
//     console.log("客户端请求");
//     response.setHeader("Content-Type","text/plain;charset=utf-8");
//     response.end("你真棒");
// })
// let port = "3000";
// let host = '192.168.17.66';
// server.listen(port,host,()=>{
//     console.log("服务器启动,请访问：" + `http://${host}:${port}`);
// })

const http=require("http");
const server = http.createServer((request,response)=>{
    console.log("客户端请求");
    response.setHeader("Content-Type","text/plain;charset=utf-8");
    response.end("你真棒");
})
let port = "3000";
let host = '192.168.17.66';
server.listen(port,host,()=>{
    console.log("服务器启动,请访问：" + `http://${host}:${port}`);
})