// Globala variabler

// Array: whith the words 
const wordList = ['hello', 'goodbye', 'philiprocks'];

// String: with THE word the generator selects
let selectedWord = ''; // generateRandomWord();

// Number: stores the numbers of guesses
let guesses = 0;

// String: searchpath to imgage (and changes) wrong answer. ex. `/images/h1.png`
let hangmanImg = `images/h${guesses}.png`
document.querySelector('#hangman')
hangmanImg.src = 'hangmanImg'

// DOM-node: logs a messange when the game is over
let msgHolderEl;     

// DOM-node: the button that starts the game
let startGameBtnEl = document.querySelector('#startGameBtn');

// Array of DOM-nodes: the buttons for the letters
let letterButtonEls = document.querySelector('btn--stripe');
letterBoxEls.addEventListener('click', event => {
    letterBoxEls.innerHTML = `Click count: ${event.detail}`;
});
console.log(event.detail);

// Array of DOM-nodes: the squares which holds the letters
let letterBoxEls;    

// Functions to start the game with buttonclick, and then calls other functions
startGameBtnEl.addEventListener('click', startGame);

// Function which randomly selects a word
function generateRandomWord() {
    return wordList[Math.floor(Math.random()*wordList.length)];
};

// Function to generate the letterboxes, number of boxes depends on the number of letters in the word
function createLetterBoxes() {
    letterBoxEls = document.querySelector('#letterBoxes > ul');
    for ( i = 0; i < selectedWord.length; i++ ) {
    		let newElement = document.createElement('li')
        let newInput = document.createElement('input')
        newInput.setAttribute('type', 'text')
        newInput.setAttribute('disabled', '')
        newElement.appendChild(newInput);
        letterBoxEls.appendChild(newElement);
    };    
};

function startGame() {
    let list = document.querySelector('#letterBoxes > ul');
    list.innerHTML = '';
    selectedWord = generateRandomWord();
    createLetterBoxes()
}


// Function that runs when you press a letters and guesses the letter
// Function that gets called by winning or loosing, does different things depending on status
// Function wthich inaktiates/activates the letterbuttons depending on which part of the game you are on

// to do
// 1 click button
// -check if the letter is inside the word
// -we disable this button
// -if it is inside the word - show box
// -if its not in the word set -1 on the tries
// the images
// button click callback

// -check if guess the whole word   -> WON