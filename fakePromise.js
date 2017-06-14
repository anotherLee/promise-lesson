function myPromise(fn){

}

myPromise.prototype.then = function(){}

let p = new myPromise(function(){})
console.log(p)