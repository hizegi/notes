var mongoose = require('mongoose');
var postSchema = require('./posts').schema;

var userSchema = mongoose.Schema({
	username: String,
	posts: [postSchema]
})

var User = mongoose.model('User', userSchema);

module.exports = User;

