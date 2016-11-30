// API I'm going to use The Movie Database

// PUT AS MANY FUNCTIONS AS POSSIBLE OUTSIDE THE FOR LOOP

//Step One: Iterate through all Nicolas Cage Movies through API
$(document).ready(function () {
  var apiKey = "d440a7f7ce806a7de7507e34281331c7";
  var nicolasCage = 2963;
  var actorId = 0;
  var sort = "sort_by=popularity.desc";
  var page = 1;
  
  var movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&language=en-US&" + sort + "&include_adult=false&include_video=true&with_people=" + nicolasCage;
  var cagedMovies = [];
  var last = 0;
  var genre = [{
          "id": 28,
          "name": "Action"
          },
          {
            "id": 12,
            "name": "Adventure"
          },
          {
            "id": 16,
            "name": "Animation"
          },
          {
            "id": 35,
            "name": "Comedy"
          },
          {
            "id": 80,
            "name": "Crime"
          },
          {
            "id": 99,
            "name": "Documentary"
          },
          {
            "id": 18,
            "name": "Drama"
          },
          {
            "id": 10751,
            "name": "Family"
          },
          {
            "id": 14,
            "name": "Fantasy"
          },
          {
            "id": 36,
            "name": "History"
          },
          {
            "id": 27,
            "name": "Horror"
          },
          {
            "id": 10402,
            "name": "Music"
          },
          {
            "id": 9648,
            "name": "Mystery"
          },
          {
            "id": 10749,
            "name": "Romance"
          },
          {
            "id": 878,
            "name": "Science Fiction"
          },
          {
            "id": 10770,
            "name": "TV Movie"
          },
          {
            "id": 53,
            "name": "Thriller"
          },
          {
            "id": 10752,
            "name": "War"
          },
          {
            "id": 37,
            "name": "Western"
      }];

console.log(movieUrl);
// Use Get function to find the src url
  // Multiple for loops. For loop for each page using a for loop to iterate the pages.
  // One call needed outside the main one to get the number of pages.

  // Helper Function to match Genre Id with Genre Name.
  function getGenreById(id) {
    return genre.filter(
      function(genre){return genre.id == id;}
    );
  }
  // Constructor function
  function createMovieObject(row, genre_array){


     
     var movieObject = {
        // id
        r_id: row["id"],
        //Movie Title
        title: row["title"],
        // Genres
        genre: genre_array,
        overview: row["overview"],
        // Poster path is connected to the site itself.
        image: row["poster_path"],
        // Votes can be sorted.
        votes: row["vote_average"],
        // Can be sorted by Release Date too.
        release: row["release_date"],
     };

   return movieObject;
}   


  


  pageLoop(movieUrl);
  //Initiate loop for pages

  function pageLoop(apiresponse){
      var cagedMovies = [];
      $("#result-table").html("");
      return $.get(apiresponse, function(pageresponse) {
          for(var h = 1; h <= pageresponse['total_pages']; h++){
              console.log(h);
              console.log(apiresponse);
              getMovies(apiresponse ,h);
          }
      }); 
  }
// Find the movies in each page and make them into movie objects and push them in the Movie Object Array.
function getMovies(sourceurl, page) {
    var p = page;
    console.log(sourceurl + "&page=" + page);
    var movieUrl = sourceurl + "&page=" + page;
    console.log(movieUrl);
    return $.get(movieUrl, function(response) {
      // How long should the array be?
      var results = response['total_results'];
      //For loop using the movies on each page.
      for (var m = 0; m < response.results.length; m++){
        //Create a Genre array for each movie.
        var genre_array = [];
        //Set Genre response to a variable
        var genre_response = response['results'][m]['genre_ids'];
          for (var i = 0; i < genre_response.length; i++) {
            // Find the Genre by Genre ID
            var genre_obj = getGenreById(genre_response[i]);
            if (genre_obj == null) {
              genre_obj = "";
            } else {
              genre_array.push(genre_obj[0].name);
            }
          };
        // function - makeObject
        var movieObject = createMovieObject(response['results'][m], genre_array);
          cagedMovies.push(movieObject);
        };
        //In order to pass the array to another function when it is filled I used an if statement
        // if the length of the cagedMovies array is equal to the total_results in the API call.
        if (cagedMovies.length === results){
          console.log(cagedMovies.length);
          console.log(cagedMovies[91]);
          // Once the movie object array length matches the number of movies then use Handlebars to compile
          hbTemplate(cagedMovies);
        } else {
        console.log(cagedMovies.length);
      }
    }); 
};


// Once the 
function hbTemplate(objects){
  var resultTemplate = $('#result-template').html();
  var compileResults = Handlebars.compile(resultTemplate);
  var addResultObj = compileResults(objects);
  // Objects is an array of objects. I need for it to be compiled one at a time.
  console.log(objects);
  var hbTitleHtml = $('#result-table').append(addResultObj);
  console.log("Complete");
  };


// default picture is placecage


// Once I get it to load then work on grid wrap columns in row
// <!-- http://stackoverflow.com/questions/26831128/handlebars-js-and-bootstrap-grid-wrap-columns-in-row -->
//       <!-- https://funkjedi.com/technology/412-every-nth-item-in-handlebars/ -->


  // Initiate functions with pageLoop()
  $.when(pageLoop()).done(function(){
    console.log(cagedMovies);
    console.log(cagedMovies.length);
  });

  $("#search-button").click(function(event){
      // event.preventDefault();
      console.log("Button was clicked");
      // Get Value
      event.preventDefault();
      // Set filter and titles to lowercase so it can have case insensitivity.
      var filter = $("#search-input").val().toLowerCase();
      console.log(filter);
      // Caged Movies still are an array.
      console.log(cagedMovies);
      // Set Radio Buttons to variables
      var titleRadio = $("#titleSearch").prop("checked");
      
      var genreRadio = $("#genreSearch").prop("checked");
      var descRadio = $("#descSearch").prop("checked");
      console.log(titleRadio === true);
      if(filter !== ""){
        // Grep to filter cagedMovies to only show the matching titles
        
        // This is so any part of the title can return True.
          var filteredMovies = jQuery.grep(cagedMovies, function(e) {
            // For loop for arrays?
              
              // If Title is selected...
              if(titleRadio === true){
              // This is so any part of the title can return True.
              // Seperate Title to an Array of Strings.
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
                // If Genre is selected
              } else if (genreRadio === true)  {
                // Set Genre to a variable
                var genre = e.genre;
                // For loop the array of genres in each movie to see if a genre matches.
                for (k = 0; k < genre.length; k++) {
                    if(genre[k].toLowerCase() == filter){
                      // If a genre matches then return true.
                      return true;
                    } else {
                      console.log("nope");
                    }
                }

              } else if (descRadio === true) {
                var desc = e.overview.toLowerCase().split(" ");
                for (l = 0; l < desc.length; l++){

                    if(desc[l].indexOf(filter) == 0){
                      return true;
                      
                    } else {
                      // Else nothing happens
                      console.log("nope");
                    }

                }
              }

              else {
                alert("ERROR");
              }
              // } else if (genreRadio === true){
              //   console.log("SUCCESS");
              // }
              
          });


        // Empty the result table
        $( "#result-table").empty();
        console.log(filteredMovies);
        // So we can template the new results
        hbTemplate(filteredMovies);
        
        
      } else {
        alert("INVALID INPUT");
      }
      // } else if (genre === true) {
      //   // If Description is checked then the Movies are filtered by Description.
      //   console.log("Genre");
      //   var filteredMovies = jQuery.grep(cagedMovies, function(e) {
      //     return e.overview.toLowerCase().indexOf(filter) == 0;
      //   });
      //   $( "#result-table").empty();
      //     console.log(filteredMovies);
      //     hbTemplate(filteredMovies);
      //     console.log("Overview");
      //     event.preventDefault();
      //     event.preventDefault();
      //   } else {
      //   alert("Input Invalid!");
      //   event.preventDefault();
      // }
  });


      // What now?
      // How do I filter the cagedMovie array and reload it into the page?
      // Filter the Array of Objects. Then redraw everything on the screen.
      // clean Div.
      // Activate Templating.





});







//Step Two: Handlebars Compile each piece of data into four movie divs.
// Make them responsive with Bootstrap.
// Apply Angular to make the Front End Pop.

//Step Three:
// Develop a modal for each div with more information when clicked on about the movie.

//Step Four:
// Build a search function that limits the movies based on genre, title,
// and description text.

//Step Five

//Step Five (Optional):
// Build Database for Log In and Sign In

// Step Six (Optional):

// Build Rating System that Users can log in and rate movies based on Cheese,
// Hamminess, Over the Top, and Overall Rating.

// Step Seven (Optional):
// Improve Search Engine to search by rating