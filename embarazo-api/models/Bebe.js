var mongoose = require('mongoose');

var BebeSchema = new mongoose.Schema({
	foto : String,
	genero : String,
	peso : Number,
	tamano : Number,
	user_id : String,
});

module.exports = mongoose.model('Bebe', BebeSchema);
