var mongoose = require('mongoose');

var EventoSchema = new mongoose.Schema({
	fecha : Date,
	categoria : String,
	user_id : String,
});

module.exports = mongoose.model('Evento', EventoSchema);
