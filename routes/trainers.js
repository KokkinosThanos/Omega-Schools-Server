var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var {check, validationResult } = require('express-validator');
var urlEncodedParser = bodyParser.urlencoded({ extended:false });
var dbconnection = require('../lib/db');
var Trainer = require('../models/trainer');

router.get('/', function(req,res,next){

    const query = `SELECT *
                   FROM trainers ;`;
    
    var fullUrl = req.protocol + '://' + req.get('host') + req.baseUrl;

    dbconnection.query(query, function(err,rows){
        if(err) {
            res.render('trainers', { title1: 'There was an error...', title2:'',  trainers: '', message: req.params.message}); /*  */
        }
        else{
            res.render('trainers', { title1: 'Ωmega Schools - Trainers', title2: 'Trainers', trainers:rows, message: req.params.message, url: fullUrl });
        }
    });
});

// -------------------------------------------------------------------------------------------------------------
// ------ ADD TRAINER --------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

router.get('/addTrainer/', function(req, res, next) {
    res.render('addTrainer', {title1: 'Ωmega Schools - Add Trainer', title2: 'Add Trainer', message: '' })
});

router.post('/addTrainer',urlEncodedParser, [

    check('firstName')
        .exists()
        .isLength({min:3}),
    check('lastName')
        .exists()
        .isLength({min:3}),
    check('subject')
        .exists(),
    check('hoursWeek')
        .isInt({min:10,max:50}),
    check('hourlyWage')
        .isInt({min:20,max:50}),
    check('contractLength')
        .exists(),
    check('phone')
        .exists()
        .isLength({ min: 10, max: 20 }),
    check('email')
        .isEmail(),
    check('address')
        .exists()

         

], function(req, res, next) {

    var errors = validationResult(req);
    if(!errors.isEmpty()) {

        return 
    }


    let trainer = new Trainer( undefined, req.body.firstName, req.body.lastName, req.body.subject, req.body.hoursWeek , req.body.hourlyWage , 
                               req.body.contractLength , req.body.phone , req.body.email, req.body.address  );


    const query = `INSERT INTO trainers ( firstName, lastName, subject ) 
                VALUES( '${trainer.firstName}' , '${trainer.lastName}' , '${trainer.subject}' ) ;

                INSERT INTO payroll ( hoursWeek, hourlyWage, contractLength ) 
                VALUES( '${trainer.hoursWeek}' , '${trainer.hourlyWage}' , '${trainer.contractLength}' ) ; 
                
                INSERT INTO addresses ( phone, email, address ) 
                VALUES( '${trainer.phone}' , '${trainer.email}', '${trainer.address}'  ) ; 
            ` ;

              

    dbconnection.query(query, function(err,status) {
    
        if(err) {
            res.render( 'addTrainer', {title1: 'Ωmega Schools - Add Trainer', title2: 'Add Trainer', message: 'Error inserting to Database !'  })
        }
        else {
            res.redirect('/trainers');
        };
    });

});

module.exports = router;


