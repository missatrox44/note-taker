//server boilerplate
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

const router = require('./routes/htmlRoutes');
const apiRouter = require('./routes/apiRoutes');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//client side files live in public directory
app.use(express.static('public'));

//routes used
app.use('/', router);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Note Taker app is listening at http://localhost:${PORT}`);
});




///GET /api/notes should read the db.json file and return all saved notes as JSON

//POST /api/notes should receive a new notes to save on the request body, add it to the db.json file and then return the new note to the client. 
//each note must have unique ide when saved


//bonus - DELETE /api/notes/:id