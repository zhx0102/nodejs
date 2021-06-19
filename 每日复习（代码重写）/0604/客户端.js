// const http=require("http");
// //http有一个request的方法请求地址
// const url = "http://127.0.0.1:3000";
// const request = http.request(url,(response)=>{
//     //回调函数有一个参数就是请求服务
//     console.log(response);

//     console.log(response.statusCode);
//     //得到响应状态码
//     //响应数据是一个可读流，通过data方法监听
//     response.on("data",(chunk)=>{
//         console.log(chunk.toString());
//     })

//     response.on("end",(chunk)=>{
//         console.log("响应接收完毕");
//     })
// })
// //创建的客户端有一个end方法可以发送请求
// //发送请求
// request.end();

// const http=require("http");
// const url = "http://127.0.0.1:3000";
// const request = http.request(url,(response)=>{
//     console.log(response);

//     console.log(response.statusCode);
//     response.on("data",(chunk)=>{
//         console.log(chunk.toString());
//     })

//     response.on("end",(chunk)=>{
//         console.log("响应接收完毕");
//     })
// })
// request.end();


const http=require("http");
const url = "http://127.0.0.1:3000";
const request = http.request(url,(response)=>{
    console.log(response);

    console.log(response.statusCode);
    response.on("data",(chunk)=>{
        console.log(chunk.toString());
    })

    response.on("end",(chunk)=>{
        console.log("响应接收完毕");
    })
})
request.end();
