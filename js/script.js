// Globala variabler

// Array: med spelets alla ord
const wordList = [hello] [goodbye] [philiprocks];

// Sträng: ett av orden valt av en slumpgenerator från arrayen ovan
let selectedWord;    

// Number: håller antalet gissningar som gjorts
let guesses = 0;

// Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`
let hangmanImg;      

// DOM-nod: Ger meddelande när spelet är över
let msgHolderEl;     

// DOM-nod: knappen som du startar spelet med
let startGameBtnEl = document.querySelector(startGameBtn);

// Array av DOM-noder: Knapparna för bokstäverna
let letterButtonEls; 

// Array av DOM-noder: Rutorna där bokstäverna ska stå
let letterBoxEls;    

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
startGameBtnEl.addEventListener('click', callbackFn);

// Funktion som slumpar fram ett ord
function generateRandomWord() {
    wordList[Math.floor(Math.random()*wordList.length)];
};

// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
function createLetterBoxes() {
    letterBoxEls = document.querySelector(letterBoxes[ul])
};
// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på