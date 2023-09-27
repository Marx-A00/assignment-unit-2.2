// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE

// We create a variable and name it 'Dane'
// Then, we check if name is strictly equal to 'Mary'
// if name is strictly equal to 'Mary', then we would expect 'Hi, Mary!' as a result in the console.
// if the variable name is set to anything else, we would expect ''How do you do?' as a result in the console.
// for this code block, we would expect 'How do you do?' in the console, since name is set to 'Dane'.


//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE

// First, we define a variable named 'secret'
// then, we define another variable 'code', and set it equal to the integer 123.
// we then set a series of 'if' statements, of which both 'if' statements will be checked each time the code is run. 
//First, we check if our code variable (123) is strictly equal to the integer 123.
// if true (it is true), our 'secret' variable is set to 'super' AND our 'code' variable is set to: code * 2 which is now equal to (246).
// Next, for our second 'if' statement, we check if code is greater than 250. Since we know code is now set to 246, it does not satisfy
// this conditional statement. 
// Therefore, we can expect our console.log(secret) to yield the result : 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We define a variable 'isStudent' and set it to true.
// We define a variable 'age' and set it to 34.
// we define a variable 'zip' and set it equal to 55407.
// We then define a series of conditionals, which unlike our previous question, will be checked in a sequence, and then exit once one of our 
// conditions is satisfied. 
// Firstly, we check if 'isStudent' is strictly equal to true, AND zip is less than 80000. if our condition is met, we console.log : "you're a student on the West Coast!" and then exit.
// next, we check if 'isStudent is set to false OR age is less than 30. if our condition is met, we console.log : "What are your hobbies?" and then exit.
// next, we check if 'isStudent' is equal to true. if our condition is met, we console.log : "Welcome to Prime!" and then exit.
// and finally, if none of our conditions have been satisfied up to this point, we console.log : 'How about the weather?' and then exit.
//
// Since zip < 80000, and 'isStudent' is set to true, our first two conditions are skipped.
// Therefore, we can expect our console.log to display: 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should be set to 'blue' and colorTwo should be set to 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX - colorTwo should be set to 'purple' as well.
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - should be if(temp > 39 && time >=4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  // FIX - Should yield 'enter'
  console.log('no entry');
} else {
  // FIX - should yield 'no entry'
  console.log('enter');
}
*/

