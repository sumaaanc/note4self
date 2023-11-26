//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const createPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async operation....")
        resolve() 
    },2000)
})

createPromise.then(()=>{
    console.log("Promise consumed.....")
})

//object can be passed through the resolve({}). which is received by the .then()

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async operation....")
        resolve({username: 'lyemonx', password: 'ggggg'}) 
    },2000)
})

promiseOne.then((data)=>{
    console.log(data);
    console.log("Promise consumed.....")
    console.log(`username: ${data.username} and password: ${data.password}`);
})

//we can also perform chaining while consuming the promise. 
//the first .then returned value will be received by the next .then 

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async operation....")
        resolve({username: 'lyemonx', password: 'ggggss'}) 
    },2000)
})

promiseTwo.then((data)=>{
    console.log(data);
    return data.username
}).then((data)=> console.log(data))

//promise can be resolved or rejected . resolve basically means the intended operation like reading from the database is completed
//rejected basically means their got some error

//resolve => .then()
//reject => .catch()

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'lyemonx', password: 'ggggg'}) 
        }else{
            reject('Error occured')
        }
    },2000)
})

promiseThree
.then((data)=>{
    console.log(data);
    return data.username
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error))
.finally(()=> console.log("this is executed always"))

//there is also .finally which is executed whether the promise is resolved or rejected




