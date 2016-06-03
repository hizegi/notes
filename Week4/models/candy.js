// ================================
// REQUIREMENTS
// ================================
var mongoose = require("mongoose");

var candySchema = new mongoose.Schema({
	name: String,
	quantity: Number,
	image: String,
	description: String
});

var Candy = mongoose.model('Candy', candySchema);

// ================================
// EXPORTS
// ================================
module.exports = Candy;