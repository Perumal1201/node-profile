var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


router.get('/', function(req, res){
    res.render('register');
});


var Person = require('../models/person_model.js');

router.post('/', function(req, res){
    console.log('Post hit');
    var personInfo = req.body;

    var newPerson = new Person({
        regno: personInfo.regno,
        name: personInfo.name,
        age: personInfo.age
     });

     newPerson.save(function(err, Person){
        if(err)
           return res.render('show_message', {message: "Database error", type: "error"});
        else
           return res.render('show_message', {
              message: "New person added", type: "success", person: personInfo});
     });

});

module.exports = router;