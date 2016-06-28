window.onload = function(){

	console.log("i work");

	var secretValue = document.querySelector("#secret-input");
	// console.log(secretValue);

	var button = document.getElementById("click-me");
	// console.log(button);

	var newMessage = document.getElementById("message");

	button.onclick = function(event){
		event.preventDefault();
		// console.log("i clicked!");
		var secretMessage = secretValue.value;
		// console.log(secretMessage);

		newMessage.innerHTML = secretMessage;
	};

};


















// window.onload = function(){

// 	console.log("i work");

// 	var secretValue = document.querySelector("#secret-input");
// 	console.log(secretValue);

// 	var newMessage = document.getElementById("message");


// 	var button = document.getElementById("click-me");
// 	console.log(button);

// 	button.onclick = function(event){
// 		event.preventDefault();
// 		var secretMessage = secretValue.value;

// 		console.log("i clicked!");
// 		console.log(secretMessage);
// 		newMessage.innerHTML = secretMessage;

// 	};

// };