var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Album = require('../models/Album.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Album.find(function (err, album) {
    if (err) return next(err);
    res.json(album);
  });
});

/* POST*/
router.post('/', function(req, res, next) {
  Album.create(req.body, function (err, album) {
    if (err) return next(err);
    res.json(album);
  });
});

/* GET /id */
router.get('/:id', function(req, res, next) {
  Album.findById(req.params.id, function (err, album) {
    if (err) return next(err);
    res.json(album);
  });
});

/* PUT /:id */
router.put('/:id', function(req, res, next) {
  Album.findByIdAndUpdate(req.params.id, req.body, function (err, album) {
    if (err) return next(err);
    res.json(album);
  });
});

module.exports = router;
