var mongoose = require('mongoose');

var DiarioSchema = new mongoose.Schema({
	fecha : Date,
	entrada : String,
	user_id : String,
});

module.exports = mongoose.model('Consejo', ConsejoSchema);
