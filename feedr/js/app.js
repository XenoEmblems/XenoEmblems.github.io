/*
  Please add all Javascript code to this file.
*/

$(document).ready(function() {
	var mashableJSON = "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json";
	var storyObjList = [];
	var mashableObject = [];
	mashable(mashableJSON);

	//Constructor Function
	function createMashableObject(row){
		var mashableObject = {
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

	//Iterate JSON
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
console.log(storyObjList);


      


});


