var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('register');
});

router.post('/', function(req, res){
    console.log(req.body);
    res.send('post hit');
});
module.exports = router;