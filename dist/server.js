'use strict';

var app = require('./index');
var http = require('http');


var server;

/*
 * Create and start HTTP server.
 */

server = http.createServer(app);
server.listen(process.env.PORT || process.env.VCAP_APP_PORT || 80);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
