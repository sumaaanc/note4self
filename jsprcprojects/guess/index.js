const inputVal = document.querySelector('.inputField')
const submitBtn = document.querySelector('.submitBtn')
const guessVal = document.querySelector('#guessVal')
const remainGuess = document.querySelector('#remainGuess')
const resultField = document.querySelector('.result')
const loworhigh = document.querySelector('.loworhigh')


let randomNbr = parseInt(Math.random() * 100 + 1);
console.log(randomNbr)


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
    if(isNaN(guess)){
        alert("please enter a valid number")
    } else if(guess < 1 || guess > 100){
        alert("please enter number between 1 - 100")
    }else {
        prevGuess.push(guess);
        if(guessCount == 10){
            displayGuess(guess);
            displayMessage(`Game Over, Random number generated was ${randomNbr}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    //checks with random number
    if(guess === randomNbr){
        displayMessage(`you guessed it right !!!!!`);
        endGame();
    } else if (guess < randomNbr){
        displayMessage(`The random number is higher than guess`);
    }else{
        displayMessage(`The random number is less than guess`);
    }
}

function displayGuess(guess){
    inputVal.value = '';
    guessVal.innerHTML += `${guess} `;
    guessCount++;
    remainGuess.innerHTML = `${11 - guessCount}`;

}
function displayMessage(message){
    //displays message 
    loworhigh.innerHTML = `<h3>${message}</h3>`;

}

function endGame(){
    inputVal.value = '';
    inputVal.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h4 id="newgame">New Game</h4>`;
    resultField.appendChild(p);
    playGame = false;
    newGame();

}

function newGame(){
    const newGameBtn = document.querySelector('#newgame');
    newGameBtn.addEventListener('click', (e)=>{
        randomNbr = parseInt(Math.random() * 100 + 1);
        
        prevGuess = [];
        guessCount = 1;
        guessVal.innerHTML = '';
        remainGuess.innerHTML = `${11 - guessCount}`;
        inputVal.removeAttribute('disabled');
        resultField.removeChild(p);
        loworhigh.innerHTML = '';
        playGame = true;
    })

}





