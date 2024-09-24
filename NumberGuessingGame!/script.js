
const guessInput = document.querySelector(".myNumber");
const btn = document.querySelector(".mySubmit");
const result = document.querySelector(".display");
const atm = document.querySelector(".attempts");

const min = 1;
const max = 100;

const answer = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(answer);

let attempts = 0;

btn.addEventListener('click', function(e){
    
    const guess = Number(guessInput.value);

    if(isNaN(guess) || guess<1 || guess>100){

        result.innerHTML = 'PLEASE ENTER A VALID NUMBER BETWEEN 1 AND 100!'
        result.style.fontSize = "1rem"
        result.style.color = "red"

        attempts++;
    }
    
    else if(guess === answer){

        result.innerHTML = "CONGRATULATIONS! YOU'RE CORRECT!"
        result.style.fontSize = "1rem"
        result.style.color = "green"
        attempts++;

        if(attempts === 1){
            atm.innerHTML = `It took you ${attempts} attempt!`
        }
        else{
            atm.innerHTML = `It took you ${attempts} attempts!`
        }
        

    }

    else if(guess < answer){

        result.innerHTML = "Too low! Try Again."
        result.style.fontSize = "1rem"
        result.style.color = "red"
        attempts++;
    }

    else if(guess > answer){

        result.innerHTML = "Too high! Try Again."
        result.style.fontSize = "1rem"
        result.style.color = "red"
        attempts++;
    }

    result.style.transition = "all 0.5s ease";

});
