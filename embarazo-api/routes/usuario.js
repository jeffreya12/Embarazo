var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Usuario = require('../models/Usuario.js');

/* GET listing. */
router.get('/', function(req, res, next) {
  Usuario.find(function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});

/* POST*/
router.post('/', function(req, res, next) {
  Usuario.create(req.body, function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});

/* GET /id */
router.get('/:id', function(req, res, next) {
  Usuario.findById(req.params.id, function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});

/* GET /correo/pass */
router.get('/:correo/:pass', function(req, res, next) {
  Usuario.find(req.params, function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});

/* PUT /:id */
router.put('/:id', function(req, res, next) {
  Usuario.findByIdAndUpdate(req.params.id, req.body, function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});

/* DELETE/:id */
router.delete('/:id', function(req, res, next) {
  Usuario.findByIdAndRemove(req.params.id, req.body, function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});

module.exports = router;
