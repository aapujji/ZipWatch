// Server.js - ZipWAtch
// Written by: Aanandita Pujji

// BASE SETUP
// Call needed packages
var express = require('express');
var path = require('path');
var http = require('http');
var ejs = require('ejs');
var logger = require('morgan');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// Call to routes file
var jsondata = require('./routes/data');


// Connect to database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('ec2-52-207-220-127.compute-1.amazonaws.com:27017/zipwatch');


// Defines our app using express
var app = express();


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// configure app to use bodyParser()
// This lets us get data from POST
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 80; // Set our port to 80 or 8080 or 3000


// ROUTES FOR OUR API
// Get instance of the express routers
var router = express.Router();


// Test route
router.use(function(req,res,next) {
	console.log('Connected to routes...');
	next(); // make sure we go to the next routes and don't stop here
});

// Sets landing page to index.html
router.get('/', function(req,res,next) {
	res.render('index');
	next();
});

// Sets html form action to redirect to template.html
app.get('/search', function(req,res,next) {
	res.render('template');
	next();
});

// Sets /data extension to data.html
router.get('/data', function(req, res) {
	res.render('data');
});

// Required to use mongodb database
app.use(function(req,res,next) {
	req.db = db;
	next();
});


// REGISTER OUR ROUTES
app.use('/', router);
app.use('/data', jsondata);

// START THE SERVER
//
app.listen(port);
console.log("Connected to port " + port);