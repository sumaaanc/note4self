//switch statement  in IIFE => immediately invoked function expression
((number)=>{
    switch (number) {
        case 2:
            console.log(`this is case ${number}`)
            break;
        case 3:
            console.log(`this is case ${number}`)
            break;
        case 4:
            console.log(`this is case ${number}`)
            break;
        case 5:
            console.log(`this is case ${number}`)
            break;
        case 6:
            console.log(`this is case ${number}`)
            break;
    
        default:
            console.log("This is the default execution");
            break;
    }
})(2)


//to check if the array is empty or not 

let arr = [1,2,3,4]
if(!arr.length == 0){
    console.log("Array is not empty")
}else{
    console.log("array is empty")
}

//to check if the object is empty or not 

let myObj = {
    name: "kushal",
    age: 33
}

if(Object.keys(myObj).length == 0){
    console.log("object is empty")
} else{
    console.log('object is not empty')
}
