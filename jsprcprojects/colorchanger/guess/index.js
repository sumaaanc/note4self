const inputVal = document.querySelector('.inputField')
const submitBtn = document.querySelector('.submitBtn')
const guessVal = document.querySelector('.guessVal')
const remainGuess = document.querySelector('.remainGuess')
const resultField = document.querySelector('.result')
const loworhigh = document.querySelector('.loworhigh')


const p = document.createElement('p')

let prevGuess = []
let guessCount = 1

let playGame = true 

if(playGame){
    submitBtn.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(inputVal.value);
        validateGuess(guess);
        console.log(guess);
    })
}

function validateGuess(guess){
    //validates the input
}
function checkGuess(guess){
    //checks with random number
}
function displayGuess(guess){
    //displays the previous guesses
}
function displayMessage(message){
    //displays message 
}


const randomNbr = parseInt(Math.random() * 100 + 1);
console.log(randomNbr)


