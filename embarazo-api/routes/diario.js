var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Diario = require('../models/Diario.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Diario.find(function (err, diario) {
    if (err) return next(err);
    res.json(diario);
  });
});

/* POST*/
router.post('/', function(req, res, next) {
  Diario.create(req.body, function (err, diario) {
    if (err) return next(err);
    res.json(diario);
  });
});

/* GET /id */
router.get('/:id', function(req, res, next) {
  Diario.findById(req.params.id, function (err, diario) {
    if (err) return next(err);
    res.json(diario);
  });
});

/* PUT /:id */
router.put('/:id', function(req, res, next) {
  Diario.findByIdAndUpdate(req.params.id, req.body, function (err, diario) {
    if (err) return next(err);
    res.json(diario);
  });
});

/* DELETE/:id */
router.delete('/:id', function(req, res, next) {
  Diario.findByIdAndRemove(req.params.id, req.body, function (err, diario) {
    if (err) return next(err);
    res.json(diario);
  });
});

module.exports = router;
