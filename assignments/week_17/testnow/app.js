const wordArr = ['banana', 'fugde', 'potato'];
let live = 10;
let guessArr = [];
let word = "";
// console.log('start');
const updateGuess = function (arr, char, str) {

}


document.onkeyup = function(e){
    // console.log('key: ');
    const key = e.key;
    if (word.includes(key)) {
        guessArr = updateGuess(guessArr, key, word);
    } else {
        lives--;
    }
    render;
}

const render = function () {
    console.log("Correct: ", guessArr);
    console.log("lives: ", lives);
}

word = wordArr[Math.floor(Math.random() * wordArr.length)];
guessArr = new Array(word.length).fill('_');