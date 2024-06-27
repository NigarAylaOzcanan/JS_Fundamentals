// Declarative function
helloOne() // Declarative function can be invoked (called) at any moment in time)
function helloOne(){
    console.log("Hello One!")
}
// helloOne()

// Anonymous function 
var helloTwo = function(){
    console.log("Hello Two!")
}
helloTwo()

//* NOTE: The difference between the two functions is that: the declarative function can be called in he 
// beginning of the file, even if the function declared in the file a little bit later on.
// But it will not work with the anonymous function


// ES6 function syntax or arrow function (the body of the function will be built through the arrow. We don't need to type the function keyword in this syntax)
var helloThree = () =>{
console.log("Hello Three!")
}
helloThree()

console.log("--------------------")

// Function with arguments (parameters)
function printName(name){
    console.log(name)
}
printName('John')


function printFullName(name, lastName){
    console.log(name + ' '+ lastName )
}
printFullName('John', 'Smith')

console.log("--------------------")

// Function with return 
function multiplyByTwo(number){
  var result = number * 2
  return result
}
var myResult = multiplyByTwo(20)
console.log(myResult)

console.log("--------------------")

// Import function 
import {printAge} from '../Helpers/printHelper.js'
printAge(49)

// Import everything
import * as helper from '../Helpers/printHelper.js'
helper.printAge(10)