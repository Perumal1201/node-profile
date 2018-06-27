var express = require('express');
var app = express();

var register = require('./routes/register.js');
var search = require('./routes/search.js');

app.get('/', function(req, res){
    res.send('This is home page');
});

app.use('/register', register);
app.use('/search', search);

app.listen(3000);
