
const path = require('path');
const router = require('express').Router();


//html path to notes
router.get('/notes', (req, res) => {
  console.log('Go ahead and add your note');
  res.sendFile(path.join(__dirname,'../public/notes.html')
)});

//html path to index
router.get('*', (req, res) => {
  // console.log('You found your way back home!');
  res.sendFile(path.join(__dirname,'../public/index.html')
)});




module.exports = router;