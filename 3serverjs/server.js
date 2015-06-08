//module requires
var http = require('http');
var fs = require('fs');
var path = require('path');

//a function for writing an error message when a GET request is for
//an URL that is not recognized or allowed
function send404(response) {
	response.writeHead(404, { 'Content-Type': 'text/plain' });
	response.write('Error 404: Resource not found.');
	response.end();
}

var mimeLookup = {
	'.js': 'application/javascript',
	'.html': 'text/html'
};

var server = http.createServer(function (request, response) {
	try {
		if (request.method == 'GET') {
		//resolve file path to filesystem path
		var fileurl;
		if (request.url == '/') {
			fileurl = '/index.html';
		}
		else {
			fileurl = request.url;
		}
		var filepath = path.resolve('./public' + fileurl);
		//lookup mime type
		var fileExt = path.extname(filepath);
		var mimeType = mimeLookup[fileExt];
		if (!mimeType) {
			send404(response);
			return;
		}
		//see if we have that file
		fs.exists(filepath, function (exists) {
			//if not
			if (!exists) {
				send404(response);
				return;
			};
			//finally stream the file
			response.writeHead(200, { 'Content-Type': mimeType });
			fs.createReadStream(filepath).pipe(response);
		});
		}
		else {
			send404(response);
		}
	} catch(error) {
		console.log(error);
	}
}).listen(3000);
console.log('server running on port 3000');
