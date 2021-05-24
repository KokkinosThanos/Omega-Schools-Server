var express = require('express');
var router = express.Router();
var dbconnection = require('../lib/db');

router.get('/', function(req,res,next){


    //  const query = `CALL studentAssignment_query()`;

    const query = `SELECT students.firstName, students.lastName, 
                    assignments.title, assignments.description, assignments.subDateTime, 
                    student_assignment.oralMark, student_assignment.totalMark

                    FROM ((students

                    INNER JOIN assignments ON students.assignmentId = assignments.id)
                    INNER JOIN student_assignment ON students.id = student_assignment.id)
                    ORDER BY students.id; 
                    `;

    var fullUrl = req.protocol + '://' + req.get('host') + req.baseUrl;

    dbconnection.query(query, function(err,rows){
        if(err) {
            res.render('assignmentStudent', { title1: 'There was an error...',title2: 'Student Assignments', assignmentStudent: '', message: req.params.message });
        }
        else{
            res.render('assignmentStudent', { title1: 'Ωmega Schools - Student Assignments', title2: 'Student Assignments', assignmentStudent:rows, message: req.params.message, url: fullUrl });  /*  */
        }
    });
});

module.exports = router;