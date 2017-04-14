var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cita = require('../models/Citas.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Cita.find(function (err, cita) {
    if (err) return next(err);
    res.json(cita);
  });
});
module.exports = router;
