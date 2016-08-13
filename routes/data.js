//

var express = require('express');
var router = express.Router();

router.get('/majcrimecurr', function(req,res) {
	var db = req.db;
	var collection = db.get('majorcrimeCurr');
	collection.find({},{},function(err,docs) {
		res.jsonp(docs);
	});
});

router.get('/majcrimepred', function(req,res) {
	var db = req.db;
	var collection = db.get('majorcrimePred');
	collection.find({},{},function(err,docs) {
		res.jsonp(docs);
	});
});

router.get('/mincrimecurr', function(req,res) {
	var db = req.db;
	var collection = db.get('minorcrimeCurr');
	collection.find({},{},function(err,docs) {
		res.jsonp(docs);
	});
});

router.get('/mincrimepred', function(req,res) {
	var db = req.db;
	var collection = db.get('minorcrimePred');
	collection.find({},{},function(err,docs) {
		res.jsonp(docs);
	});
});

router.get('/major_crime', function(req,res) {
	var db = req.db;
	var collection = db.get('major_crime');
	collection.find({},{},function(err,docs) {
		res.jsonp(docs);
	})
});

router.get('/minor_crime', function(req,res) {
	var db = req.db;
	var collection = db.get('minor_crime');
	collection.find({},{},function(err,docs) {
		res.jsonp(docs);
	});
});

router.get('/cityname', function(req,res) {
	var db = req.db;
	var collection = db.get('cityname');
	collection.find({},{},function(err,docs) {
		res.jsonp(docs);
	});
});

router.get('/rate', function(req,res) {
	var db = req.db;
	var collection = db.get('rate');
	collection.find({},{},function(err,docs) {
		res.jsonp(docs);
	});
});

router.get('/recommend', function(req,res) {
	var db = req.db;
	var collection = db.get('recommend');
	collection.find({},{},function(err,docs) {
		res.jsonp(docs);
	});
});

module.exports = router;