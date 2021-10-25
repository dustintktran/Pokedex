const express = require('express');
const mainRouter = require('./router');

const app = express();

app.use('/api', mainRouter);

app.listen(8080, console.log('App running on port 8080'));
