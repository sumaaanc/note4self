
const someOperation = (callback)=> {
    console.log("this is before call back is made");
    let a = 5
    let b = 4
    callback(a,b)
}

someOperation((a,b)=>{
    console.log(a + b)
})







