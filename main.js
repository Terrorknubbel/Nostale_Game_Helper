var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var controller = require('./controllers/mainController.js');

app.set('view engine', 'ejs');


app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));

controller(app);

app.listen(3001, () => {
    console.log("Server is listening on port: 3001");
  });