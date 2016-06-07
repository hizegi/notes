$(function(){

	// $('input').keyup(function(e){
	// 	e.preventDefault();
	// 	var searchInput = $('input[name="name"]').val();


	// $('button').click(function(e){
	// 	e.preventDefault();
	// 	console.log("I clicked")

		var promise1 = $.ajax({
			method: 'GET',
			url: "http://swapi.co/api/people/1"
		})

		var promise2 = $.ajax({
			method: 'GET',
			url: "http://swapi.co/api/films/6"
		})

		$.when(promise1, promise2)
			.then(function(results, results2){

			console.log(results[0])
			// console.log(results.name);	
			// console.log(results.height);
			// console.log(results.mass);
			// console.log(results.hair_color);
			// console.log(results.skin_color);

			$('ul').append('<li></li>');
			$('li').append('<h2>' + results[0].name + '</h2>')
					.append('<h3>Mass: </h3><p>'+ results[0].mass + '</p>')
					.append('<h3>Films: </h3><p>'+ results2[0].title + '</p>')
					.append('<h3>Summary: </h3><p>'+ results2[0].opening_crawl + '</p>');

					// for (var i = 0; i < results2.length; i++) {
					// 	console.log(results2)
					// }
		})



	// })//ends .click event
})