const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./apiRoutes');

const app = express();

app.use('/tips', notesRouter);

module.exports = app;
