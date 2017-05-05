var mongoose = require('mongoose');

var DoctorSchema = new mongoose.Schema({
	nombre : String,
	centroMedico : String,
	correo : String,
	telefonoCelular : String,
	telefonoOficina : String,
	user_id : String,
});

module.exports = mongoose.model('Doctor', DoctorSchema);
