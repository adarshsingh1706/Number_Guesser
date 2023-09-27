const submitButton = document.querySelector('#subt');
const results = document.querySelector('.form p.result');
const remainingGuess = document.querySelector('.lastResult');
const prevResponse = document.querySelector('.guesses');
const LH = document.querySelector('.lowOrHi');
const invalid = document.querySelector('.invalid');
let arr =[];

let randomNumber = generateRandomNumber();
let guessesRemaining = 10;

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const guessedNumber = parseInt(document.querySelector("#guessField").value);
    // implementing this condn is pending.

    // if(guessedNumber === ""){
    //     invalid.innerText ="Please Provide a valid input"
    // }

     if (guessedNumber === randomNumber) {
        results.innerText = `Congratulations!🎯 Your guess is correct.👓 The number is ${randomNumber}`;
        LH.innerText = `Good Job👍`
        submitButton.disabled = true;
    }
    else {
        if(guessedNumber>randomNumber){
            LH.innerText = `The number could be low in value 👇`
        }
        else if(guessedNumber<randomNumber){
            LH.innerText = `The number could be high in value ✋`
        }
        
        guessesRemaining--;
        results.innerText = "Try Again";
        remainingGuess.textContent = guessesRemaining;
        arr.push(guessedNumber);
        prevResponse.innerText= arr;
        
    

        if (guessesRemaining === 0) {
            results.innerText = `Game Over! The correct number was ${randomNumber} 🛑`;
            submitButton.disabled = true;
        }
    }
});


