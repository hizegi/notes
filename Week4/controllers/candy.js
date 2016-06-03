// ================================
// REQUIREMENTS
// ================================
var express = require("express"),
	router = express.Router(),
	Candy = require("../models/candy.js");

// ================================
// INDEX
// ================================

// INDEX PAGE
router.get('/', function(req, res){
	console.log(req);
	Candy.find({}, function(err, candy){
		res.render("index.ejs", {candy: candy});	
	})
	
});

// ================================
// NEW
// ================================
// NEW CANDY
router.get('/new', function(req, res){
	res.render("new.ejs");
});


// ================================
// SHOW
// ================================
router.get('/:id', function(req, res){
	Candy.findById(req.params.id, function(err, candy){
		res.render("show.ejs", {candy: candy})
	});
});

// ================================
// CREATE
// ================================
router.post('/', function(req, res){
	// console.log("NEW CANDY ROUTE YAY");
	var newCandy = new Candy(req.body);
	newCandy.save(function(err, data){
		res.redirect('/');
	})
});


// ================================
// EDIT
// ================================
router.get('/:id/edit', function(req, res){
	Candy.findById(req.params.id, function(err, candy){
		res.render("edit.ejs", {candy: candy});
	})
});

// ================================
// UPDATE
// ================================




// ================================
// DELETE
// ================================


// ================================
// EXPORTS
// ================================
module.exports = router;






































//// update candy info
// router.put("/:id", function(req, res){
// 	Candy.findByIdAndUpdate(req.params.id, req.body, function(err, candy){
// 				res.redirect('/' + req.params.id);
// 			});
// });

//// delete candy
// router.delete("/:id", function(req, res){
// 	Candy.findByIdAndRemove(req.params.id, function(err, donut){
// 		res.redirect('/');
// 	})
// });

