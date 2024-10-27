// Select all necessary DOM elements
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('.status');
const resetBtn = document.querySelector('.reset-btn');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Define winning conditions
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Modal elements
// Modal elements
const winnerModal = document.getElementById('winnerModal');
const modalText = document.getElementById('modalText');
const closeBtn = document.querySelector('.close-btn');

// Show modal function
function showModal(message) {
    modalText.textContent = message;  // Correctly display the message
    winnerModal.style.display = 'block';
}

// Close modal function
function closeModal() {
    winnerModal.style.display = 'none';
}

// Close modal on clicking the close button
closeBtn.addEventListener('click', closeModal);

// Close modal if clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === winnerModal) {
        closeModal();
    }
});

// Handle cell click event
function handleCellClick(event) {
    const index = event.target.getAttribute('data-index');
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkForWinner();
        if (gameActive) {
            switchPlayer();
        }
    }
}

// Switch between players
function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s turn`;
}

// Check for a winner or a draw
function checkForWinner() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        showModal(`Player ${currentPlayer} wins!`);
    } else if (!gameBoard.includes('')) {
        statusText.textContent = `It's a draw!`;
        gameActive = false;
        showModal(`It's a draw!`);
    }
}

// Reset the game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => (cell.textContent = ''));
    closeModal(); // Close the modal if it's open when resetting
}

// Add event listeners to all cells and the reset button
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);

// Set initial status text
statusText.textContent = `Player ${currentPlayer}'s turn`;
