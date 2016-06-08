console.log("i work");

var apiStatus = function(data){
	console.log(data)
}

$(function(){


	$('button').click(function(e){

		$('head').append('<script src="https://status.github.com/api/status.json?callback=apiStatus"></script>')
		// $('head').append('<script src="https://ombdapi.com"></script>')
	})


	// $.ajax({
 //    url: 'https://status.github.com/api/status.json',
 //    success: function(data) { console.log(data) },
 //    error: function(jqXHR, status, errorThrown){ console.log(status); }
	// });

})
