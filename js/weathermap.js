// Open Weather Map Instructions:

$(document).ready(function () {
	$( "#submit" ).click(function(event) {
	  event.preventDefault();

	  //Clear the content in the div
	  $("#results").empty();
	  //Because I want it to stop reloading

	  var city = $("#city_input").val().replace(" ", /%20/);
	  //Replace spaces with %20 to make the URL valid

	  var state = $("#state_input").val().replace(" ", /%20/);

	  if(city === "" && state === ""){
	  		//If there is no input ask the user for input
			$( "#results" ).append( "<p>Please Add Input</p>");
			//Make the user input info if none is added
			console.log(city);
			console.log(state);
		} else {
		  //Replace spaces with %20 to make the URL valid as well
		  var apiKey = '4a332836f8905f227b7286a4fd055b7e';
		  //API key so I can complete the URL
		  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&APPID=" + apiKey;
		  //Add them all together

		  var metric = weatherUrl + "&units=metric";
		  //Metric and Imperial options are available just in case.
		  var imperial = weatherUrl + "&units=imperial";
		  console.log(weatherUrl);

		  $.get(imperial, function(response) {
		      console.log(response);
		      var temp = response["main"]["temp"];
		      var humidity = response["main"]["humidity"];
		      var speed = response["wind"]["speed"];
		      var name = response["name"];
		      //Get Weather Info from the API



		      //Handlebars

			      var source   = $("#weather-template").html();
			      //Find the Template in the Script
			      var weather = {tempbars:  temp,
			      				 humiditybars: humidity,
			      				 speedbars: speed,
			      				 namebars: name
			      				};
			      //Input the data for the template
			      var theTemplateScript = $("#weather-template").html();
			      //Initialize The Data
			      var theTemplate = Handlebars.compile(theTemplateScript);

			      $("#results").append(theTemplate(weather));
			      //Compile and Append the data on the results div

		      if(temp > 95){
		      	document.body.style.backgroundColor = "#FF0000";
		      } else if(temp > 80) {
		      	document.body.style.backgroundColor = "#FFA500";
		      } else if(temp > 69){
		      	document.body.style.backgroundColor = "#E6E600";
		      } else if(temp > 59){
		      	document.body.style.backgroundColor = "#00eaf0";
		      } else if(temp > 57){
		      	document.body.style.backgroundColor = "#0000FF";
		      } else {
		      	document.body.style.backgroundColor = "#000099";
		      }
		      //Use an If/Else Statement to change the body color based on the temperature.
		    });
		      var apiKeyPic = "646c9839b3536b7bdf5ddc18221d1b86"
		      var pictureUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKeyPic + "&text=" + state + " " + city +"&per_page=1&page=1&format=json&nojsoncallback=1";
		      // get function for the picture
		      console.log(pictureUrl);
		      // Use Get function to find the src url
		     $.get(pictureUrl, function(responsetwo) {
		     		var farm = responsetwo["photos"]["photo"][0]["farm"];
			      	var server = responsetwo["photos"]["photo"][0]["server"];
			      	var id = responsetwo["photos"]["photo"][0]["id"];
			      	var secret = responsetwo["photos"]["photo"][0]["secret"];
			      	var src = "https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + ".jpg";
			      	//When src url is found prepend it so it will be above #nyc-weather
			      	$( "#nyc-weather" ).prepend( "<img class='responsive' src=" + src + "/>");
		     });

		}
	});

});
