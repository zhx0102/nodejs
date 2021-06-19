function myPromise(exetor){
    //封装一个myPromise函数

    //保存指向实例化对象的this
    const _this = this;

    _this.status = "pending";
    _this.value = undefined;
    _this.callback = {};

    function resolve(value){
        if(_this.status !== "pending") return;
        _this.status = "resolve";
        _this.value = value;
        setTimeout(()=>{
            _this.callback.onResolved&&_this.callback.onResolved();
        })
    }
    function reject(reason){
        if(_this.status !== "pending") return;
        _this.status = "reject";
        _this.value = reason;
        setTimeout(()=>{
            _this.callback.onRejected&&_this.callback.onRejected();
        })
    }

    //调用exetor函数
    exetor(resolve,reject);
}
myPromise.prototype.then = function(onResolved,onRejected){
    const _this = this;
    onRejected = typeof onRejected !== "function" ? function(reason){
        throw reason;
    }:onRejected;
    onResolved = typeof onRejected !== "function" ? function(value){
        throw value;
    }:onResolved;
    return new myPromise((resolve,reject)=>{
        _this.callback.onResolved = function(value){
            try{
                const re = onResolved(value);
                if(re instanceof myPromise){
                    re.then((value)=>{
                        resolve(value);
                    },(reason)=>{
                        reject(reason);
                    })
                }else{
                    resolve(re);
                }
            }catch(e){
                reject(e);
            }
        }
        _this.callback.onRejected = function(reason){
            try{
                const re = onRejected(reason);
                if(re instanceof myPromise){
                    re.then((value)=>{
                        resolve(value);
                    },(reason)=>{
                        reject(reason);
                    })
                }else{
                    resolve(re);
                }
            }catch(e){
                reject(e);
            }
        }
    })
}

myPromise.prototype.catch = function(onRejected){
    return this.then(null,onRejected);
}

myPromise.prototype.finally = function(onResolved){
    return this.then((value)=>{
        const re = onResolved();
        if(re instanceof myPromise){
            return this.then(()=>{
                return value;
            })
        }else{
            return value;
        }
    },(reason)=>{
        const re = onResolved();
        if(re instanceof myPromise){
            return this.then(()=>{
                throw reason;
            })
        }else{
            throw reason;
        }
    })
}

myPromise.resolve = function(value){
    return new myPromise((resovle,reject)=>{
        if(re instanceof myPromise){
            value.then(()=>{
                resolve(value);
            },(reason)=>{
                reject(reason);
            })
        }else{
            resolve(value);
        }
    })
}
myPromise.reject = function(reason){
    return new myPromise((resolve,reject)=>{
        reject(reason);
    })
}

myPromise.all = function(promises){
    const promisesArr = [];
    const promisesLen = Promises.length;
    let count = 0;
    promises.forEach((promise,index)=>{
        promise.then((value)=>{
            count++;
            promisesArr[index] = value;
            if(count === promisesLen){
                this.resolve(promisesArr);
            }
        },(reason)=>{
            reject(reason);
        })
    })
}

myPromise.allSettled = function(promises){
    const promisesArr = [];
    const promisesLen = Promises.length;
    let count = 0;
    promises.forEach((promise,index)=>{
        promise.then((value)=>{
            count++;
            promisesArr[index] ={
                status:"resolve",
                value
            }
            if(count === promisesLen){
                this.resolve(promisesArr);
            }
        },(reason)=>{
            count++;
            promisesArr[index] ={
                status:"reject",
                reason
            };
            if(count === promisesLen){
                this.resolve(promisesArr);
            }
        })
    })
}