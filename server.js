// Define routes for simple SSJS web app.
// Writes Coinbase orders to database.
var async   = require('async')
  , express = require('express')
  , fs      = require('fs')
  , http    = require('http')
  , https   = require('https')
  , db      = require('./models');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8000);

var oneDay = 86400000;
app.use(express.compress());
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

// Render homepage (note trailing slash): example.com/
app.get('/', function(request, response) {
  var data = fs.readFileSync('./views/templates/index.html').toString();
  response.send(data);
});

// Render /bizzers: rosham.biz/bizzers
app.get('/bizzers', function(request, response) {
  var data = fs.readFileSync('./views/templates/bizzers.html').toString();
  response.send(data);
});

//Render /bamwich: rosham.biz/bamwich
app.get('/bamwich', function(request, response) {
  var data = fs.readFileSync('./views/templates/bamwich.html').toString();
  response.send(data);
});

app.get('/grain', function(request, response) {
  var data = fs.readFileSync('./views/templates/grain.html').toString();
  response.send(data);
});

app.get('/bark', function(request, response) {
  var data = fs.readFileSync('./views/templates/bark.html').toString();
  response.send(data);
});

app.get('/test', function(request, response) {
  var data = fs.readFileSync('./views/templates/test.html').toString();
  response.send(data);
});

app.get('/share', function(request, response) {
  var data = fs.readFileSync('./views/templates/share.html').toString();
  response.send(data);
});

app.get('/goose', function(request, response) {
  var data = fs.readFileSync('./views/templates/goose.html').toString();
  response.send(data);
});


// sync the database and start the server
db.sequelize.sync().complete(function(err) {
  if (err) {
    throw err;
  } else {
    http.createServer(app).listen(app.get('port'), function() {
      console.log("Listening on " + app.get('port'));
    });
  }
});
