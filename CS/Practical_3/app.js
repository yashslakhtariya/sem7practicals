var express = require('express');
var app = express();
app.listen(3000);
console.log('Server running at http://localhost:3000/');
app.use(express.static(__dirname + '/public'));