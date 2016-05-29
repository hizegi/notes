var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongod://localhost/mymovies";
var Movies = require('./models/rooms.js');

