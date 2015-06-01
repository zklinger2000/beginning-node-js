//One lesson here is that Node.js is not the best option if you have a 
//high CPU task that you need to do on a client request in a multiclient 
//server environment.
//
//this function takes a while to process
function fibonacci(n) {
	if (n < 2)
		return 1;
	else
		return fibonacci(n - 2) + fibonacci(n - 1);
}

//setup the timer
console.time('timer');
setTimeout(function () {
	console.timeEnd('timer');	//prints much more than 1000ms
}, 1000);

//start the long running operation
fibonacci(44);
