//spread operator basically seperate the elements of iterable array or string into individual elements

const newArr = [2,3,4,5,6,7]

const newArr1 = [100,101,102,103]

const newArr2 = [...newArr,...newArr1]  

// console.log(newArr2)

//spread operator(...) also can be used in function arguments where function may expect multiple values
//for example

function sum(x,y,z){
    return x+y+z;
}

const numbers= [2,4,5]
// console.log(sum(...numbers))


//rest parameters . used when function arguments are uncertain or takes unlimited arguments 
//basically converts the arguments as a single array

function lettersNm(...letters){
    for(let letter of letters){
        console.log(letter)
    }

}

// lettersNm('a','b','c')

// Some Array interface methods for conversion into array 

let npr = "play"
let npr1 = [5,10,20]

console.log(Array.isArray(npr));  //returns boolean if argument is array or not
console.log(Array.isArray(npr1));

//for the conversion into array 
 
let values = [1,2,3,4,[45,67],[0,1,6,7,[34,23,65]]]

let singleArr = values.flat(Infinity) //creates an array with all the sub array concatinated. parameter = depth 
console.log(singleArr);

let vowels = Array.from("AEIOU") //creates an array from the iterable parameter passed 
console.log(vowels);

let a= 12 ;
let b= 13;
let c= 5;

//to create single array from bunch of variable values 

const arrOf = Array.of(a,b,c)

console.log(arrOf)


