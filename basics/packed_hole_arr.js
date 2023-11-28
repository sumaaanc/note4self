//Internal optimization on array in js

//packed and holey array 
//packed => continuous (value in each index) => more optimized
//holey => values missing in some index => less optimized

const holeyArr = [1,2, ,4, ,5]

console.log(holeyArr.length);
holeyArr[2]= 3
console.log(holeyArr.length);



//SMI ELEMENTS
//DOUBLE
//PACKED