$(function(){


	// $('button').click(function(event){
	$('input').keyup(function(event){
		event.preventDefault();
		var searchkey = $('input[name="name"]').val();
		var promise = $.ajax({
			method: 'GET',
			// url: "http://www.omdbapi.com/?",
			// data: {s: results},
			url: "http://www.omdbapi.com/?s=" + searchkey + "&y=&plot=full&r=json"
			})

		//successful ajax call displays Title, Year, Poster
		promise.done(function(results){
				// console.log(results.Search);
				// console.log(typeof results);

				$('ul').html('');


				for (var i = 0; i < results.Search.length; i++) {
					console.log(results.Search[i]);
					// console.log(results);

					// $('ul').append('<li>'+results.Search[i].Title+'</li>');
					// $('ul').append('<img src=' +results.Search[i].Poster+ '/>');
					$('ul').append('<li></li>')
					$('li').append('<h1>'+results.Search[i].Title+'</h1>')
						   .append('<h3>' + results.Search[i].Year + '</h3>')
						   .append('<img src=' +results.Search[i].Poster+ '/>')

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