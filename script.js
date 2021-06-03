// pseudo code
// 1. when a user inputs a number into the computer...
// 2. loop from 1 to the number the user inputed.
// 3. if that number is divisible by 4 without any remainders, then have the computer print out "Fizz."
// 4. if that number is divisible by 6 without any remainders, then have the computer print out "Buzz."
// 5. if that number is divisible by 4 AND 6 without any remainders, then have the computer print out "FizzBuzz."
// 6. if none of the above applies to the number the user inputted, then print the current number.
// 7. the program will stop after the number is not divisible by any of the following conditions up to the number the user inputed.

let answer = parseInt(prompt("Please enter a number to FizzBuzz up to!"));

for (let i = 0; i <= answer; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
        console.log("FizzBuzz");
    } else if (i % 4 === 0) {
        console.log("Fizz");
    } else if (i % 6 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

