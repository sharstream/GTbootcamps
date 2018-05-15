//Word constructor

let Letter = require("./Letter.js");

function Word(
    word
) {
    this.word = word;
    this.letters = '';
    this.addLetter = (character) => {
        let letter = new Letter(character);
        this.letters += letter.toString();
    };
    this.blankWords = (answerWord) => {
        let result = '';

        for (i in answerWord) {
            result = "_ " + result;
        }

        return result.toLowerCase();
    };
    this.alterAt = (n, character, originalString) => {
        return originalString.substr(0, n) + character + originalString.substr(n + 1, originalString.length);
    };
    this.guessLetter = (letter, shown) => {
        
        var checkIndex = 0;

        checkIndex = this.word.indexOf(letter);
        while (checkIndex >= 0) {
            shown = this.alterAt(checkIndex, letter, shown);
            checkIndex = this.word.indexOf(letter, checkIndex + 1);
            // this.addLetter(letter);
        }
        return shown;
    };
};

module.exports = Word;