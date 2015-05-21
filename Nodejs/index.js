var express = require('express')
var morgan = require('morgan')
var app = express();

app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.listen(8000);

app.get('/', function (req, res) {
	res.render('index.ejs');
});