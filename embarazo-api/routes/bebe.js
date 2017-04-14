var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bebe = require('../models/Bebe.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Bebe.find(function (err, bebe) {
    if (err) return next(err);
    res.json(bebe);
  });
});

/* POST*/
router.post('/', function(req, res, next) {
  Bebe.create(req.body, function (err, bebe) {
    if (err) return next(err);
    res.json(bebe);
  });
});

/* GET /id */
router.get('/:id', function(req, res, next) {
  Bebe.findById(req.params.id, function (err, bebe) {
    if (err) return next(err);
    res.json(bebe);
  });
});

/* PUT /:id */
router.put('/:id', function(req, res, next) {
  Bebe.findByIdAndUpdate(req.params.id, req.body, function (err, bebe) {
    if (err) return next(err);
    res.json(bebe);
  });
});

module.exports = router;
