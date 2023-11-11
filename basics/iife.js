//Immidetely invoked function expression 

//IIFE is invoked as the program runs

(function add(){
    console.log( 2 + 2) 
})();  //if there are multiple IIFE in same file . it is must to have ';' at the end to execute next IIFE too


//for parameter and agrument 

(function addition(num1 , num2){
        console.log(num1+num2)
})(4,5);


//can also be defined as arrow function 

(()=>{
    console.log(`DB CONNECTED`)
})();

//parameter and argument in arrow function 

((x,y)=>{
    console.log(x + y)
})(3,5)






