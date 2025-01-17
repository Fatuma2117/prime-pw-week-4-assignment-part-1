console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  name = 'Fatuma'
  return name;
}
console.log('Hello', helloName());
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber
  return answer;
  // return firstNumber + secondNumber;
}
console.log('Adding two numbers',addNumbers( 4,6));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num0,num1,num2){
  let result = num0 * num1 * num2;
  return result;
}
console.log('Multiplying three numbers',multiplyThree(5,2,3))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
console.log('Expect true:', isPositive(2));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array
function getLast(array) {
  if (array.length > 0){
  return array[array.length-1];
  } else {
    return undefined;
  }
}
console.log('Expect undefined:',array)

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let array2 = [ 45,8,58, 11, -99] 

function find(value,array) {
  for (let answer of array) {
    if (answer === value) {
      return true;
    }
  }
  return false
}

console.log('Expect true:', find(45,array2));
console.log('Expect false:',find(56,array2));
console.log('Expect false:',find(55,array2));
console.log('Expect false:',find(100,array2));
console.log('Expect true:',find(11, array2));






// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  } else {
    return false
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
 
let array1 = [1,2,5,10,20,30,40,50];
function sumAll(array){
  // TODO: loop to add items
  let sum = 0;
   for (i=0; i<array.length; i++) {
     sum+=array1[i];
   }
   console.log(sum);
  }
sumAll(array1);
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let array3 = [7,-8,90,-63,-4]
let newNumbers= [];

function newArray(array){
  for (let i = 0;i < array3.length;i++){
    if (array3[i] >= 0) {
      newNumbers.push(array3[i]);
    } 
   }  
  } 
  newArray();
console.log(newNumbers);



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// The question was to solve for the number of days alive given your age.
// created a variable age outside the function and set it equal to 26
// within the function made a variable days will equal age multiplied by 365
//  returned days and consoled age. 


let age = [26]

function calcAge(age) {
	let days = age * 365
	return days
}
console.log(calcAge(age))
// calcAge(26)