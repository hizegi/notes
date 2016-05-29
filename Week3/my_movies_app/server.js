// ======================
// Requirements
// ======================
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var ejs = require('ejs');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var db = process.env.MONGODB_URI || "mongodb://localhost/mymovies";
var port = process.env.PORT || 3000;
//console.log("port" + port);

// ======================
// Middleware
// ======================
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(methodOverride(function(req, res) {
	if(req.body && typeof req.body === 'object' && '_method' in req.body) {
		var method = req.body._method;
		delete req.body._method;
		return method;
	}
}));

// ======================
// Database
// ======================
mongoose.connect(db);

// ======================
// Controllers
// ======================
var userController = require('./controllers/users.js');
app.use('/users', userController);
// var seedController = require('./controllers/seed.js');
// app.use('/seed', seedController);

// ======================
// Listen
// ======================
app.listen(port);
console.log("==>Port running on Andre" + port + "<==");
