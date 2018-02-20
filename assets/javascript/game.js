var cpuLetter;
var userLetter;
var userGuessedLetters = [];
var wins = 0;
var losses = 0;
var guesses = 10;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u","v","w","x","y","z"];
var winsInline = document.getElementById("wins");
var lossesInline = document.getElementById("losses");
var userGuessedIn = document.getElementById("guessed-letter");
var guessesRemaining = document.getElementById("guesses-remaining");

//Creates a random letter for the CPU
cpuLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(cpuLetter);

function updateStats(){
    winsInline.textContent = wins;
    lossesInline.textContent = losses;
    guessesRemaining.textContent = guesses;
}

document.onkeyup = function(event){

    //Registers a letter per user key
    for (i = 0; i < letters.length; i++);
    userLetter = event.key;
    userGuessedLetters.push(userLetter);
    userGuessedIn.textContent = userGuessedLetters + ", ";

    //When user guesses correctly, wins + 1 and guesses/guessed letters reset
    if (userLetter === letters[i]  === cpuLetter){
        wins++;
        guesses = 10;
        userGuessedLetters = [];
        cpuLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log(cpuLetter);
        confirm("Good guess... all right, ready for another one?");

    }
    //When user doesn't guess correctly, guesses drop by 1
    if (userLetter === letters[i] != cpuLetter){
        guesses--;
    
    }
    
    //When guesses reach 0, player adds 1 loss
    if(guesses == 0){
        losses++;
        guesses = 10;
        userGuessedLetters = [];
        cpuLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log(cpuLetter);
        confirm("You'll never know what's going on in my head!! Try again?");
    }
    
    //Updates statistics
    updateStats();

}
//Updates statistics
updateStats();