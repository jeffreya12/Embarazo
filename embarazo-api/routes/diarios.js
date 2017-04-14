var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Diario = require('../models/Diarios.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Diario.find(function (err, diario) {
    if (err) return next(err);
    res.json(diario);
  });
});
module.exports = router;
