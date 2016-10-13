// FIZZBUZZ
// Using loops, boolean logic, and if/else statements, incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.
//
// EX:
// 1
// 2
// 'fizz'
// 4
// 'buzz'
// 'fizz'
// 7
// 8
// 'fizz'
// 'buzz'

function FizzBuzz(num){
	for (x = 1; x < num; x++){
		if (x % 3 == 0) && (x % 5 == 0) {
			return "FizzBuzz"
		} else if ( x % 3 == 0){
			return "Fizz"
		} else if ( x % 5 == 0){
			return "Buzz"
		} else {
			return x
		}
	}
}
FizzBuzz(100);
// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.



// ##### Step 2:
// Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.



// ##### Step 3:
// Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`.



// ##### Step 4:
// Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`.