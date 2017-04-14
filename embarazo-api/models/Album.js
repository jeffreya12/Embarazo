var mongoose = require('mongoose');

var AlbumSchema = new mongoose.Schema({
	directorios : Array,
	user_id : String,
});

module.exports = mongoose.model('Album', AlbumSchema);
