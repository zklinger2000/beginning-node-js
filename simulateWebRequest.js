//This is showing how the callback functions are allowing these
//calls to run simultaneously on a single threaded process
//When you run it, you will see that it doesn't take 3 seconds in
//between calling and ending the two function calls, so they were
//started one right after the other before the first was even done.
function longRunningOperation(callback) {
// simulate a 3 second operation
setTimeout(callback, 3000);
}

function webRequest(request) {
	console.log('starting a long operation for request:', request.id);
	longRunningOperation(function () {
	console.log('ending a long operation for request:', request.id);
	});
}
// simulate a web request
webRequest({ id: 1 });
// simulate a second web request
webRequest({ id: 2 });

