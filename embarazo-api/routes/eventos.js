var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Evento = require('../models/Eventos.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Evento.find(function (err, evento) {
    if (err) return next(err);
    res.json(evento);
  });
});
module.exports = router;
