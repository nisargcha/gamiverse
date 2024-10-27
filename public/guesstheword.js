const wordsAndClues = [
    { word: "table", clue: "It has 4 legs and is often made of wood." },
    { word: "javascript", clue: "A popular programming language used in web development." },
    { word: "python", clue: "A high-level programming language named after a snake." },
    { word: "java", clue: "A programming language that shares its name with coffee." },
    { word: "html", clue: "A markup language used to create web pages." },
    { word: "css", clue: "Used to style and design web pages." },
    { word: "apple", clue: "A fruit that keeps the doctor away." },
    { word: "elephant", clue: "The largest land animal on Earth." },
    { word: "guitar", clue: "A string instrument often used in rock music." },
    { word: "mountain", clue: "A natural elevation of the earth's surface." },
    { word: "piano", clue: "A large musical instrument with keys." },
    { word: "river", clue: "A natural flowing watercourse, usually freshwater." },
    { word: "space", clue: "The vast expanse beyond Earth's atmosphere." },
    { word: "penguin", clue: "A flightless bird found in the Antarctic." },
    { word: "umbrella", clue: "Used to protect yourself from rain." },
    { word: "computer", clue: "An electronic device used for processing and storing data." },
    { word: "clock", clue: "A device used to tell time." },
    { word: "book", clue: "A set of written, printed, or blank pages fastened together." },
    { word: "moon", clue: "A celestial body that orbits the Earth." },
    { word: "ocean", clue: "A vast body of saltwater that covers much of the Earth." },
    { word: "train", clue: "A form of transport that runs on tracks." },
    { word: "keyboard", clue: "An input device for typing." },
    { word: "bicycle", clue: "A vehicle with two wheels powered by pedaling." },
    { word: "sunflower", clue: "A large flower known for its yellow petals." },
    { word: "glasses", clue: "Worn to help improve vision." }
];
// Assume `wordsAndClues` is the array of word-clue objects as shown earlier
let selected = wordsAndClues[Math.floor(Math.random() * wordsAndClues.length)];

let streak = 0;
let points = 0;
let highestScore = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const clue = document.getElementById('clue');
const pointsDisplay = document.getElementById('points');
const highestScoreDisplay = document.getElementById('highestScore');

// Display the initial clue and points
clue.textContent = `Clue: ${selected.clue}`;
pointsDisplay.textContent = `Points: ${points}`;
highestScoreDisplay.textContent = `Highest Score: ${highestScore}`;


function resetGame() {
    // Select a new word and clue
    selected = wordsAndClues[Math.floor(Math.random() * wordsAndClues.length)];
    clue.textContent = `Clue: ${selected.clue}`;
    message.textContent = '';
    guessInput.value = '';
    guessButton.disabled = false;
}

guessButton.addEventListener('click', () => {
    const guess = guessInput.value.toLowerCase();
    
    if (guess === selected.word) {
        message.textContent = 'Correct Guess!!';
        
        // Increase streak and points if correct
        streak++;
        points += 1;
        pointsDisplay.textContent = `Points: ${points}`;
        
        // Automatically reset the game after a short delay
        setTimeout(resetGame, 1000); // Reset the game after 1 second
        
    } else {
        message.textContent = 'Wrong guess, streak reset!';
        if (points > highestScore) {
            highestScore = points;
            highestScoreDisplay.textContent = `Highest Score: ${highestScore}`;
        }
        // Reset points and streak if the guess is wrong
        streak = 0;
        points = 0;
        pointsDisplay.textContent = `Points: ${points}`;
        
        
    }
});

document.querySelector('.reset-btn').addEventListener('click', () => {
    // Reset points, streak, and select new word
    streak = 0;
    points = 0;
    pointsDisplay.textContent = `Points: ${points}`;
    
    resetGame();
});
