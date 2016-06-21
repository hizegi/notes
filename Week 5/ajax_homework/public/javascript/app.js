$(document).ready(function() {

getUsers();


var $homeButton = $('#home-button');
// console.log($homeButton);

$homeButton.click(function(){
	getUsers();
})

});


// ======================================================================
// 					This will show the ALL USERS
// ======================================================================

var renderUsers = function(data){

console.log("WE GOT THE USERS?", data);


	var $usersContainer = $('#users-container');
	var $usersList = $('#users-list');

	$usersContainer.empty()

	// Add UL for usersList
	var $usersList = ("<ul id='users-list'></ul>")

	// append the List to the usersContainer
	$usersContainer.append($usersList);

	// Parse through [data] to display the data on the page
	for (var i = 0; i < data.length; i++){

		console.log(data);
		console.log(data[i]);
		console.log("This is the data's id number: ", data[i]._id);

		var $currentUser = $("<li class='user-item' data-attribute=" + data[i]._id + ">" + data[i].username + "</li>");
		$currentUser.click(function(){
			var target = $(event.target);//This code sets a variable equal to the target element
			showUser(target.attr("data-attribute"));
		});
		$('#users-list').append($currentUser);

		// add a button to the form
		$('#users-list').append("<button id=delete-button" + data[i]._id + ">Delete </button>");

		//Create event handlers for Delete Buttons
		$("#delete-button" + data[i]._id).click(function() {

			// grab User ID by the delete button ID
			var sendID = $(this).attr('id');

			// get ID by slicing 13 characters in (ex: "delete-button12345")
			// will result in "12345"
	        sendID = sendID.slice(13)

	        console.log("DELETING user ID: ", sendID);

	        //invoke deleteUser with ID
			deleteUser(sendID);

		})
	};

	$usersContainer.append("<button id='new-user'>Create User</button>");

	// on NEW BUTTON click, fire renderCreateUser
	$("#new-user").click(function() {
		renderCreateUser();
	})
};

// ======================================================================
// 					This will show the USER SHOW PAGE
// ======================================================================

var renderUserShow = function(data){
	console.log("This is the data from renderUserShow: ", data);

	var $usersContainer = $('#users-container');
	$usersContainer.empty();
	
	// this is USER NAME (data.username)
	var $currentUsername = $("<li class='user-info-item'>" + data.username + "</li>");

	$usersContainer.append($currentUsername);

	// Append the LI to the UL
	var $userPosts = $('<ul id="user-posts"></ul>')
	$usersContainer.append($userPosts);

	for (var i = 0; i < data.posts.length; i++){
		var $currentUserPost = $("<li class='user-post'>" + data.posts[i].entry + "</li>");
		$userPosts.append($currentUserPost);
	};
	
	// Append new post form
	$usersContainer.append("<form id='add-post'></form>");

	// From for new Post
	var createFormData = 
		"<label for='entry'>Enter new post:</label>" +
		"<input type='text' name='entry' value='Say it!'> " + "</br>" +
		"<button id='add-post-button'>Submit</button>";

	$("#add-post").append(createFormData);

	// On SUBMIT: 
	// CLICK EVENT (fire an AJAX call)
	$("#add-post-button").click(function() {

		// serialize form data
		var $newPostData = $("#add-post").serialize();

		//invoke createPost AJAX call with 1. Form Data and 2. User Data
		createPost($newPostData, data);
	});
};

// ======================================================================
// 					This will show the NEW USER FORM
// ======================================================================

var renderCreateUser = function() {

	console.log("renderCreateUser fired: should show NEW FORM");

	//create a usersContainer to append a form to
	var $usersContainer = $('#users-container');
	$usersContainer.empty();

	// append form to usersContainer
	$usersContainer.append("<form id='new-form'></form>");

	// form stuff HTML
	var createFormData = 
		"<label for='username'>Enter User Name:</label>" +
		"<input type='text' name='username' value='Its big'> " + "</br>" +
		"<button id='create-it-button'>Submit</button>";

	// append inputs to form
	$("#new-form").append(createFormData);

	// click on "NEW" and fire createUser AJAX call
	$("#create-it-button").click(function() {

			// serialize(); is method for forms
			var $newFormData = $("#new-form").serialize();

			console.log("This is what serialize does: ", $newFormData);

			//invoke createUser with formData
			createUser($newFormData);

			console.log("New user button has been clicked!");
			console.log("We are sending this data: ", $newFormData);
		});	

}


// ======================================================================
// ======================================================================
// 								AJAX CALLS
// ======================================================================
// ======================================================================

// grab all the users in the DB
var getUsers = function (){

	$.ajax({
		url: '/users/',
		method: 'GET',
		success: function(response){
			console.log("AJAX GET REQUEST successful: ", response);
			renderUsers(response);
		}
	});
};


// Grab USER by ID
var showUser = function(user_id) {
	$.ajax({
		url: '/users/' + user_id,
		method: 'GET',
		success: function(data){
			console.log("AJAX GET REQUEST successful: ", data);
			renderUserShow(data);
		}
	});
};


var createUser = function(newUser) {
	console.log("createUser button fired! Making AJAX call...");
	console.log("...with this data: ", newUser);
	//newUser === (username=Christine)

	// AJAX call to router.post('/');
	$.ajax({
		url: '/users/',
		method: 'post',
		data: newUser,
		success: function(data, status, jqXHR) {
			console.log("AJAX call was a SUCCESS FOR: ", data);
		},
		failure: function(jqXHR, status, error) {
			console.log("FAILURE for ajax create user: ");
			console.log(error);
		}
	});
};


var deleteUser = function(user_id) {

	console.log("This is the user id: ", user_id);

	$.ajax({
	url: '/users/' + user_id,
	method: 'delete',
	success: function(data, status, jqXHR){
		console.log("AJAX call for DELETE a success: ", data);
		console.log("This is the status: ", status);
		},
	failure: function(jqXHR, status, error)	{
		console.log("deleteuser ajax failed");
		console.log(error);
	},
	//default action (will always do this no matter what);
	complete: function() {
		// reload the page
		// since I can't redirect on server side
		location.reload();
	}
	});

};

var createPost = function(postData, userData){

	console.log("This is the Post we're accessing: ", postData);
	console.log("This is the user we're accessing: ", userData);

	$.ajax({
	url: '/users/' + userData._id + "/posts",
	method: 'post',
	data: postData,
	success: function(data, status, jqXHR){
		console.log("AJAX call for POST post a success: ", data);
		},
	failure: function(jqXHR, status, error)	{
		console.log("post ajax failed");
		console.log(error);
	},
	complete: function() {
		// reload the page
		// since I can't redirect on server side
		location.reload();
	}
	});
}
