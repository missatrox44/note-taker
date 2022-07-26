const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const helpers = require('../db/helpers');

// router.get('/notes', (req, res) => {
//   console.log('router getting notes')
// let dbcontents = fs.readFile('../db/db.json');
// console.log(dbcontents)
// });

router.post('/notes', (req, res) =>{
  console.log(helpers.read());

});

module.exports = router;



//readFileSync (promised method)