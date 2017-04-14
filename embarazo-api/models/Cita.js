var mongoose = require('mongoose');

var CitaSchema = new mongoose.Schema({
	motivo : String,
	fecha : Date,
	notas_importantes : String,
	user_id : String,
});

module.exports = mongoose.model('Cita', CitaSchema);
