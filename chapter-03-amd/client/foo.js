//EXPORTING MODULES
//To export something from a module, you can simply return it from the
//define callback.
define([], function () {
	var foo = function () {
		console.log('foo was called');
	};
	//function foo is exported
	return foo;
});//END define
