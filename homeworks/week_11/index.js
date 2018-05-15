// Main.js

let fs = require("fs");
let inquirer = require("inquirer");
let Word = require("./Word.js");
let words = ['hearth world', 'beautiful tree', 'mountain view', 'road bike', 'computer system'];
let regex = new RegExp("/^[a-zA-Z\s]+$/");
let word = new Word(words[Math.floor(Math.random() * words.length)]);
let remains = word.word.length;;
let gameShowAnswer = '';
let startGuessing = () => {
    var tempString = '';
    console.log('The random word is: ' + word.word);
    inquirer
      .prompt([
      {
        name: "word",
        type: "input",
        message: "Guess a letter!",
        validate: (value) => {
            if (!regex.test(value)) {
                return true;
            }
            return false;
        }
      }
      ]).then(function (answer) {
        tempString = word.guessLetter(answer.word, gameShowAnswer);
        console.log('letters: ' + word.letters);
        if (word.letters.indexOf(answer.word) === -1) {
            word.addLetter(answer.word);
            if (tempString != gameShowAnswer) {
                console.log(word.blankWords(word.word + '.'));
                console.log('CORRECT!');
                updateWord(gameShowAnswer);
                console.log(gameShowAnswer);
                gameShowAnswer = tempString;
                if (gameShowAnswer === word.word) {
                    console.log('You got it right! Next word.');
                }
            }
            else {
                console.log('INCORRECT!');
                remains--;
                console.log(remains + ' guesses remaining!!!');
                if (remains === 0) {
                    console.log('You lose it! Next word.')
                }
            }
        }
        else {
            console.log('This letter was already choosen!!!');
        }
        
        startGuessing();
      }).catch(function(err){
        if (err) {
            throw err;
        }
      });
};

startGuessing();

function updateWord(answer) {
    for (i in answer) {
        if (answer.charAt(i) != '_ ') {
            console.log(answer.charAt(i));
        } else {
            console.log('_ ');
        }
        console.log(answer.charAt(i+1));
    }
}