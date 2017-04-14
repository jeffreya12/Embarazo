var mongoose = require('mongoose');

var ConsejoSchema = new mongoose.Schema({
	consejo : String,
	autor : String,
	user_id : String,
});

module.exports = mongoose.model('Consejo', ConsejoSchema);
