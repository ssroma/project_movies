                                             //main.js
(function($){

$(document).ready(() => {

	var $form = $('#main_form'),
		$input_search = $form.find('#movie_search');

	$form.on("submit", function(event){ // on submit prevendefault

		//alert($input_search.val());

		$.ajax({

			url : 'http://www.omdbapi.com/?s='+$input_search,
			type : 'GET',
			success : function(response){

				console.log(response);
			}


		});
		

		event.preventDefault(); // prevent the page to go to action page we will use AJAX
	});	




}); // jquery document.ready functions


})(jQuery);  // self calling anonymous function 

