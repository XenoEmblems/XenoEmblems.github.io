/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

// Your code here
 var q1 = ["image1.png", "image2.png", "image3.png"];
 console.log("Question 1: " + q1);


/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

 

// Your code here
var q2 = q1[0];
console.log("Question 2: " + q2);


/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

 


// Your code here
var q3 = q1.length;
console.log("Question 3: " + q3);


/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */

// Your code here

var q4 = q1[1 + q1.length()];
console.log("Question 4: " + q4);

// Bonus 1
// Using the array from Question 1, capitalize the first letter of each 
// element in the array and store the elments in a new variable bonus1.
// The a final array should look like:  ["Image1.png", "Image2.png", and "Image3.png]
// HINTS:
// -using the .split("") method will covert a string of text into an array
// -using the .join("") method wil join the elements back into a string
// -using .toUpperCase() will covert a letter from lower to upper case

// Your code here
//Perform the same action for each item in the array


function bonus1(array){
	for (var x = 0; x < array.length; x++){
		// Use a for loop to iterate each index of the array
		var word = array[x].split("");
		// split this index string into an array
		word[0] = word[0].toUpperCase();
		// reassign the first letter of the array into a capital letter
		array[x] = word.join("");
		// join the array into a string with it now capitalized
		
	}
	return array;
	//return the array.
}
console.log("Question 4: " + bonus1(q1));

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, .forEach() or .map() method to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */
numbers = [1,2,3,4];

var q5 = numbers.map(function(number){
		return number + 1
	});
var q5 = numbersBumpedUp;
console.log("Question 5: " + q5)
console.log("")
// Your code here


/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

// Your code here



/** 
 * Question 7
 * Loop through the array of ["green","blue","yellow"], and return only the 
 * color "blue". Store the new array in q8.
 */

 // Your code here


 /** - BONUS 2
  * Using the array of ["a","b","c","a","b"], create a new array which contains 
 * only unique values from the array provided. Store the new array in bonus2.
 * HINTS: 
 * - the .filter() method can be used to return comparisons that evaluate to true
 * - the .reduce() method can also be used to return true evaluations and also create a new array
 * - the .indexOf() method can be used to find the first matching value of an element in an array
 */

 // Your code here


 /** - BONUS 3
  * Using the array of [1,2,3,1,2], determine if any one value is the sum of the values
  * before and after it's index position. Store the index & index value in bonus3.   
  * HINTS: 
  * - a for() loop can be used to iterate through each element in array
  * - the .slice() method can be used to disect an array
  * - the .reduce() method can be used to sum all the values in an array
 */


