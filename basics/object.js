
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

//object properties can be accessed in multiple ways as:

console.log(Course.courseName)
console.log(Course["mentorName"])   
console.log(Course.info())
console.log(Course["full name"]) 
console.log(Course.clubs[0])

//for modifying the object properties :

Course.mentorName = "Cristiano"

console.log(Course.mentorName)


