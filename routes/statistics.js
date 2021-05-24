var express = require('express');
const { render } = require('../app');
var router = express.Router();
var dbconnection = require('../lib/db');

router.get('/', function(req,res,next){

    const query = "CALL allStoredProcedures()" ; 

    dbconnection.query(query, function(err,rows){
        if (err) throw err;
  
        console.log('Data received from Db:');
        console.log(rows[0], rows[1], rows[2], rows[3]);

        res.render('statistics',{
                                 title1:'Ωmega Schools', title2:'Statistics',
                                 students:rows[0],
                                 trainers:rows[1],
                                 studentsCourse:rows[2],
                                 awardedStudents:rows[3]
                                })
    });
});

module.exports = router;
