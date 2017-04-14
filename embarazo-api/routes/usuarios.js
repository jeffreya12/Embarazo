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
