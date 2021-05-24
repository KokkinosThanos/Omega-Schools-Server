var express = require('express');
var router = express.Router();
var dbconnection = require('../lib/db');
 
router.get('/', function(req,res,next){

    const query = `SELECT assignments.title, assignments.description, assignments.subDateTime, 
                          assignments.oralMark, assignments.totalMark, courses.stream

                   FROM (assignments INNER JOIN courses ON assignments.courseId = courses.id); 
                ` ;

    var fullUrl = req.protocol + '://' + req.get('host') + req.baseUrl;

    dbconnection.query(query, function(err,rows){
        if(err) {
            res.render('assignments', { title1: 'There was an error...', title2: '', assignments: '', message: req.params.message });/* */
        }
        else{
            res.render('assignments', { title1: 'Ωmega Schools - Assignments', title2: 'Assignments', assignments:rows, message: req.params.message, url: fullUrl  });/* */
        }
    });
});

module.exports = router;