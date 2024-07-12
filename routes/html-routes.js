const router = require('express').Router();
const path = require('path');

// Define the route that send 'index.html' as a response
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Define the route that sends 'notes.html' as a response
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;