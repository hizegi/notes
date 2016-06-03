// ================================
// REQUIREMENTS
// ================================
var express = require("express"),
	router = express.Router(),
	Candy = require("../models/candy.js");

// ================================
// GET REQUESTS
// ================================

// INDEX PAGE
router.get('/', function(req, res){
	Candy.find({}, function(err, candy){
		res.render("index.ejs", {candy: candy});	
	})
	
});

// NEW CANDY
router.get('/new', function(req, res){
	res.render("new.ejs");
});

// ================================
// NEW
// ================================
router.post('/', function(req, res){
	// console.log("NEW CANDY ROUTE YAY");
	var newCandy = new Candy(req.body);
	newCandy.save(function(err, data){
		res.redirect('/');
	})
});

// ================================
// EXPORTS
// ================================
module.exports = router;