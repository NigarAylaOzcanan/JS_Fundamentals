// Logical "AND" (double ampersand)
console.log(true && true)   // all values have to be TRUE for expression to be TRUE 
console.log(true && false)  // false 


// Logical "OR" (double pipe)
console.log(true || false)  // any value should be TRUE for the expression to be TRUE
console.log(false || false) // false


var ageIsMoreThanEighteen = true 
var isUSCitizen = true      // (with "AND" operatior the entire expression will be evaluated into a FALSE
                            //  if any of the values inside the expression is FALSE)

var eligibilityForTheDriverLicense = ageIsMoreThanEighteen && isUSCitizen 
console.log('The customer is eligible for DL : ' + eligibilityForTheDriverLicense)


var ageIsMoreThanEighteenn = false 
var isUSCitizenn = true     // (with "OR" operatior the entire expression will be evaluated into a TRUE
                            //  if any of the values inside the expression is TRUE)
var eligibilityForTheDriverLicense2 = ageIsMoreThanEighteenn || isUSCitizenn 
console.log('The customer is eligible for DL : ' + eligibilityForTheDriverLicense2)


// Logical "NOT" Operator
console.log(!true)  // false
console.log(6==10)  // false
console.log(!6==10) // true 





