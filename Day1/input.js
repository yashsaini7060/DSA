/**
 * 1 -> import readline library
 * 2 -> create interface
 * 3 -> ask question
 * 4 -> run the program
 */

/**
 * User input and output ex.
 */
import readline from "readline";

// create the interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// First question
rl.question("Enter the first number: ", (value1) => {
  console.log(`You entered: ${value1}`);

  // Second question nested inside the first question's callback
  rl.question("Enter the second number: ", (value2) => {
    console.log(`You entered: ${value2}`);

    console.log(`The sum of the two value is ${value1 - value2}`);
    // Close the readline interface after the last question
    rl.close();
  });
});
