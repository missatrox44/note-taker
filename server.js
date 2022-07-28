//server boilerplate
const express = require('express');
const app = express();
const path = require('path');

const api = require('./routes/index.js');
const PORT = process.env.PORT || 3001;

// const router = require('./routes/htmlRoutes');
// const apiRouter = require('./routes/apiRoutes');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
//client side files live in public directory
app.use(express.static('public'));


//GET route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => {
  console.log(`Note Taker app is listening at http://localhost:${PORT}`);
});




//routes used
// app.use('/', router);
// app.use('/api/', apiRouter);



// //html path to notes
// app.get('/notes', (req, res) => {
//   console.log('Go ahead and add your note');
//   res.sendFile(path.join(__dirname,'./public/notes.html')
// )});

// //html path to index
// app.get('*', (req, res) => {
//   // console.log('You found your way back home!');
//   res.sendFile(path.join(__dirname,'./public/index.html')
// )});









///GET /api/notes should read the db.json file and return all saved notes as JSON

//POST /api/notes should receive a new notes to save on the request body, add it to the db.json file and then return the new note to the client. 
//each note must have unique ide when saved


//bonus - DELETE /api/notes/:id