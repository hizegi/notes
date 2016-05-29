// ===================
// Requirements
// ===================
var express = require('express');
var router = express();
var request = require('request');
var cookieParser = require('cookie-parser');
var Users = require('../models/users.js');


// ===================
// GET
// ===================
router.get('/', function(req, res) {
	console.log("======>index router is working<=======");
	// Users.find({}, function(err, products) {
	// 	res.render('index.ejs', {products})
	// });
   if(req.cookies.name != null){
   	console.log("USER COOKIES FOUND! ", res.cookie.name);
    res.redirect('/users/index');
  } else{
  	console.log("USER COOKIES NOT FOUND :( ");
    res.redirect('/users/newuser');
  }
});

// New user
router.get('/newuser', function(req, res) {
	console.log("=====>That new new<=====");
	res.render('newuser.ejs');
});

// Hit the API + encodedURICompnent(query) think of res.send response.body. only prints to terminal.  I don't understand the syntax for this actions

router.get('/likedmovies', function(req, res) {
	var response_data;
	request("http://www.omdbapi.com/?t=happy+feet&y=&plot=short&r=json", function(err, response, body) {
		if(!err && response.statusCode == 200) {
			console.log("API data below<====");
			console.log(body);
			response_data = body;
		};
	});
	console.log(response_data);
	res.json(response_data);
});

//the show page
//show the movie that entered
//get the user
//get the user info (movie) <<< this data will be passed through the API 
// ++ Find user by cookie (this will show person who is logged in)
// ++ find by id (set up params)
router.get('/show', function(req, res){

	res.render("show.ejs");

})



// ===================
//  NEW
// ===================
router.post('/title', function(req, res) {
	console.log("=====>That NEW USER THO<=====")

	console.log("This is req.body: ", req.body);
	newUser = new Users(req.body);


	newUser(userData, function(user){
		res.cookie('name', newUser.name);
   	    console.log("This is cookie.user.name: ", res.cookie.name)
        res.redirect('/users/show');
  });
});




// ===================
//  UPDATE
// ===================


// ===================
// DELETE
// ===================


// ===================
// 
// ===================

// ===================
//
// ===================



module.exports = router;