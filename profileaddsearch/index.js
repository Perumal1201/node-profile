var express = require('express');
var app = express;

var register = require('./routes/register');
app.get('/', function(req, res){
    res.send('This is home page');
});

app.listen(3000);