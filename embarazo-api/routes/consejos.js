var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Consejo = require('../models/Consejos.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Consejo.find(function (err, consejo) {
    if (err) return next(err);
    res.json(consejo);
  });
});
module.exports = router;
