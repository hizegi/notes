// ================================
// REQUIREMENTS
// ================================
var express = require("express"),
	app = express(),
	logger = require("morgan"),
	ejs = require("ejs"),
	methodOverride = require("method-override"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	db = process.env.MONGODB_URI || "mongodb://localhost/supersweetpractice",
	port = process.env.PORT || 3000;

// ================================
// MIDDLEWARE
// ================================
// morgan
app.use(logger('dev'));
// body-parser stuff
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// public files
app.use(express.static('public'));
// method override
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// ================================
// CONTROLLERS
// ================================
var candyController = require('./controllers/candy.js');
app.use('/', candyController);

// ================================
// LISTENERS
// ================================
mongoose.connect(db);

app.listen(port);
console.log("============");
console.log('listening on port: '+ port);
console.log("============");