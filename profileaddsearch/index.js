var express = require('express');
var app = express();

var register = require('./routes/register.js');

app.get('/', function(req, res){
    res.send('This is home page');
});

<<<<<<< HEAD
var search = require('./routes/search');
app.get('/search', function(req, res){
    res.send('This is home page');
});


app.listen(3000);
=======
app.use('/register', register);

app.listen(3000);
>>>>>>> e5206d2e8f32169be45e2ee0953652cdfb3d6e79
