let playerScore = 0;
let computerScore = 0;
let highestScore = 0;
let isGameInProgress = false;

const choices = ['rock', 'paper', 'scissors'];
const images = {
    'rock': 'https://i.ibb.co/3cbnJHc/rock.png',
    'paper': 'https://i.ibb.co/VQbF69Q/paper.png',
    'scissors': 'https://i.ibb.co/F8fxrZv/scissor.png'
};

const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resultText = document.getElementById('resultText');
const resetButton = document.getElementById('reset');

const computerImage = document.getElementById('computerImage');
const playerImage = document.getElementById('playerImage');

document.getElementById('rock').addEventListener('click', () => handleChoice('rock'));
document.getElementById('paper').addEventListener('click', () => handleChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => handleChoice('scissors'));
resetButton.addEventListener('click', resetGame);

function handleChoice(playerChoice) {
    // if (isGameInProgress) return;

    isGameInProgress = true;

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Show placeholders first (delay simulation)
    playerImage.src = 'https://i.ibb.co/SdsNjCm/smile.png';
    computerImage.src = 'https://i.ibb.co/LdnXZ64/devil.png';
    resultText.textContent = '...';

    setTimeout(() => {
        playerImage.src = images[playerChoice];
        computerImage.src = images[computerChoice];

        const winner = determineWinner(playerChoice, computerChoice);
        if (winner === 'player') {
            playerScore++;
            resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        } else if (winner === 'computer') {
            computerScore++;
            resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
} else {
            resultText.textContent = `It's a draw! Both chose ${playerChoice}`;
        }

        updateScores();
        checkHighestScore();
        isGameInProgress = false;
    }, 1000); // Delay of 2 seconds before showing result
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'draw';

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultText.textContent = 'Choose your move!';
    playerImage.src = 'https://i.ibb.co/SdsNjCm/smile.png';
    computerImage.src = 'https://i.ibb.co/LdnXZ64/devil.png';
    updateScores();
}

function checkHighestScore() {
    if (playerScore > highestScore) {
        highestScore = playerScore;
    }
}
