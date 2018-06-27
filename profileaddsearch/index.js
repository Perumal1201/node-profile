var express = require('express');
var app = express;

app.get('/', function(req, res){
    res.send('This is home page');
});

app.get('/adduser', function(req, res){
    res.send('This is Register page');
});

app.listen(3000);