var fs = require('fs')
var express = require('express')
var app = express();
require('songbird')

app.listen(8000);


app.get('/callback', function (req, res) {
	//BAD
	//Using callback
	fs.readdir(__dirname, function (err, files) {
		console.log(files);
		res.send(files + '\n');
	});
});

app.get('/promise', function (req, res) {
	//BETTER
    //Using promises
	fs.promise.readdir(__dirname).then(function (files) {
		console.log(files);
	});
});

app.get('/async', ls, function (req, res) {
	
});

app.get('/', myFunct, function (req, res) {
	console.log("Hey, Node.js!")
	res.end("Client - Hey, Node.js! \n")
});

function myFunct(req, res, next) {
	console.log("in the 'myFunct' middleware at server");
	res.write("in the 'myFunct' middleware in the client \n");
	next();
}

async function ls(req, res, next) {
	var files = await fs.promise.readdir(__dirname);
	console.log(files);
	next();
}
ls().catch(function (err) {
	console.log(err.stack);
});


//    //BEST
//    //Using async await
//    async function ls() {
//      let files = await fs.promise.readdir(__dirname);
//      console.log(files);
//    }
//    ls().catch(function(err) {
//      console.log(err.stack);
//    });
