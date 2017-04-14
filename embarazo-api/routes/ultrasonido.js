var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Ultrasonido = require('../models/Ultrasonido.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Ultrasonido.find(function (err, ultrasonido) {
    if (err) return next(err);
    res.json(ultrasonido);
  });
});

/* POST*/
router.post('/', function(req, res, next) {
  Ultrasonido.create(req.body, function (err, ultrasonido) {
    if (err) return next(err);
    res.json(ultrasonido);
  });
});

/* GET /id */
router.get('/:id', function(req, res, next) {
  Ultrasonido.findById(req.params.id, function (err, ultrasonido) {
    if (err) return next(err);
    res.json(ultrasonido);
  });
});

/* PUT /:id */
router.put('/:id', function(req, res, next) {
  Ultrasonido.findByIdAndUpdate(req.params.id, req.body, function (err, ultrasonido) {
    if (err) return next(err);
    res.json(ultrasonido);
  });
});

/* DELETE/:id */
router.delete('/:id', function(req, res, next) {
  Ultrasonido.findByIdAndRemove(req.params.id, req.body, function (err, ultrasonido) {
    if (err) return next(err);
    res.json(ultrasonido);
  });
});

module.exports = router;
