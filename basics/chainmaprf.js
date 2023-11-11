//chaining map,reduce or filter 


let myArr = [1,2,3,4,5,6,7,8,9,10]

let result = myArr
            .map( (num)=> num * 3 )    //the result i.e array it produce will be passed to the next chained function i.e filter here 
            .filter((num)=> num%2 === 0)  //after performing the map and filter then only array gets returned 


            //we can perform the chaining like above sa much as we required 
console.log(result)