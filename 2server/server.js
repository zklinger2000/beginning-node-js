//module requires
var http = require('http');
var fs = require('fs');

//a function for writing an error message when a GET request is for
//an URL that is not recognized or allowed
function send404(response) {
	response.writeHead(404, { 'Content-Type': 'text/plain' });
	response.write('Error 404: Resource not found.');
	response.end();
}

var server = http.createServer(function (request, response) {
	try {
		if (request.method == 'GET' && request.url == '/') {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			fs.createReadStream('./public/index.html').pipe(response);
		}
		else {
			send404(response);
		}
	} catch(error) {
		console.log(error);
	}
}).listen(3000);
console.log('server running on port 3000');
