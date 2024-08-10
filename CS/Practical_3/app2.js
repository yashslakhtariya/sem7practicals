var express = require('express');
var app = express();
app.listen(3001);
console.log('Server running at http://localhost:3001/');
app.use(express.static(__dirname + '/public2'));