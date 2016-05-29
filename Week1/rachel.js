console.log("i work");

console.log(null === undefined);

//==========================
// OBJECTS AND FUNCTIONS 
//==========================

//these are card objects
var oneHeart = {
	value: 1,
	card: "Heart"
}

var twoHeart = {
	value: 2,
	card: "Heart"
}


//write a function that adds two cards values
var totalValue = function (card1, card2) {

	// console.log("This is card 1 ", card1);
	// console.log("This is card 2 ", card2);
	// console.log(card1.value);
	var total = card1.value + card2.value;
	console.log(total);

	//check to see if the sum is less than 21
	//run checkTotal function
	checkTotal(total);

	return total;
};
	

//write a function that checks to see if sum is less than 21
var checkTotal = function(sum){


	if (sum < 21) {
		console.log("HIT ME! Less than 21.")
		//player goes again?

	} else {
		console.log("SORRY YOU LOSE!");
		//move on
		//stop
	}

	//do you want this function to "return" something? 
	//or can it just stand free?

};

//check the total of two cards
// Note: What does this actually "RETURN" ?
totalValue(oneHeart, twoHeart)


//=========================
// BASIC FUNCTIONS
// with MULTIPLE PARAMETERS
//=========================

// var shirt;

////this function returns the sum of 3 numbers
// var addition = function(x, r, t){

// 	var answer = x + r + t;

// 	// console.log("This is answer :", answer);

// 	return answer;

// };


////this function invokes another function, stores the value into a new variable
// var rachel = function() {

// 	//store additions value
// 	var newAnswer = addition(1, 2, 3);

// 	console.log(newAnswer);

// };

////invoke the rachel function
// rachel();


// addition(2, 6);

// console.log(addition);

//==========================
// BASIC OBJECTS
// (properties and methods (aka functions))
//==========================

// var rachel = {
// 	hair: "black",
// 	shirt: "grey",
// 	say: function (name, age){
// 		console.log("Hi I'm " + name + ". I am " + age + " years old.");
// 	}
// };
// console.log(rachel.say("Rachel", 31));
// console.log(rachel.hair, rachel.shirt);


// var christine = function(x){
// 	// console.log("christine");
// 	// shirt = "white";
// 	// console.log("This is christine's shirt: ", shirt);
// 	// var greeting = "Hi Christine";

// 	console.log(x);
// }


// christine("Hi I'm chris");

// console.log(christine());