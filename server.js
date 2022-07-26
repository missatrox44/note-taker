//server boilerplate
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const router = require('./routes/htmlRoutes');
const apiRouter = require('./routes/apiRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', router);
app.use('/api', apiRouter);

app.listen(PORT, () => console.log('listening'));




///GET /api/notes should read the db.json file and return all saved notes as JSON

//POST /api/notes should receive a new notes to save on the request body, add it to the db.json file and then return the new note to the client. 
//each note must have unique ide when saved


//bonus - DELETE /api/notes/:id