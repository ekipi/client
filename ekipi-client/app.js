var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/dist/ekipi-client'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/ekipi-client/index.html'));
});

app.listen(3000);