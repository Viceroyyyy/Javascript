# Projects related to DOM 
## Project Link

[Click Here](https://github.com/Viceroyyyy/Javascript/tree/main/07_projects)

# Project1/Learning Markdown File

## Project 1 Solution 
```javascript

 const buttons = document.querySelectorAll('.button');
 const body = document.querySelector('body');
// console.log(button);
 buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id ==='grey')
            body.style.backgroundColor = e.target.id;
        else if(e.target.id ==='white')
            body.style.backgroundColor = e.target.id;
        else if(e.target.id ==='blue')
            body.style.backgroundColor = e.target.id;
        else if(e.target.id ==='yellow')
            body.style.backgroundColor = e.target.id;
    });
 });
 ```
 ## Project 2 Solution

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const finalresult = document.querySelector('#finalresult');
    

    if(height < 0 || height === "" || isNaN(height))
    {
        result.innerHTML =`Please enter a valid height: ${height}`;
    
    } 
    else if(weight < 0 || weight === "" || isNaN(weight))
    {
        result.innerHTML =`Please enter a valid weight: ${weight}`;
    }
    else{
       const  BMI =  (weight/((height*height)/10000)).toFixed(2);
       //To print the calcukated BMI
       result.innerHTML =`<span>Your BMI is : ${BMI}</span>`;

       if(BMI<18.6)
        finalresult.innerHTML = `You are Underweight according to your BMI`;
        else if (BMI>=18.6 && BMI<=24.9)
            finalresult.innerHTML = `You are Healthy according to you BMI`;
        else 
        finalresult.innerHTML = `You are Overweight. Please pay attention to you health`;
    }

    //To print the final result based on Weight Guide

    
});
```
## Project 3 Solution

```javascript
const clock = document.getElementById('clock');
// const clock = document.QuerySelector('#clock');

setInterval(function() {
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();

},1000);
```

## Project 4 Solution

```javascript
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


```



