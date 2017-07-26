var topics = $('topics')

    $("#spider").on("click", function() {

//       // Storing our giphy API URL for a random cat image

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=23f6b43309c14562a304a733e47eb1a5&q=spiders&limit=10&offset=0&rating=PG-13&lang=en";

var topics = 
 ["Spiders", "Worms", "Bees", "Flies", "Beeetles", "Ants", "Cockroaches", "Millipedes", "Caterpillers", "Crickets", "Butterflies", "Dragonflies", "Locusts", "Moths", "Termites"];

  var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=23f6b43309c14562a304a733e47eb1a5&tag=&rating=PG-13";

  var topics = $(this).attr("data-name");
 
$.ajax({

        url: queryURL,

        method: "GET"

      });

 function displayGiphy(){


function renderButtons() {

  $(f"#buttons-view").empty();

  for (var i = 0; i < topics.length; i++) {

    var a = $("<button>");

      a.addClass("topics");

    a.attr("data-name", topics[i]); 

    a.text(topics[i]);

  $("#buttons-view").append(a);
  
}

}





 var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=23f6b43309c14562a304a733e47eb1a5&q=bug&limit=10&offset=0&rating=G&lang=en";

$.ajax({

	url: queryURL,

	method: "Get"

 })

 ajaxGif = function (gif) {

	$.ajax({

		url: 'http://api.giphy.com/v1/gifs/search',

		type: 'GET',

		datatype: 'json',

		data: {

			q: gif,

			api_key: '23f6b43309c14562a304a733e47eb1a5'

		}

	

   .done(function(response) {

    var imageUrl = response.data.
    		image_original_url;

   	var topicsImage = $("<img>");

    	 

  $("#giphy-view").html(JSON.stringify(
   		response));
  
   
   topics.attr("src", imageUrl);

        topicsImage.attr("alt", "topics");

        $("#images").prepend(topicsImage); 

   
}


  