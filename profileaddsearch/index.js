var express = require('express');
var app = express;

var register = require('./routes/register');
app.get('/', function(req, res){
    res.send('This is home page');
});

var search = require('./routes/search');
app.get('/search', function(req, res){
    res.send('This is home page');
});


app.listen(3000);