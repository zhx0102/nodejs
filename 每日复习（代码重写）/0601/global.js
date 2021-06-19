console.log(global);
setInterval(()=>console.log(1),1000);
setTimeout(() => console.log(2));
queueMicrotask(()=>console.log(3));
setImmediate(()=>console.log(4));