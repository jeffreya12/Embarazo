var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Album = require('../models/Albumes.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Album.find(function (err, album) {
    if (err) return next(err);
    res.json(album);
  });
});
module.exports = router;
