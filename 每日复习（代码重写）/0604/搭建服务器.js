// const http=require("http");
// const server = http.createServer((request,response)=>{
//     console.log("客户端请求");
//     response.setHeader("Content-Type","text/plain;charset=utf-8");
//     response.end("~~~~~~~~~~~~~~服务器~~~~~~~~~~");
// })
// server.listen("3000","192.168.17.66",()=>{
//     console.log("服务器启动");
// })

const http=require("http");
const server = http.createServer((request,response)=>{
    console.log("客户端请求");
    response.setHeader("Content-Type","text/plain;charset=utf-8");
    response.end("~~~~~~~~~~~~~~搭服务器~~~~~~~~~~~");
})
server.listen("3000","192.168.17.66",()=>{
    console.log("服务器启动");
})