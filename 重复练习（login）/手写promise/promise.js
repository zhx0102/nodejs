function myPromise(exetor){
    const _this = this;
    _this.status = 'pending';
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

    exetor(resolve,reject);
}

myPromise.prototype.then = function(onResolved,onRejected){
    const _this = this;
    onResolved = typeof onResolved !== "function"?function(value){
        resolve(value);
    }:onResolved;
    onRejected = typeof onRejected !== "function"?function(reason){
        throw reason;
    }:onRejected;

    return new myPromise((resolve,reject)=>{
        _this.callback.onResolved = function(value){
            try{
                const re = onResolved(value);
                if(re instanceof myPromise){
                    re.then((value)=>{
                        resolve(value);
                    },(reason)=>{
                        resolve(reason);
                    })
                }else{
                    resolve(re);
                }
            }catch(e){
                reject(e);
            }
        }

        _this.callback.onResolved = function(reason){
            try{
                const re = onResolved(reason);
                if(re instanceof myPromise){
                    re.then((value)=>{
                        resolve(value);
                    },(reason)=>{
                        resolve(reason);
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
myPromise.prototype.catch =function(onResolved){
    return this.then(null,onResolved);
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