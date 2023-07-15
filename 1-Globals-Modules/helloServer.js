//includemodule.js
var http = require('http');
var includedDate = require('./firstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + includedDate.myDateTime());
  res.end();
}).listen(8080);
