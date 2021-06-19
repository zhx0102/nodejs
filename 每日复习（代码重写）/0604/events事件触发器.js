// const EventEmitter=require("events");
// //创建子类继承父类EventEmitter
// class MyEventEmitter extends EventEmitter{};
// //实例化子类
// const emitter=new MyEventEmitter();
// //绑定事件
// //对象有一个eventEmitter.on()函数，用于将一个或多个函数绑定到命名事件上
// emitter.on("myClick",()=>{
//     console.log("嘿，你调用了我myClick");
// })
// //eventEmitter.emit()用于触发函数
// setTimeout(()=>{
//     emitter.emit("myClick");
// },2000);

// const EventEmitter=require("event");
// class myEventEmitter extends EventEmitter{};
// const emitter=new myEventEmitter();
// emitter.on("myClick",()=>{
//     console.log("嘿，你调用了我的myClick");
// })
// setTimeout(()=>{
//     emitter.emit("myClick");
// },2000)

const EventEmitter=require("events");
class myEventEmitter extends EventEmitter{};
const eventer=new myEventEmitter();
eventer.on("myClick",()=>{
    console.log("你调用了我的myClick");
});
setTimeout(()=>{
    eventer.emit("myClick");
},2000);