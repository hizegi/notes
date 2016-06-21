$(function(){


	// $('button').click(function(event){
	$('input').keyup(function(event){
		event.preventDefault();


		var searchkey = $('input[name="name"]').val();
		console.log(searchkey);


		var promise = $.ajax({
			method: 'GET', //HTTP VERB post, get, put
			// url: "http://www.omdbapi.com/?",
			// data: {s: results},
			url: "http://www.omdbapi.com/?s=" + searchkey + "&y=&plot=full&r=json"
			})


		//successful ajax call displays Title, Year, Poster
		promise.done(function(results){

			console.log("This is what I get back from AJAX success: ", results);
				// // console.log(results.Search);
				// console.log(typeof results);

				$('ul').html('');


				for (var i = 0; i < results.Search.length; i++) {

					// console.log(results.Search[i]);
					// console.log(results);


					console.log("This is our title:", results.Search[i].Title);

					//TITLE (STRING INTERPOLATION)
					$('ul').append('<li>' + results.Search[i].Title + '</li>');

					//POSTER
					$('ul').append('<img src=' + results.Search[i].Poster + '/>');

					//PLOT
					$('ul').append('<li></li>')


					$('li').append('<h1>'+ results.Search[i].Year +'</h1>')
						   .append('<h3>' + results.Search[i].Title + '</h3>')
						   .append('<img src=' + results.Search[i].Poster + '/>')

				}

				// $('h1').html(results.Title);
				// $("#director").html(results.Director);
				// $("#plot").html(results.Plot);
				// $("#actors").html(results.Actors);
				// $("img").attr("src", results.Poster);
		}) //ends promise.done



		promise.fail(function(){
			console.log("Something didn't work")
		})
			
	})
})















					// $('ul').append('<li></li>')
					// $('li').append('<h1>'+results.Search[i].Title+'</h1>')
					// 	   .append('<h3>' + results.Search[i].Year + '</h3>')
					// 	   .append('<img src=' +results.Search[i].Poster+ '/>')