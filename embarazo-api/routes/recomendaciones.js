var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recomendacion = require('../models/Recomendaciones.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Recomendacion.find(function (err, recomendacion) {
    if (err) return next(err);
    res.json(recomendacion);
  });
});
module.exports = router;
