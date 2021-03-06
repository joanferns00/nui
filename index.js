var express = require('express');
var app = express();
var path    = require("path");
var DIST_DIR = path.join(__dirname, "dist");


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
app.get('/', function(req, res) {
  //res.send('Hello World!');
  res.sendFile(path.join(__dirname+'/html/jsonly.html'));
});

app.get('/jquery', function(req, res) {
  res.sendFile(path.join(__dirname+'/jQuery/jq.html'));
});

app.get('/download/request', function(req, res) {
  var x = [
  {'name': 'host1',
   'hostname' : 'nessus-ntp.lab.com',
   'port' : 1241,
   'username' : 'toto'}, 
  {'name': 'host2',
   'hostname' : 'nessus-xml.lab.com',
   'port' : 3384,
   'username' : 'admin'}, ]
      res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ configurations : x }));
});


// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);