// Concatination and Interpolation
var price=50 //80
var itemName="Cup" // Table
var message1= "The price for your Cup is 50 dollars"
var message2 = "The price for your " + itemName + " is 50 dollars"
var message3 = "The price for your " + itemName + " is " + price + " dollars" // Concatination
console.log(message1)
console.log(message2)
console.log(message3)


var message4= `The price for your ${itemName} is ${price} dollars` // Interpolation is the same as above but it has a different formatting(syntax)
console.log(message4)