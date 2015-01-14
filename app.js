var express	= require('express');
var path      = require('path');
var context        = {};

context.app        = express();
context.http       = require('http');


var server = context.http.createServer(context.app);
server.listen(3000);

context.app.use('/', express.static(path.join(__dirname, 'public')));