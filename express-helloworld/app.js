var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

// new feature: to display Hello Mars! when a user accesses the /mars application endpoint.
app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

