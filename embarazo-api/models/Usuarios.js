var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
	correo : String,
	pass : String,
	nombre : String,
	fechaDeNacimiento : Date,
	telefono : String,
	ultimoPeriodo : Date,
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
