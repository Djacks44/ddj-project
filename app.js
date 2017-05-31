// set variables for environment
var express = require('express');
var app = express();
var path = require('path');



// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));

// instruct express to server up static assets
app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.render('index');
});

// Set server port
app.listen(3000);
console.log('server is running on port 3000');

