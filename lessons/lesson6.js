// Conditional Statement (Conditional Flow)

//if(condition){
    // execute some code here
//}else{
    // execute some code here  
//}

// If hour between 6 and 12 we want to print "Good Morning"
// If hour between 12 and 18 we want to print "Good Afternoon"
// Otherwise we want to print "Good Evening"

var hour = 9
if(hour >= 6 && hour < 12){
    console.log("Good Morning")
}else if(hour >= 12 && hour < 18){
    console.log("Good Afternoon")
}else{ 
    console.log("Good Evening")
}

console.log("---------------------------------")

var ageIsMoreThanEighteen = true 
var isUSCitizen = false

if (ageIsMoreThanEighteen && isUSCitizen){
    console.log("The customer is eligible for DL")
}else{
    console.log("The customer is not eligible for DL")
}