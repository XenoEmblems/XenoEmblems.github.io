# CageMatch Overview

Nicolas Page search engine using jQuery and Handlebars.

Angular.js version of the site coming soon.

## Project Description

This is a Movie search engine dedicated to the best actor in the known multiverse...Nicolas Cage.

He has been in a lot of movies and I wanted to make a website to search and learn about them. 
If I like it then I can find out where I can stream or buy it.

The website was built by using the The Movie DB API to pull all the movies from Nicolas Cage's illustrious career.(https://www.themoviedb.org/). Once I made the API calls then I used Handlebars templating to build the Movie divs.


Special thanks to http://www.canistream.it/ for providing me a reliable source if the movies I search can be streamed. 
I don't own that website and please support them.  


## Functional Components


This is a breakdown of the top level functionality for final project

| Component | Priority | Estimated Time | Time Invetsted |
| --- | :---: |  :---: | :---: | :---: |
| API Access | H | 1hrs| 1hrs |
|Building Array of Movie Objects| H | 4hrs| 6hrs |
|Handlebars Templating and building Front End|H|5hrs|3hrs|
|Search Functionality|M|8hrs|4hrs|

## Helper Functions
When calling the movies the Genres are assigned to ids than to their names. So I built an object array which each object has the id and the name of the genre. Then I used a filter function that when the API gives me a genre id I replace it with its name.

  function getGenreById(id) {
    return genre.filter(
      function(genre){return genre.id == id;}
    );
  }

Here is a simplified version of my search function using jQuery.grep to filter the array of movie objects that matched the text input.
More details about everything is in the JS file.
Using this function I can filter and return an array based a text input.
$("#search-button").click(function(event){
      event.preventDefault();
      var filter = $("#search-input").val();
      var filteredMovies = jQuery.grep(cagedMovies, function(e) {
                if (e.title.toLowerCase().includes(filter) === true){
                return true;
              } else {
                var title = e.title.toLowerCase().split(" ");
                //For loop.
                  for (j = 0; j < title.length; j++){
                    // If any the search input is close to this word in the title 
                    // then return this div.
                      if(title[j].indexOf(filter) == 0){
                        return true;
                        
                      } else {
                        // Else nothing happens
                        console.log("nope");
                      }
                    }
     });
});


## Additional Libraries
Bootstrap.js for responsiveness.
Handlebars.js for templating.


## Change Log
 11/21/16: First version of the site is uploaded. Movie divs were able to populate in the site.
 11/29/16: Search functionality is added. If you type in the search bar you can find the movie based on the title.
 11/30/16: Search Functionality improved. You can search by Title, Genre, and Description. Search is case insensitive.
