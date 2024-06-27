// Object 

var customer = {
    firstName: 'Cosette',
    lastName: 'Tholomyes',
    cars: ["Volvo", "Toyota", "Tesla", "Honda"]
}
console.log(customer)              // prints the all information about the customer 
console.log(customer.firstName)    // prints just the first name 
console.log(customer.lastName)     // prints just the last name
console.log(customer['firstName']) // also prints the first name but with the square brackets notation (provides the value as a String)
console.log(customer['lastName'])  // also prints the last name but with the square brackets notation

// Dot notation
customer.firstName = "Ursula"      // Assigns a new value to the firstName property (replaces "Cosette" with "Ursula")
                                   // Both single and double quotes can be used 

console.log(customer.firstName)    // prints the new value 

// Bracket notation
customer['lastName'] = "Silver"    // a new value can also be assigned to the property using the square brackets notation 
console.log(customer['lastName'])  // prints the new value 


console.log(`${customer.firstName} ${customer.lastName}`) // prints the all values 

//arrays 

var car =["Volvo", "Toyota", "Tesla", "Honda"]
console.log(car[0])

car [1]="BMW" //  new value assigned to the index 1
console.log(car[1]) // and printed 

console.log(customer.cars[0]) // if our object already has a list of cars(array), then it can be printed(accessed) in this way