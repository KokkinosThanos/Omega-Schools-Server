var express = require('express');
var router = express.Router();
var dbconnection = require('../lib/db');

router.get('/:id', function(req, res, next) {

    const trainerId = req.params.id;

    query1 = "SELECT * FROM `trainers` WHERE `id` = ? ; " ;
    query2 = "SELECT * FROM `payroll` WHERE `trainerId` = ? ;" ;
    query3 = "SELECT * FROM `addresses` WHERE `trainerId` = ? ;" ;


    dbconnection.query(query1,[trainerId], function(err, personal) {
        if (err) {
            res.render('profiles', {title1: 'Ωmega Schools - Profiles', title2: "error" + '' , trainer: ''})
        }
        dbconnection.query(query2,[trainerId], function(err, organic) {
          if (err) {
            res.render('profiles', {title1: 'Ωmega Schools - Profiles', title2: "error" + '' , trainer: ''})
          }
          dbconnection.query(query3,[trainerId], function(err, additional) {
            if (err) {
              res.render('profiles', {title1: 'Ωmega Schools - Profiles', title2: "error" + '' , trainer: ''})
            }
          res.render('profiles', {
            personal: personal,
            organic: organic,
            additional:additional,
            title1: 'Ωmega Schools - Profiles', title2: personal[0].firstName  + " " + personal[0].lastName
          });
        });
      });
    });
  });

module.exports = router;