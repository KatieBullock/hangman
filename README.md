# Hangman

Hangman is a word guessing game in which the computer picks a word at random and the player must guess that word, letter by letter. If she makes too many guesses, the hangman is "hung" and she will lose the round.

In this Node.js game, the player has to guess the correct word before making six incorrect guesses. The computer will keep track of how many rounds she has won and lost and display the results at the end of each round.

## Summary

  - [Getting Started](#getting-started)
  - [Playing the Game](#playing-the-game)
  - [Authors](#authors)
  - [Acknowledgments](#acknowledgments)
  
## Getting Started

These instructions will get a copy of the project up and running on your local machine.

### Prerequisites

You will need to have the [readline-sync](https://www.npmjs.com/package/readline-sync) library installed.

### Installing

1. To install the read-line sync library, type this into your terminal:

...`npm install --save readline-sync`

2. To obtain a copy of the game, clone this repository by typing this into your terminal:

...`git clone https://github.com/KatieBullock/hangman`

...Make sure you are inside of that directory when you are ready to play the game in your terminal.

## Playing the Game

To start the game, run `node .`. To end the game, press `ctrl + c`. The game will prompt you to guess a letter. Type in any letter. If it is a correct guess, you will see the letter fill a position in the hidden word. If it is an incorrect guess, you will add a body part to your hangman. Each incorrect guess will subtract a guess from your 6 guesses. Numbers, special characters, and duplicate guesses will not affect your remaining guesses. At the end of the round, you will see your results and how many rounds you have won and lost. A new game will begin automatically. The game will keep going until you press `ctrl + c`.

## Authors

  - **Kathryn Bullock** - *Developed Game* -
    [KatieBullock](https://github.com/KatieBullock)

## Acknowledgements

  -Thank you to Matina Patsos and Jamal Taylor with Albany Can Code for guidance and support on this project.
