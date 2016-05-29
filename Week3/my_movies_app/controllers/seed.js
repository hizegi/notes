// ============================
// Requirements
// ============================
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Users = require('../models/users.js');

// router.get('/', function(req,res){
// 	console.log("==========this router is working========");
// 	Users.find({}, function(err, users) {
// 		res.json(users);
// 	});
// });

// router.get('/newusers', function(req, res) {
// 	console.log("the seed is here")
// 	var newUsers = [
// 		{
// 			name: "Rachel",
// 			favoriteGenre: "Horror",
// 			likedMovies: ["The Exorcist", "Poltergeist"]
// 		},
// 		{
// 			name: "Kareem",
// 			favoriteGenre: "Action",
// 			likedMovies: ["Kill Bill", "The Professional"]
// 		},
// 		{
// 			name: "Joe",
// 			favoriteGenre: "Romance",
// 			likedMovies: ["Ghost", "Just Go With It"]
// 		}];
// 	// console.log(newCharacters);
// 	Users.create(newUsers, function() {
// 		console.log(newUsers);
// 		console.log("======== Seeds Planted =======");
// 		res.redirect('/seed');
// 	});
// });

module.exports = router;