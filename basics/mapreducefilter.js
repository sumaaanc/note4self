//filter 

let books = [
    {
        title: "physics",
        genre: "science",
        published: 1955
    },
    {
        title: "chemestry",
        genre: "science",
        published: 2000
    },
    {
        title: "stats",
        genre: "maths",
        published: 1999
    },
    {
        title: "theory",
        genre: "literature",
        published: 2000
    },
    {
        title: "computer",
        genre: "science",
        published: 2010
    },
    {
        title: "biology",
        genre: "science",
        published: 1996
    },
    {
        title: "social",
        genre: "sociology",
        published: 2001
    },
    {
        title: "pomology",
        genre: "literature",
        published: 2021
    },
]

let scienceBooks = books.filter((item)=>{
    return item.genre === "science"  //this is for one condition . we can also check multiple conditions
})

let recentBooks = books.filter( (book) =>{
    return book.genre === "science" && book.published >= 2000  //now it filter with both conditions true
} )

//console.log(recentBooks);

//reduce only returns single output like the total sum , total count etc

let reducingArray = [100,200,200,100,200,100,100]

let totalSum = reducingArray.reduce((acc, currVal)=>{   // acc = 0 , acc = acc + currVal 
    return acc + currVal  
}, 0)  //0 here is initialization for the acc

console.log(totalSum)




