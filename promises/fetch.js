//fetch api returns promise
const URL = 'https://jsonplaceholder.typicode.com/users'

// fetch(URL)  //returns promise
// .then((response)=> {
//     return response.json()  //string ma aako response lai json ma convert gareko 
// })
// .then((data)=> {console.log(data)})
// .catch((error)=> {console.log(error)})


//same thing from using async/await 

async function getAllUser(){
    try {
        const response = await fetch(URL)
        const data = await response.json()
        const allUserName = data.map((item)=>{
            return (`ID:${item.id} Username: ${item.username}`)
        })
        console.log(allUserName)
        
    } catch (error) {
        console.log('Error: ' + error)
    }
    

}
getAllUser();