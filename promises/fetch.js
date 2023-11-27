//fetch api returns promise
const URL = 'https://jsonplaceholder.typicode.com/users'

// fetch(URL)  //returns promise
// .then((response)=> {
//     return response.json()  //string ma aako response lai json ma convert gareko 
// })
// .then((data)=> {console.log(data)})
// .catch((error)=> {console.log(error)})


//same thing from using async/await 

// async function getAllUser(){
//     try {
//         const response = await fetch(URL)
//         const data = await response.json()
//         const allUserName = data.map((item)=>{
//             return (`ID:${item.id} Username: ${item.username}`)
//         })
//         console.log(allUserName)
        
//     } catch (error) {
//         console.log('Error: ' + error)
//     }
    

// }
// getAllUser();

//getRndomUser async/await practice

 async function getRandomUser(){
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data.results[0].name.first)
        console.log(data.info.version)
    } catch (error) {
        console.log("Error:" + error)
    }
}

getRandomUser()

//now same thing in promises

const sendrequest = new Promise((resolve, reject)=>{
    let error = 'error occured'
    const response = fetch('https://randomuser.me/api/')
    resolve(response)
    reject(error)
})

sendrequest.then((data)=>{
    return data.json()
})
.then((data)=>{
    console.log(data.results[0].name.first)
    console.log(data.info.version)
})
.catch((error)=> console.log(error))
