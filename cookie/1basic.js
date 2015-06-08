var express = require('express');

var app = express().use(function (request, response) {
	response.cookie('name', 'foo');
	response.end('Hello!');
}).listen(3000);
