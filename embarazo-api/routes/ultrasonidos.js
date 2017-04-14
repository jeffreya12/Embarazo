var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Ultrasonido = require('../models/Ultrasonidos.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Ultrasonido.find(function (err, ultrasonido) {
    if (err) return next(err);
    res.json(ultrasonido);
  });
});
module.exports = router;
