console.log(1)
function 买大(){
    console.log(2)
    return new Promise(function(resolve, reject){  //传了参数当场执行
        console.log(3)
        setTimeout(function(){
            console.log(4)
            let random = Math.random()
            if(random > 0.5){
                resolve()
            }else{
                reject()
            }
        },1000)
    })


}

console.log(5)
let aPromise = 买大()
console.log(6)
aPromise.then(function(bigOrSmall){
    console.log(7)
    console.log('win')
},function(){
    console.log(7)
    console.log('lose')
})

console.log(8)


//改造成promise的过程直接背下来，不要去理解
//promise的执行顺序，面试题，promise的回调一定会在下一个循环当中执行，这是异步

let a = new Promise(function(resolve, reject){  //钩子
    setTimeout(function(){
        let random = Math.random()
        if(random > 0.5){
            resolve()
        }else{
            reject()
        }
    },1000)
})

a.then(function(){console.log('大')},function(){console.log('小')})   //回调