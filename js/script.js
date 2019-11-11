// Global variables

// Array: whith the words 
const wordList = ['hello', 'goodbye', 'philiprocks'];

// String: with THE word the generator selects
let selectedWord = ''; // generateRandomWord();

// Number: stores the numbers of guesses
let guesses = 0;

// String: searchpath to imgage (and changes) wrong answer. ex. `/images/h1.png`
let hangmanImg = `images/h${guesses}.png`
let imageElement = document.querySelector('#hangman')
imageElement.setAttribute('src', hangmanImg);

// DOM-node: logs a messange when the game is over
let msgHolderEl;     

// DOM-node: the button that starts the game
let startGameBtnEl = document.querySelector('#startGameBtn');
wordBoxes = document.querySelector('#letterBoxes > ul');

// Array of DOM-nodes: the buttons for the letters
let letterBoxEls = document.querySelector('#letterButtons').children;
for (var i = 0; i < letterBoxEls.length; i++) {
    (function(i) {
        letterBoxEls[i].addEventListener('click', event => {
        console.log(letterBoxEls[i].children[0].value, selectedWord);
    })})(i);    
}

// Array of DOM-nodes: the squares which holds the letters
// let letterBoxEls;    

// Functions to start the game with buttonclick, and then calls other functions
startGameBtnEl.addEventListener('click', startGame);


// ---------- Behold, the functions! ---------- 



// Function which randomly selects a word
function generateRandomWord() {
    return wordList[Math.floor(Math.random()*wordList.length)];
};

// Function to generate the letterboxes, number of boxes depends on the number of letters in the word
function createLetterBoxes() {
    for ( i = 0; i < selectedWord.length; i++ ) {
    		let newElement = document.createElement('li')
        let newInput = document.createElement('input')
        newInput.setAttribute('type', 'text')
        newInput.setAttribute('disabled', '')
        newElement.appendChild(newInput);
        wordBoxes.appendChild(newElement);
    };    
};

// Function for start game and select a random word
function startGame() {
    let list = document.querySelector('#letterBoxes > ul');
    list.innerHTML = '';
    selectedWord = generateRandomWord();
    createLetterBoxes()
    let wordSplit = selectedWord.split('');
    console.log(wordSplit);
}

// Function that runs when you press a letters and guesses the letter
function checkLetter(letter, selectedWord) {
    let letters = selectedWord.split('');
    if (letters.indexOf(letter) !== -1) {
        correctGuessAction(letter);
    } else {
        wrongGuessAction();
    }
};

// Function that does something usefull, I'm sure
function correctGuessAction(letter, letters) {
    let occurances = []
    for (let i = 0; i < letters.length; i++) {

    }
}

/*  some function im not sure if its needed
    function letterGuess() {
    let occurances = []
    for (let i = 0; i < wordSplit.length; i++) {
        
    }
}
*/



// Function that gets called by winning or loosing, does different things depending on status
// Function wthich inaktiates/activates the letterbuttons depending on which part of the game you are on

