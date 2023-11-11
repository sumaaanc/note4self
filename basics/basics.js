//type conversion 

//string to number
let salary = "123";
console.log(typeof salary);

let convertedNum = Number(salary);
console.log(typeof convertedNum)

// "123" => 123
//  123abc => NaN
// "abcdef" => NaN

// boolean to number 

let isTrue = true 
let isFalse = false
let boolVal = Number(isTrue)
let boolVals = Number(isFalse)

console.log(boolVal);   //for boolean true is converted to 1
console.log(boolVals);  // and false is converted to zero 


// number to boolean 

let x = 1
let y = 0

let boolean = Boolean(x)
let anotherBol = Boolean(y)

console.log(boolean)
console.log(anotherBol)


