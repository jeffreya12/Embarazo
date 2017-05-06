var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Consejo = require('../models/Consejo.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Consejo.find(function (err, consejo) {
    if (err) return next(err);
    res.json(consejo);
  });
});

/* POST*/
router.post('/', function(req, res, next) {
  Consejo.create(req.body, function (err, consejo) {
    if (err) return next(err);
    res.json(consejo);
  });
});

/* GET /id
router.get('/:user_id', function(req, res, next) {
  Consejo.find(req.params, function (err, consejo) {
    if (err) return next(err);
    res.json(consejo);
  });
});
*/

/* GET /user_id */
router.get('/:user_id', function(req, res, next) {
  Consejo.find(req.params, null, {sort: '-fecha'}, function (err, consejo) {
    if (err) return next(err);
    res.json(consejo);
  });
});

/* PUT /:id */
router.put('/:id', function(req, res, next) {
  Consejo.findByIdAndUpdate(req.params.id, req.body, function (err, consejo) {
    if (err) return next(err);
    res.json(consejo);
  });
});

/* DELETE/:id */
router.delete('/:id', function(req, res, next) {
  Consejo.findByIdAndRemove(req.params.id, req.body, function (err, consejo) {
    if (err) return next(err);
    res.json(consejo);
  });
});

module.exports = router;
