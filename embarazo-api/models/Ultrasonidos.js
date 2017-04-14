var mongoose = require('mongoose');

var UltrasonidoSchema = new mongoose.Schema({
	foto : String,
	fecha : Date,
	observaciones : String,
	user_id : String,
});

module.exports = mongoose.model('Ultrasonido', UltrasonidoSchema);
