let randomNum = parseInt(Math.random()*100+1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const lowOrHi = document.querySelector('.lowOrHi');
const remaining = document.querySelector('.lastResult');
const guessSlot = document.querySelector('.guesses');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });}
// else{
//     endGame();
// }

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Guessed value is not a number.`);
    }
    else if(guess<1)
    {
        alert(`Guess value is less than 1`);
    }
    else if(guess > 100)
    {
        alert(`Guess value is more than 100`);
    }
    else{
        prevGuess.push(guess);
        if(numGuess > 10){
            cleanUP(guess);
            displayMessage(`Game Over!! Random Number was ${randomNum}`);
            endGame();
        }else
            {
        checkGuess(guess);
        cleanUP(guess);
            }
        
    }
}

function checkGuess(guess){
    if(guess === randomNum)
    {
        displayMessage(`Congratulations!! You guessed it right!`);
        endGame();
    }
    else if (guess < randomNum)
    {
        displayMessage(`Value is too LOW!`);
    }
    else if(guess > randomNum)
        displayMessage(`Value is too HIGH!`);
    

}

function cleanUP(guess){
    userInput.value = '';
    if(numGuess <= 10)
    {numGuess++;
        guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${11-numGuess}`;
    }
}

function displayMessage(message){
    lowOrHi.innerHTML =`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''; //Cleaning input spaces
    userInput.setAttribute('disabled',''); //So that user cannot enter any guesses again
    playGame = false; //Setting playGame to false so that user cannot play any further
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame"><u>Start New Game</u></h2>`;
    startOver.appendChild(p);//Inserts the paragraph<p> tag inside the div with id=result paras 
    newGame();
}
function newGame(){
    const newGame = document.querySelector('#newgame');
    newGame.addEventListener('click',function(e){
    randomNum = parseInt(Math.random()*100+1);
    prevGuess = [];
    guessSlot.innerHTML = '';
    numGuess = 1;
    remaining.innerHTMl = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
    playGame = true;
    });
}

