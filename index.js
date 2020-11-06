const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
// const wordBank = ["vote"];

let wins = 0;
let losses = 0;

const resetGame = () => {
  let hiddenWordArray = [];
  let numberOfGuesses = 6;
  let alreadyGuessedLetters = [];
  
  const hangman = () => {
    const word = wordBank[Math.floor(Math.random() * wordBank.length)];
    const letters = word.split("");
    let numberOfRemainingLetters = word.length;
  
    const findHiddenWordArray = () => {
      letters.forEach((letter, index) => {
        hiddenWordArray[index] = "_"
      });
    };
    
    findHiddenWordArray();
    
    console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");
    
    while (numberOfRemainingLetters > 0 && numberOfGuesses > 0) {
      console.log(hiddenWordArray.join(" "));
      let guess = prompt.question("\nPlease guess a letter: ").toLowerCase();
      if (guess === "") {
        console.log("\nPlease enter a letter.")
        console.log(`You have ${numberOfGuesses} guesses left.\n`) 
      } else if (/[^a-zA-Z]/.test(guess[0])) {
        console.log("\nPlease enter a letter.")
        console.log(`You have ${numberOfGuesses} guesses left.\n`) 
      } else if (/[a-zA-Z]/.test(guess[0])) {
        letters.forEach((letter, index) => {
          if (guess[0] === letter) {
            if (hiddenWordArray[index] === "_") {
              hiddenWordArray[index] = guess[0];
              numberOfRemainingLetters--;
            };
          };
        });
        if (!alreadyGuessedLetters.includes(guess[0]) && !letters.includes(guess[0])) {
          numberOfGuesses--
        };
        if (numberOfGuesses === 6) {
          console.log(`You have ${numberOfGuesses} guesses left.\n`)
        } else if (numberOfGuesses === 5) {
          console.log(`\n O \n\n\n`);
          console.log(`You have ${numberOfGuesses} guesses left.\n`)
        } else if (numberOfGuesses === 4) {
          console.log(`\n O \n | \n\n`)
          console.log(`You have ${numberOfGuesses} guesses left.\n`)
        } else if (numberOfGuesses === 3) {
          console.log(`\n O \n/| \n\n`)
          console.log(`You have ${numberOfGuesses} guesses left.\n`)
        } else if (numberOfGuesses === 2) {
          console.log(`\n O \n/|\\\n\n`)
          console.log(`You have ${numberOfGuesses} guesses left.\n`)
        } else if (numberOfGuesses === 1) {
          console.log(`\n O \n/|\\\n/\n`)
          console.log(`You have ${numberOfGuesses} guesses left.\n`)
        } else if (numberOfGuesses === 0) {
          console.log(`\n O \n/|\\\n/ \\\n`)
          console.log(`You have ${numberOfGuesses} guesses left.\n`)
        };
        alreadyGuessedLetters.push(guess[0]);
      };
    };

    const showResults = () => {
      if (numberOfRemainingLetters > 0) {
        console.log(hiddenWordArray.join(" "));
        console.log(`\nSorry, you are out of guesses.\nThe answer was ${word}.\n`)
        losses++;
      } else {
        console.log(hiddenWordArray.join(" "));
        console.log(`\nGood job!\nThe answer was ${word}.\n`)  
        wins++;
      };
      console.log(`You have won ${wins} round(s) and have lost ${losses} round(s).`)
    };
    
    showResults();
  };
  
  hangman();
};

while(true) {
  resetGame();
};