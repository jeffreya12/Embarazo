var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Doctor = require('../models/Doctor.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Doctor.find(function (err, doctor) {
    if (err) return next(err);
    res.json(doctor);
  });
});

/* POST*/
router.post('/', function(req, res, next) {
  Doctor.create(req.body, function (err, doctor) {
    if (err) return next(err);
    res.json(doctor);
  });
});

/* GET /id */
router.get('/:id', function(req, res, next) {
  Doctor.findById(req.params.id, function (err, doctor) {
    if (err) return next(err);
    res.json(doctor);
  });
});

/* PUT /:id */
router.put('/:id', function(req, res, next) {
  Doctor.findByIdAndUpdate(req.params.id, req.body, function (err, doctor) {
    if (err) return next(err);
    res.json(doctor);
  });
});

/* DELETE/:id */
router.delete('/:id', function(req, res, next) {
  Doctor.findByIdAndRemove(req.params.id, req.body, function (err, doctor) {
    if (err) return next(err);
    res.json(doctor);
  });
});

module.exports = router;
