
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
var server = http.createServer(app);
app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var fs = require('fs');
var routePath = __dirname + '/server_modules/';
fs.readdirSync(routePath).forEach(function (file) {
    require(routePath + file)(app);
});

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});