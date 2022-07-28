
// const fs = require('fs');
const notes = require('express').Router();

const { readAndAppend, readFromFile } = require('../db/helpers');
const uuid = require('../db/uuid');


//GET route to retrieve all notes
notes.get('/notes', (req, res) => {
  console.log(`${req.method} received request for notes`);
  readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});


//POST route for new note
notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, '../db/db.json');
    res.json(`Note added successfully!`);
  } else {
    res.error('Error in adding note');
  }
});



module.exports = notes;






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