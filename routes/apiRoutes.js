const path = require('path');
const fs = require('fs');
const router = require('express').Router();

// const { v4: uuidv4 } = require('uuid');
const readAndAppend = require('../db/helpers');

// router.get('/notes', (req, res) => {
//   console.log('router getting notes')
// let dbcontents = fs.readFile('../db/db.json');
// console.log(dbcontents)
// });

router.post('/notes', (req, res) => {
  console.log(`${req.method} received`);
  console.log(req.body);
    const { title, text } = req.body;

    if(req.body) {
      const newNote = {
        title,
        text,
        // note_id: uuidv4(),
      };

      readAndAppend(newNote, '../db/db.json');
      res.json('Note added successfully!');
    } else {
      res.errored('Error in adding note.');
    }
});


router.get('/notes', (req, res) => {
  console.log(`${req.method} received`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});




module.exports = router;




// console.log(helpers.read());