//fetch api returns promise
const URL = 'https://jsonplaceholder.typicode.com/users'

fetch(URL)  //returns promise
.then((response)=> {
    return response.json()
})
.then((data)=> {console.log(data)})
.catch((error)=> {console.log(error)})