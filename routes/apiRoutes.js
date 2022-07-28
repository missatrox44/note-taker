const path = require('path');
// const fs = require('fs');
const router = require('express').Router();

const { readAndAppend, readFromFile } = require('../db/helpers');


//POST route for notes to be added to JSON and return new note template to client
router.post('/notes', (req, res) => {
  const { title, text } = req.body;
  const newNote = { title, text };
  readAndAppend(newNote, path.join(__dirname, '../db/db.json'))
});


//GET route to read JSON file and return saved notes in JSON format
router.get('/notes', (req, res) => {
  console.log(`${req.method} received`);
  readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});





module.exports = router;






  // console.log(`${req.method} received`);
  // console.log(req.body);
  //   const { title, text } = req.body;

  //   if(req.body) {
  //     const newNote = {
  //       title,
  //       text,
  //       // note_id: uuidv4(),
  //     };

  //     readAndAppend(newNote, '../db/db.json');
  //     res.json('Note added successfully!');
  //   } else {
  //     res.errored('Error in adding note.');
  //   }