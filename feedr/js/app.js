/*
  Please add all Javascript code to this file.
*/

$(document).ready(function() {
	var mashableJSON = "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json";
	var redditJSON = "https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json";
	var diggJSON = "http://digg.com/api/news/popular.json";

	var storyObjList = [];
	var mashableObject = [];
	var redditObject = [];
	var diggObject = [];
	mashable(mashableJSON);
	reddit(redditJSON);

	//Constructor Functions
	function createMashableObject(row){
		var mashableObject = {
			source: "Mashable",
	        //Title of article
	        title: row["title"],
	        // Label
	        label: row["channel_label"],
	        // Poster path is connected to the site itself.
	        image: row["image"],
	        // Votes can be sorted.
	        shares: row["formatted_shares"],
	        // Can be sorted by Release Date too.
	        link: row["link"]
	     };
     return mashableObject;

	};

	function createRedditObject(row){
		var redditObject = {
			source: "Reddit",
			title: row["title"],
			label: row["link_flair_text"],
			image: row["thumbnail"],
			shares: row["score"],
			link: row["url"]
		};
		return redditObject;
	}

	// function create

	//Iterate Mashable
	function mashable(mashableHTML){
      return $.get(mashableHTML, function(pageresponse) {
      			console.log(pageresponse['new'].length);
		          for(var h = 0; h <= pageresponse['new'].length; h++){
		          	  
					  var mashableObj = createMashableObject(pageresponse['new'][h]);
					  storyObjList.push(mashableObj);
					  var finish = h + 1;
					  console.log(finish);
					  if (pageresponse['new'].length === (finish)){
					  	console.log(storyObjList);
					  	hbTemplate(storyObjList);
					  } else {
					  	console.log(mashableObj);
					  	console.log(h);
					  }
					};
				});
	  };

	  //Iterate Reddit
	  // function reddit(redditHTML){

   //    return $.get(redditHTML, function(pageresponse) {
   //    			console.log(pageresponse['data']['children'].length);
		 //          for(var i = 0; i <= pageresponse['data']['children'].length; i++){
		          	  
			// 		  var redditObj = createRedditObject(pageresponse['data']['children'][i]['data']);
			// 		  storyObjList.push(redditObj);
			// 		  console.log(redditObj);
			// 		  console.log(pageresponse['data']['children'][i]['data']["title"]);
			// 		}
			// 	hbTemplate(storyObjList);
			// 	});
	  // };

	   // http://digg.com/api/news/popular.json



	function hbTemplate(objects){
		  var mainTemplate = $('#main-template').html();
		  var compileResults = Handlebars.compile(mainTemplate);
		  var addMainObj = compileResults(objects);
		  // Objects is an array of objects. I need for it to be compiled one at a time.
		  console.log(objects);
		  var hbTitleHtml = $('#main').append(addMainObj);
		  console.log("Complete");
  	};



console.log("This is");



      


});


