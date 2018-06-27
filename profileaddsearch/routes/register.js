var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('This is register page');
});

module.exports = router;