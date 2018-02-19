var cpuLetter;
var userLetter;
var userText = document.getElementById("guess-here");
var userGuessedLetters = document.getElementById("guessed-letter").innerHTML;
var wins = 0;
var losses = 0;
var guesses = 10;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u","v","w","x","y","z"];

//Creates a random letter for the CPU
cpuLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(cpuLetter);

document.onkeyup = function(event){
//Registers a letter per user key
userLetter = event.key;

console.log(userLetter);

//Compares user guess to CPU guess
for (i = 0; i < letters.length; i++){
    if (userLetter.toLowerCase === cpuLetter) {
        document.getElementById("wins").textContent = "Wins: " + 1;

    };
}

userGuesses = userLetter.innerHTML + ", ";

}