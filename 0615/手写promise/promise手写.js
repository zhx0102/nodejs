function myPromise(exector){
    //保存this指向实例化对象
    const _this = this;
    _this.status = "pending";
    _this.value = undefined;
    //封装resolve和reject函数
    function resolve(value){
        if(_this.status!=="pending") return;
        _this.status = "resolve";
        _this.value = value;
    }
    function reject(reason){
        if(_this.status!=="pending") return;
        _this.status = "reject";
        _this.value = reason;
    }
    exector(resolve,reject);
}