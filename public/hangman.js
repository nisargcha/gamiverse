const wordsAndClues = [
    { word: "javascript", clue: "Programming language" },
    { word: "python", clue: "Snake and a language" },
    { word: "elephant", clue: "A large mammal" },
    { word: "guitar", clue: "A string instrument" },
    { word: "mountain", clue: "A large natural elevation" }
];

let selected = wordsAndClues[Math.floor(Math.random() * wordsAndClues.length)];
let wordToGuess = selected.word.toLowerCase();
let clueText = selected.clue;
let wrongGuessCount = 0;
let guessedLetters = [];
let displayWord = "_".repeat(wordToGuess.length);
const maxWrongGuesses = 6;

const letterInput = document.getElementById('letterInput');
const guessButton = document.getElementById('guessButton');
const wordDisplay = document.getElementById('wordDisplay');
const message = document.getElementById('message');
const clue = document.getElementById('clue');
const wrongGuesses = document.getElementById('wrongGuesses');

// Hangman body parts
const head = document.querySelector('.head');
const body = document.querySelector('.body');
const leftArm = document.querySelector('.left-arm');
const rightArm = document.querySelector('.right-arm');
const leftLeg = document.querySelector('.left-leg');
const rightLeg = document.querySelector('.right-leg');

// Display initial word with blanks and clue
wordDisplay.textContent = displayWord.split('').join(' ');
clue.textContent = `Clue: ${clueText}`;

function resetGame() {
    selected = wordsAndClues[Math.floor(Math.random() * wordsAndClues.length)];
    wordToGuess = selected.word.toLowerCase();
    clueText = selected.clue;
    guessedLetters = [];
    wrongGuessCount = 0;
    displayWord = "_".repeat(wordToGuess.length);

    wordDisplay.textContent = displayWord.split('').join(' ');
    clue.textContent = `Clue: ${clueText}`;
    wrongGuesses.textContent = wrongGuessCount;
    message.textContent = '';
    letterInput.value = '';

    // Hide all body parts
    head.style.display = 'none';
    body.style.display = 'none';
    leftArm.style.display = 'none';
    rightArm.style.display = 'none';
    leftLeg.style.display = 'none';
    rightLeg.style.display = 'none';
}

function updateHangmanFigure() {
    if (wrongGuessCount === 1) head.style.display = 'block';
    if (wrongGuessCount === 2) body.style.display = 'block';
    if (wrongGuessCount === 3) leftArm.style.display = 'block';
    if (wrongGuessCount === 4) rightArm.style.display = 'block';
    if (wrongGuessCount === 5) leftLeg.style.display = 'block';
    if (wrongGuessCount === 6) rightLeg.style.display = 'block';
}

guessButton.addEventListener('click', () => {
    const guess = letterInput.value.toLowerCase();
    letterInput.value = '';

    if (!guess || guessedLetters.includes(guess)) return;

    guessedLetters.push(guess);

    if (wordToGuess.includes(guess)) {
        let updatedWord = '';
        for (let i = 0; i < wordToGuess.length; i++) {
            updatedWord += guessedLetters.includes(wordToGuess[i]) ? wordToGuess[i] : '_';
        }
        displayWord = updatedWord;
        wordDisplay.textContent = displayWord.split('').join(' ');

        if (displayWord === wordToGuess) {
            message.textContent = 'Congratulations! You guessed the word!';
            setTimeout(resetGame, 2000);
        }
    } else {
        wrongGuessCount++;
        wrongGuesses.textContent = wrongGuessCount;
        updateHangmanFigure();

        if (wrongGuessCount >= maxWrongGuesses) {
            message.textContent = `Game Over! The word was "${wordToGuess}".`;
            setTimeout(resetGame, 3000);
        }
    }
});
// Event listener for 'Enter' key press to guess the letter
letterInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        guessButton.click(); // Triggers the guess button's click event
    }
});

document.querySelector('.reset-btn').addEventListener('click', resetGame);
