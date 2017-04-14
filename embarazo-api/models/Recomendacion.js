var mongoose = require('mongoose');

var RecomendacionSchema = new mongoose.Schema({
	titulo : String,
	contenido : String,
	publicacion : Date,
});

module.exports = mongoose.model('Recomendacion', RecomendacionSchema);
