const express = require('express');
const mainRouter = require('./router');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api', mainRouter);

app.listen(8080, console.log('App running on port 8080'));
