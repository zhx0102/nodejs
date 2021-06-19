const buf1=Buffer.alloc(10);
console.log(buf1);

const buf2=Buffer.allocUnsafe(20);
console.log(buf2);

const buf3=Buffer.from('郑惠娴牛逼');
console.log(buf3);

console.log(buf3.toString())