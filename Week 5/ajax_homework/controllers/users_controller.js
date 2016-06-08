var express = require('express');
var User = require('../models/users.js');
var Post = require('../models/posts.js');
var router = express.Router();


//GET ALL USERS
router.get('/', function(req, res){
	User.find({}, function(err, user){
		res.send(user);
	});
});

//GET ALL POSTS
router.get('/posts', function(req, res){
	Post.find({}, function(err, posts){
		res.send(posts);
	});
});

//GET USER BY ID
router.get('/:id', function(req, res) {
	User.findById(req.params.id).then(function(user) {
		res.json(user);
	});
});

//CREATE A USER
router.post('/', function(req, res) {

	console.log("New User Route accessed, this is req.body: ", req.body);

	// user data from req.body
	var user = new User(req.body);

	// save new user
	user.save(function(err) {
		if(err) {
			console.log(err);
			res.json(false);
		} else {
			console.log("New user created: ", user);
			res.json(true);
		}
	});
});

//DELETE A USER
router.delete('/:id', function(req, res) {

	// find User by ID (req.params.id) and DELETE
	User.findOneAndRemove({ _id: req.params.id}, function(err, user) {
		if(err) {
			console.log(err);
			res.json(false);
		} else {
			console.log("User has been deleted: ", user);
			res.json(true)
		}
	});
});

//CREATE POST FOR USER
//code goes here
router.post('/:id/posts', function(req, res) {
	console.log("post route works");
	console.log(req.body);

	var post = new Post();
	post.entry = req.body.entry;
	post.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("post saved");

			User.findById(req.params.id).then(function(user) {
				console.log(user.posts);
				console.log(post);
			user.posts.push(post);
			user.save(function(err) {
			if (err) {
				console.log("there's an error");
				console.log(err);
			} else {
				console.log('it saved');
			}
		}) 
	})
		}
	})



})


module.exports = router;