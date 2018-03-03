
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




  router.get('/index', function(req, res) {
    // findAll returns all entries for a table when used with no options
    burgers.Burgers.findAll({}).then(function(data) {
      // access to the burgers as an argument inside of the callback function
      var hbsObject = { burgers: data };
    //render via handlebars
    res.render('index', hbsObject);
  });
});



// Create a New Burger
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});

  router.post('/burger/create', function(req, res) {
    // console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });


// Devour a Burger
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = router;