var fs = require('fs')
var express = require('express')
var app = express();

app.listen(8000);

app.get('/', myfunct, function(req, res) {
	console.log("Hey Node.js!")
	res.send("check \n")
});

function myfunct(req, res, next) {
	console.log("in next -> ");
	next();
}