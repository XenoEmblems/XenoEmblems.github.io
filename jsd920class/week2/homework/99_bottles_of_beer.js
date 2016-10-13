// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0

function ninteynineBottles(){
	var beer = 99
	for (beer = 99; beer > 0;) {
		if(beer === 1){
		console.log(beer + " bottle of beer on the wall!");
		console.log(beer + " bottle of beer!");
		console.log("You take one down and pass it around!");

		console.log("No bottles of beer on the wall!");
		beer--;
		} else {
		console.log(beer + " bottles of beer on the wall!");
		console.log(beer + " bottles of beer!");
		console.log("You take one down and pass it around!");
		
		console.log((beer - 1) + " bottles of beer on the wall!");
		beer--;
		}
	}
}