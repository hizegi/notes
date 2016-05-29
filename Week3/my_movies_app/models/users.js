// ====================
// Requirements
// ====================
var mongoose = require('mongoose');

// ====================
// Schemas
// ====================
var userSchema = new mongoose.Schema({
	name: String,
	favoriteGenre: String,
	likedMovies: Array
});

// ========================
// Map it through Mongoose
// ========================
var Users = mongoose.model('Users', userSchema);

module.exports = Users;