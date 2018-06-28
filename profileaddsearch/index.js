var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/profile');

var register = require('./routes/register.js');
var search = require('./routes/search.js');

app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.send('This is home page');
});

app.use('/register', register);
app.use('/search', search);

app.listen(3000);
