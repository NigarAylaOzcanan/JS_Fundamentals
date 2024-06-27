
export function printAge(age){
    console.log(age)
}

 class CustomerDetails{ // export class CustomerDetails{} export can be removed
    printFirstName(firstName){
        console.log(firstName)
    }
    /**
     * this method will print the last name
     * @param {String} lastName 
     */ 
     // your can provide a certain description to the method in this section and can write what data type we expect
    printLastName(lastName){
        console.log(lastName)
    }
}
export const customerDetails = new CustomerDetails()
