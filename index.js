var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
 
app.get('/', function (req, res) {
    res.render('home');
});
 
var port = 5432;

app.listen(port, function(){
	console.log('Server running on port:', port);
});