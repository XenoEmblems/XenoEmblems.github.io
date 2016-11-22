$("#jumble").click(function(){
	console.log("Clicked");
	$("#Name").text('');
	var l = ["L", "R"];
	var u = ["a", "e", "i", "o", "u"];
	var f = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "w", "x", "v", "z"];
	var y = ["y", "ie", "i",];
	var letter = "";
	function randomLetter(array) {
		
		console.log(array[Math.floor(Math.random() * array.length)]);

		$("#Name").append(array[Math.floor(Math.random() * array.length)]);

	}

	function twoRandomLetters(array) {
		
		var letter = array[Math.floor(Math.random() * array.length)];
		console.log(letter);
		console.log(letter);
		$("#Name").append(letter);
		$("#Name").append(letter);

	}

	randomLetter(l);
	randomLetter(u);
	twoRandomLetters(f);
	randomLetter(y);
});