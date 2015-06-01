//The Revealing Module Pattern can create each new object encapsulated
function printableMessage() {
	var message = 'hello';
	function setMessage(newMessage) {
		if (!newMessage) throw new Error('cannot set empty message');
		message = newMessage;
	}
	//returns the message object
	function getMessage() {
		return message;
	}
	//prints the message to the console
	function printMessage() {
		console.log(message);
	}
	//returns the message object
	return {
		setMessage: setMessage,
		getMessage: getMessage,
		printMessage: printMessage
	};
}//END printableMessage()

//Pattern in use
var awesome1 = printableMessage();
awesome1.printMessage(); // hello

var awesome2 = printableMessage();
awesome2.setMessage('hi');
awesome2.printMessage(); // hi

//Since we get a new object everytime we call the module function
//awesome1 is unaffected by awesome2
awesome1.printMessage(); // hello
