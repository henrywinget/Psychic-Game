var cpuLetter;
var userLetter;
var userGuessedLetters = [];
var wins = 0;
var losses = 0;
var guesses = 10;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u","v","w","x","y","z"];
var winsInline = document.getElementById("wins");
var lossesInLine = document.getElementById("losses");
var userGuessedIn = document.getElementById("guessed-letter");
var guessesRemaining = document.getElementById("guesses-remaining");

//Creates a random letter for the CPU
cpuLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(cpuLetter);

function updateStats(){
    winsInline.textContent = wins;
    lossesInLine.textContent = losses;
    userGuessedIn.textContent = userGuessedLetters;
    guessesRemaining.textContent = guesses;
}

document.onkeyup = function(event){

    updateStats();
    //Registers a letter per user key
    
    userLetter = event.key
    userGuessedLetters.push(userLetter);
    userGuessedIn.textContent = userGuessedLetters + ", ";

    if (userLetter === cpuLetter){
        wins++;
        guesses = 10;
        userGuessedIn = [];
        cpuLetter = letters[Math.floor(Math.random() * letters.length)];;
    }

    if (userLetter === userGuessedLetters){
        guesses = guesses;
    }
    else {
        guesses--;

    }
    if(guesses ==0){
        losses++;
        guesses = 10;
        userGuessedIn = [];
        cpuLetter = letters[Math.floor(Math.random() * letters.length)];;
    }
    
    updateStats();
}
updateStats();