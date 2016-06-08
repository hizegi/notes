var mongoose = require('mongoose');
var util = require('util');

var userSchema = mongoose.Schema({
	entry: String,
	createdAt: { type: Date, default: Date.now } 
})


var Post = mongoose.model('Post', userSchema)

module.exports = Post;

