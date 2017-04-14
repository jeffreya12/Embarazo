var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recomendacion = require('../models/Recomendacion.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Recomendacion.find(function (err, recomendacion) {
    if (err) return next(err);
    res.json(recomendacion);
  });
});

/* POST*/
router.post('/', function(req, res, next) {
  Recomendacion.create(req.body, function (err, recomendacion) {
    if (err) return next(err);
    res.json(recomendacion);
  });
});

/* GET /id */
router.get('/:id', function(req, res, next) {
  Recomendacion.findById(req.params.id, function (err, recomendacion) {
    if (err) return next(err);
    res.json(recomendacion);
  });
});

/* PUT /:id */
router.put('/:id', function(req, res, next) {
  Recomendacion.findByIdAndUpdate(req.params.id, req.body, function (err, recomendacion) {
    if (err) return next(err);
    res.json(recomendacion);
  });
});

module.exports = router;
