var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', function(req, res){
    res.render('search');
});

var Person = require('../models/person_model.js');

router.post('/', function(req, res){
    
    Person.find({name: req.body.search}, 
    function(err, response){    
      console.log(response);
      res.render('search_result', {message:'Search success', resultSet: response})
    });

});

module.exports = router;