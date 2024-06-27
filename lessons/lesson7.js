// Loops (needed when you need to repeat a certain operation multiple times)

// print the "hello world!" 5 times
console.log("hello world!")
console.log("hello world!")
console.log("hello world!")
console.log("hello world!")
console.log("hello world!")

console.log("------------------------------")


// for loop (for i loop)
for (let i=0; i<5; i++){
    console.log("hello world! " + i)
}

console.log("------------------------------")

// for of loop (considered es5 syntax) (for arrays the best ways to use "for of loop. It iterates through the list of the array)
var cars =["Volvo", "Toyota", "Tesla", "Honda"]
for (let car of cars){
   console.log(car)
  if(car=="Toyota"){
    break // the rest of the cars won't be printed cause we broke the loop
 }
}


console.log("------------------------------")

// ES6 Syntax for each loop (it works exactly the same as in the loop above)
cars.forEach(car=>{
    console.log(car)
})


