 // Relational or Comperison Operators

 // > - more than
 // < - less than
 // >= - more than or equal to
 // <= - less than or equal to
 // == - equal to
 // != - not equal to
 // === - equal value and equal data type
 // !== - not equal value and not equal type

 var age = 20
 var ageOfBorther = 25
 var isHeMarried = false

 console.log(age > ageOfBorther)
 console.log(age < ageOfBorther)
 console.log(age >= ageOfBorther)
 console.log(age <= ageOfBorther)
 console.log(age == ageOfBorther)
 console.log(age != ageOfBorther)
 console.log(age === ageOfBorther)
 console.log(age !== ageOfBorther)
 console.log(age == isHeMarried)



// example 2 

var result= 10 > 5  // true  
console.log(result)

var result2= 5 >= 5 // true
console.log(result2)


// equality operators

var x=1
console.log(x=='1') // true       -----> called lose comparison (just compares the values)
console.log(x==='1') // false     -----> called strict comparison (compares the values and the data types)
console.log(x===1) // true 
