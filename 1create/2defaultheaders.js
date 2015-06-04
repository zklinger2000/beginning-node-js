var http = require('http');

var server = http.createServer(function (request, response) {
	console.log('request headers...');
	//this is the actual .headers property of the HTTP request object
	console.log(request.headers);
	//respond
	response.write('hello client!');
	response.end();
}).listen(3000);
console.log('server running on port 3000');
