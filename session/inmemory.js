var express = require('express');
var expressSession = require('express-session');

var app = express()
	.use(expressSession({
		secret: 'my super secret sign key'
	}))
	.use('/home', function (request, response) {
		if (request.session.views) {
			request.session.views++;
		}
		else {
			request.session.views = 1;
		}
		response.end('Total views for you: ' + request.session.views);
	})
	.use('/reset', function (request, response) {
		delete request.session.views;
		response.end('Cleared all your views');
	})
	.listen(3000);
