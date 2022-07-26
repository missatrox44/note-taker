
const path = require('path');

const router = require('express').Router();


//html path to notes
router.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname,'../public/notes.html')
)});


//html path to index
router.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname,'../public/index.html')
)});

module.exports = router;