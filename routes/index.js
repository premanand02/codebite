var express = require('express');
var router = express.Router();
var multer = require("multer")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/menu', function(req, res, next) {
  res.render('menu');
});

router.get('/price/:id', function(req, res, next) {
  var id = req.params.id
  res.render('price', {id});
});

router.get('/h', function(req, res, next) {
  res.render('3');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/submit', function(req, res, next) {
  res.render('submit');
});

module.exports = router;
