var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/download/request', function(req, res) {
  //res.send('Hello World test!' + req.query.host );
  var x = [{'name': 'host1'}, {'name': 'host2'}]
      res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ configurations : x }));
});


// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);