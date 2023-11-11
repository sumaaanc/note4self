//iteratiopn in the array 
//forof is preferred for the iteration in array 

let myArr = [1,2,43,66,76,43]

for (const num of myArr) {   //using forof the iterator => value of array index
    //console.log(num)
}

for (const i in myArr) {    //here iterator i => the index of array
    //console.log(i);
}


//for in is used to iterate on objects 

const myObj = {
    name: "rob",
    age: 11,
    grade: 2,
    aim: "coder"
}

for (const key in myObj) {
    if (Object.hasOwnProperty.call(myObj, key)) {
        const element = myObj[key];  //only the values accessed 
       // console.log(element)
    }
}
for (const key in myObj) {
    //console.log(`the key is ${key} => ${myObj[key]}`);
}


let users = [
    {
        id: 1,
        name: "rob",
        hobbies: ["football", "movies", "sleeping"]
    },
    {
        id: 2,
        name: "bob",
        hobbies: ["football", "vollyball", "sleeping"]
    },
    {
        id: 3,
        name: "rex",
        hobbies: ["football", "cricket", "sleeping"]

    },
    {
        id: 4,
        name: "vej",
        hobbies: ["football", "movies", "sleeping"]
    },
    
]

//to get all the user name from the objects of array 
console.log(`The name of user are:`)
users.forEach((item)=>{
    console.log(`ID: ${item.id} and NAME: ${item.name} and his hobbies are ${item.hobbies.map((ho)=> ho)}`);
})

//this will also work as same as forEach loop

// users.map((item)=>{
//     console.log(`ID: ${item.id} and NAME: ${item.name} and his hobbies are ${item.hobbies.map((ho)=> ho)}`);
// })







