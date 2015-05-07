var express = require('express');

var server = express();
server.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 1337;
server.listen(port, function() {
  console.log('server is listening on port ' + port);
});
