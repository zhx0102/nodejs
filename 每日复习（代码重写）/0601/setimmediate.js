// setImmediate(()=>{
//     console.log(2);
// })
// console.log(1);

console.log(3);
process.nextTick(()=>{
    //优先于所有代码执行
    console.log(2);
})
console.log(1);