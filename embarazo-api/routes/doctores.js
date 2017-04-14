var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Doctor = require('../models/Doctores.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Doctor.find(function (err, doctor) {
    if (err) return next(err);
    res.json(doctor);
  });
});
module.exports = router;
