//This simulates how the callback is used to handle the waiting
//for a response from a server
//This is displaying the first-class functionality of JavaScript
//I think this means you can pass a function in as a parameter
function longRunningOperation(callback) {
	// simulate a 3 second operation
	setTimeout(callback, 3000);
}

function userClicked() {
	console.log('starting a long operation');
	longRunningOperation(function () {
		console.log('ending a long operation');
	});
}

// simulate a user action
userClicked();
