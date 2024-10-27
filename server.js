const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000; // Express server port

// Enable CORS
app.use(cors());

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve game pages
app.get('/tic-tac-toe', (req, res) => {
    res.sendFile(path.join(__dirname, 'tic-tac-toe.html'));
});

app.get('/rock-paper-scissors', (req, res) => {
    res.sendFile(path.join(__dirname, 'rocpaperscissors.html'));
});

app.get('/hangman', (req, res) => {
    res.sendFile(path.join(__dirname, 'hangman.html'));
});

app.get('/guesstheword', (req, res) => {
    res.sendFile(path.join(__dirname, 'guesstheword.html'));
});

app.get('/ab',(req,res)=>{
    res.status(200);
    
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
