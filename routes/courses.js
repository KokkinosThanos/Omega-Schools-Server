var express = require('express');
var router = express.Router();
var dbconnection = require('../lib/db');

router.get('/', function(req,res,next){

    const query = "SELECT * FROM courses";
    var fullUrl = req.protocol + '://' + req.get('host') + req.baseUrl;

    dbconnection.query(query, function(err,rows){
        if(err) {
            res.render('courses', { title1: 'There was an error...', title2: '', courses: '', message: req.params.message });
        }   
        else{
            res.render('courses', { title1: 'Ωmega Schools', title2: 'Courses', courses:rows, message: req.params.message, url: fullUrl  }); 
        }
    });
});

module.exports = router;