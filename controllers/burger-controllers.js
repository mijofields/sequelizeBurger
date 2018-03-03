
// Node Dependencies
var express = require('express');
var router = express.Router();
var burgers = require('../models');



// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


  //bring all the burgers into the index page

  router.get('/index', function(req, res) {
    // findAll returns all entries for a table when used with no options
    burgers.Burgers.findAll({}).then(function(data) {
      // access to the burgers as an argument inside of the callback function
      var hbsObject = { burgers: data };
    //render via handlebars
    res.render('index', hbsObject);
  });
});


//create a new burger

  router.post('/burger/create', function(req, res) {
    // console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    burgers.Burgers.create({
      burger_name: req.body.burger_name,
      createdAt: new Date()
    }).then(function(data) {
      // We have access to the new todo as an argument inside of the callback function
      res.redirect('/index');
    });
  });


// Devour a Burger
// router.post('/burger/eat/:id', function (req, res) {
//   burger.updateOne(req.params.id, function() {
//     res.redirect('/index');
//   });
// });

// [{devoured: true}, {id: burgerID}]

// People.update({OwnerId: peopleInfo.newuser},
//         {where: {id: peopleInfo.scenario.id}})
//         .then(function (result) {
//             response(result).code(200);

      

  router.post('/burger/eat/:id', function( req, res ) {


burgers.Burgers.update({devoured: true},
        {where: {id: req.params.id}})
        .then(function (data) {
            res.redirect('/index');;

          });
      });



// ----------------------------------------------------


// Export routes
module.exports = router;