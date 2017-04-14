var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bebe = require('../models/Bebes.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Bebe.find(function (err, bebe) {
    if (err) return next(err);
    res.json(bebe);
  });
});
module.exports = router;
