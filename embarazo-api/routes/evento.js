var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Evento = require('../models/Evento.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Evento.find(function (err, evento) {
    if (err) return next(err);
    res.json(evento);
  });
});

/* POST*/
router.post('/', function(req, res, next) {
  Evento.create(req.body, function (err, evento) {
    if (err) return next(err);
    res.json(evento);
  });
});

/* GET /id */
router.get('/:id', function(req, res, next) {
  Evento.findById(req.params.id, function (err, evento) {
    if (err) return next(err);
    res.json(evento);
  });
});

/* PUT /:id */
router.put('/:id', function(req, res, next) {
  Evento.findByIdAndUpdate(req.params.id, req.body, function (err, evento) {
    if (err) return next(err);
    res.json(evento);
  });
});

module.exports = router;
