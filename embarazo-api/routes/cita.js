var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cita = require('../models/Cita.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Cita.find(function (err, cita) {
    if (err) return next(err);
    res.json(cita);
  });
});

/* POST*/
router.post('/', function(req, res, next) {
  Cita.create(req.body, function (err, cita) {
    if (err) return next(err);
    res.json(cita);
  });
});

/* GET /id */
router.get('/:id', function(req, res, next) {
  Cita.findById(req.params.id, function (err, cita) {
    if (err) return next(err);
    res.json(cita);
  });
});

/* PUT /:id */
router.put('/:id', function(req, res, next) {
  Cita.findByIdAndUpdate(req.params.id, req.body, function (err, cita) {
    if (err) return next(err);
    res.json(cita);
  });
});

module.exports = router;
