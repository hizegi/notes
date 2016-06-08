var express = require('express');
var User = require('../models/users.js');
var Post = require('../models/posts.js');
var router = express.Router();


router.get('/',function(req, res){
	console.log("seeding");
	
	//FIRST USER AND POST
	var firstPost = new Post({
		entry: "My favorite game is Cards Against Humanity"
	});

	var firstUser = new User({
		username: "David The Savage",
		posts: [firstPost]
	});

	firstUser.save().then(function(){
		firstPost.save();
	})

	//SECOND USER AND POST
	var secondPost = new Post({
		entry: "I like taking strolls in the Forest of Evil"
	});

	var secondUser = new User({
		username: "Tims",
		posts: [secondPost]
	});

	secondUser.save().then(function(){
		secondPost.save();
	})
});

module.exports = router;