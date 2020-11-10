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

Node.js is a JavaScript runtime engine. You will need to have the latest stable version of Node installed. If you already have Node.js installed, type `node -v` in your terminal. If you do not have Node installed, take a look at the next section to see how to install it.

You will also need to have the [readline-sync](https://www.npmjs.com/package/readline-sync) library installed.

### Installing

#### For Mac

1. In order to install Node.js, we recommend using Homebrew. [Homebrew](https://brew.sh/) is a package manager for Mac.

   If you already have Homebrew installed, type `brew -v` in your terminal. Update Homebrew with `brew update` and then skip ahead to the next step.

   To install Homebrew, type this into your terminal:

   `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`

2. To install Node.js, type this into your terminal:

   `brew install node`

3. To install the read-line sync library, type this into your terminal:

   `npm install --save readline-sync`

4. To obtain a copy of the game, clone this repository by typing this into your terminal:

   `git clone https://github.com/KatieBullock/hangman`

   Make sure you are inside of that directory when you are ready to play the game.

#### For Windows

1. To install Node.js, go to [https://nodejs.org/en/](https://nodejs.org/en/) and click on the current version. Follow the provided steps to finish installation.

2. To install the read-line sync library, type this into your Git Bash:

   `npm install --save readline-sync`

3. To obtain a copy of the game, clone this repository by typing this into your Git Bash:

   `git clone https://github.com/KatieBullock/hangman`

   Make sure you are inside of that directory when you are ready to play the game.

## Playing the Game

Run `node .` to start the game. To end the game, press `ctrl + c`. The game will prompt you to guess a letter. Type in any letter. If it is a correct guess, you will see the letter fill a position in the hidden word. If it is an incorrect guess, you will add a body part to your hangman. Each incorrect guess will subtract a guess from your 6 guesses. Numbers, special characters, and duplicate guesses will not affect your remaining guesses. At the end of the round, you will see your results and how many rounds you have won and lost. A new game will begin automatically. The game will keep going until you press `ctrl + c`.

## Authors

- **Katie Bullock** - _Developed Game_ -
  [KatieBullock](https://github.com/KatieBullock)

## Acknowledgments

- Thank you to Matina Patsos and Jamal Taylor with Albany Can Code for guidance and support on this project.
