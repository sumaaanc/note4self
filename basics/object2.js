let Course ={
    courseName: "JavaScript",
    creditHrs: 6,
    fee: "Rs. 4000",
    mentorName: "Ronaldo",
    info: function(){
        console.log(`This is ${this.courseName} course and taught by ${this.mentorName}`)
    },
    "full name" : "Cristiano Ronaldo",   //valid but requires diffrent syntx to access not dot
    clubs: ["Real Madrid", "Man Utd", "Sporting"]

}

//object destructuring 

const {courseName: cname, mentorName: tname} = Course

// console.log(cname)
// console.log(tname)

//finding if the properties exist in the object or not 

let isTrue = Course.hasOwnProperty("clubs")
let isFalse = Course.hasOwnProperty("enrolled")

// console.log(isTrue);
// console.log(isFalse);

//to create single object from two different objects

let obj1 = {
    name: 'maya',
    age: 22
}
let obj2 = {
    name: 'ram',
    location: 'morang'
}

let newObj = Object.assign(obj1, obj2)
console.log(newObj)

//output : { name: 'ram', age: 22, location: 'morang'} 
//here we can see if both objects has same property name . the parperty value of source object overrides the target obj property

//the ideal way to write it to define target as the empty object as:

let newObje1 = Object.assign({}, obj1, obj2)  //{}=> target , obj1 and obj2 => source
console.log(newObje1);



