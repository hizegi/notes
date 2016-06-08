//Dependencies
	//Express
	var express = require('express');
	var app = express();
	//Morgan
	var morgan = require('morgan');
	//Body-parser
	var bodyParser = require('body-parser');
	//Mongoose
	var mongoose = require('mongoose');
	//EJS
	var ejs = require('ejs');

//Mongo Database Setup
var db = process.env.MONGODB_URI || "mongodb://localhost/simple_posts_app_dev";
mongoose.connect(db);

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

//Importing Controllers
//SEED
var seed = require('./controllers/seed_controller.js');
app.use('/seed', seed);

var users = require('./controllers/users_controller.js');
app.use('/users', users);


//Server execution
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("server is running on " + port);
});


