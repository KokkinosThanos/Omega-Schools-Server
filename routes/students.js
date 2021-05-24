var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var {check, validationResult } = require('express-validator');
var urlEncodedParser = bodyParser.urlencoded({ extended:false });
var dbconnection = require('../lib/db');
var Student = require('../models/students');

router.get('/', function(req,res,next){

    const query = `SELECT *
                   FROM students ;`;
    
    var fullUrl = req.protocol + '://' + req.get('host') + req.baseUrl;

    dbconnection.query(query, function(err,rows){
        if(err) {
            res.render('students', { title1: 'There was an error...',  title2: '', students:'', message: req.params.message });/* */
        }
        else{
            res.render('students', { title1: 'Ωmega Schools - Students', title2: 'Students', students:rows, message: req.params.message, url: fullUrl  });
        }
    });
});


// -----------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// ------ ADD STUDENT ---------------------------------------------------------------------------------------


router.get('/addStudent/', function(req, res, next) {
    res.render('addStudent', {title1: 'Ωmega Schools - Add Student', title2: 'Add Students', message: '' })
});


router.post('/addStudent', urlEncodedParser, [

    check('SfirstName')
        .exists()
        .isLength({min:3}),
    check('SlastName')
        .exists()
        .isLength({min:3}),
    check('dateOfBirth')
        .exists(),
    check('tuitionFees')
        .isInt({min:2500,max:2500}),
    check('courseId')
        .exists(),
    check('assignmentId')
        .exists(),
    check('oralMark')
        .exists()
        .isLength({ min: 0, max: 20 }),
    check('totalMark')
        .exists()
        .isLength({ min: 0, max: 80 })

], function(req, res, next) {

    var errors = validationResult(req);

        if(!errors.isEmpty()) { return }

    let student = new Student( undefined, req.body.SfirstName, req.body.SlastName, req.body.dateOfBirth , req.body.tuitionFees, 
                                req.body.courseId, req.body.assignmentId ,req.body.oralMark , req.body.totalMark );


    const query = `INSERT INTO students (firstName, lastName, dateOfBirth, tuitionFees, assignmentId, courseId ) 
                     VALUES( '${student.SfirstName}' , '${student.SlastName}' , '${student.dateOfBirth}' , '${student.tuitionFees}', '${student.assignmentId}' , '${student.courseId}') ;
                
                    INSERT INTO student_assignment (assignmentId, oralMark, totalMark)
                    VALUES(   '${student.assignmentId}' , '${student.oralMark}' , '${student.totalMark}');
                ` ;


    dbconnection.query(query, function(err,status) {
        
            if(err) {
                res.render( 'addStudent', {title1: 'Ωmega Schools - Add Student', title2: 'Add Student', message: 'Error inserting to Database !'  })
            }
            else {
                res.redirect('/students');
            };
    });

});


module.exports = router;