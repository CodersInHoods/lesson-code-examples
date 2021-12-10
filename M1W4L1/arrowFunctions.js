// function sum(num1, num2) {
//   return num1 + num2;
// }
const users = ["Alex", "Vasile", "Sam", "Tom"];

const user = {
  name: "Alex",
  age: 25,
  city: "London",
};

// console.log(user);

let count = 10; // DO NOT TOUCH THIS LINE :)

/**
 * Exercise 1
 * create a function {countdown}
 * This function should have while loop which will
 * decrease {count} and log every step with message
 * "Remaining: X" where X is a number. When {count} will
 * be equal to 0 log message "Go!"
 */

const countdown = () => {
  while(count > 0) {
    console.log(`Remaining: ${count}`)
    count--;
  }
  console.log('Go!')
}
countdown()
