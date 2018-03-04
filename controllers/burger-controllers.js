
// Node Dependencies
var express = require('express');
var router = express.Router();
var burgerdb = require('../models');



// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


  //bring all the burgers into the index page

  router.get('/index', function(req, res) {
    // findAll returns all entries for a table when used with no options
    burgerdb.burgers.findAll({}).then(function(data) {
      // access to the burgers as an argument inside of the callback function
      var hbsObject = { burgers: data };
    //render via handlebars
    res.render('index', hbsObject);
  });
});


//create a new burger

  router.post('/burger/create', function(req, res) {
 
    burgerdb.burgers.create({
      burger_name: req.body.burger_name,
      createdAt: new Date()
    }).then(function(data) {

      res.redirect('/index');
    });
  });
      

  router.post('/burger/eat/:id', function( req, res ) {


burgerdb.burgers.update({devoured: true},
        {where: {id: req.params.id}})
        .then(function (data) {
            res.redirect('/index');;

          });
      });



// ----------------------------------------------------


// Export routes
module.exports = router;