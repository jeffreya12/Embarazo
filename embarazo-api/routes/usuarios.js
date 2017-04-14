var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Usuario = require('../models/Usuarios.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Usuario.find(function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});
module.exports = router;

/* POST /todos */
router.post('/', function(req, res, next) {
  Usuario.create(req.body, function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Usuario.findById(req.params.id, function (err, usuario) {
    if (err) return next(err);
    res.json(usuario);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
