const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

// Defines the get request to this routes end point '/api/notes'
router.get('/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("./db/db.json", "utf8", (err, data) => data
    ))
    res.json(dbJson);
});

// Defines the post request to this routes end point '/api/notes'
router.post('/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("./db/db.json", ""));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("./db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
});

router.delete('/notes/:id', (req, res) => {
    let data = fs.readFileSync("./db/db.json", "");
    const dataJSON = JSON.parse(data);
    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync("./db/db.json", JSON.stringify(newNotes));
    res.json("note delete.");
});

module.exports = router;