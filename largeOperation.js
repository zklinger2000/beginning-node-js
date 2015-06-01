//This is supposed to simulate taking up processor time.  This takes about
//10 seconds to complete on my Mac
console.time('timeit');

function fibonacci(n) {
	if (n < 2)
		return 1;
	else
		return fibonacci(n - 2) + fibonacci(n - 1);
}

fibonacci(44);	//modify this number based on your system performance
console.timeEnd('timeit');	//On my system it takes about 9000ms (i.e. 9 seconds)
