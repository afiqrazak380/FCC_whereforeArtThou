
/*
Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name 
and value pairs (second argument).
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the 
returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", 
last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array 
(the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  
  const sourceKey = Object.keys(source);

  return collection.filter(obj => sourceKey.every(key => obj[key] === source[key]))

}

console.log(whatIsInAName([
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }], 
  { last: "Capulet" }))

  
// We can find wich key ('first' or 'last') in the object contains the value of "Capulet" 
// by looping through the property of the object and check each one:

function wichKey(collection, value){

  for (let i = 0; i < collection.length; i++){ // Loop through the array

    const currentObj = collection[i];
  
    for( const key in currentObj){ // Loop through the property of the current object 

      if(currentObj[key] === value){
      
      console.log(`Value ${value} is found in ${key}`)
      }
    }
  }
}

wichKey(
  [
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }
  ], "Mercutio")


  /* ========Foot Notes====================

  1) Curley Bracket vs Square Bracket
      In JavaScript, curly brackets `{}` are used to define objects, and square brackets `[]` are used to define arrays.
  
  2) Dot and Bracket Notation
    In JavaScript, you access object properties using dot notation (object.propertyName) or bracket notation (object['propertyName']).
    In this case, i[0] gives you the first object in the array, and then .last accesses the "last" property of that object,
    which contains the value "Montague."

  3) Some basic concepts:

  a. **Object.keys()**:
   Imagine you have a box of different fruits like apples, bananas, and oranges, and you want to know the names of all the fruits in your box. You can use `Object.keys()` like this:

   ```javascript
   const fruits = {
     apple: 3,
     banana: 5,
     orange: 2
   };

   const fruitNames = Object.keys(fruits);
   console.log(fruitNames);
   ```

   The `Object.keys(fruits)` will give you an array with the names of the fruits: `['apple', 'banana', 'orange']`.

  b. **Array.prototype.filter()**:
   Imagine you have a bag of candies, and you only want the candies that are red. You can use `Array.prototype.filter()` like this:

   ```javascript
   const candies = ['red', 'green', 'blue', 'red', 'yellow'];

   const redCandies = candies.filter(candy => candy === 'red');
   console.log(redCandies);
   ```

   The `candies.filter(...)` part will give you an array with only the red candies: `['red', 'red']`.

  c. **Object.hasOwnProperty()**:
   Imagine you have a book with many pages, and you want to check if a specific page number exists in the book. 
   You can use `Object.hasOwnProperty()` like this:

   ```javascript
   const book = {
     page1: 'Introduction',
     page2: 'Chapter 1',
     page3: 'Chapter 2'
   };

   const pageNumber = 'page2';

   if (book.hasOwnProperty(pageNumber)) {
     console.log(`The book has ${pageNumber}: ${book[pageNumber]}`);
   } else {
     console.log(`Sorry, the book doesn't have ${pageNumber}`);
   }
   ```

   It will tell you whether the page exists in the book or not.

  d. **every()**:
   Imagine you have a row of colorful balls, and you want to make sure they are all red. 
   You can use the `every()` function like this:

   ```javascript
   const balls = ['red', 'red', 'red', 'red', 'red'];

   const allRed = balls.every(ball => ball === 'red');
   console.log(allRed);
   ```

   It will check if every ball in the row is red and give you `true` because they are all red. 
   If even one ball were a different color, it would give you `false`.

  These examples show how each of these concepts can be used in everyday situations to do different tasks with
  objects, arrays, or collections of data.
  */