
var customerFisrtName: string = "John" // TypeScript prevents us to assign the value of
                                       // the different type to the variable which is declared as a string.
                                       // but you can do that in JS easily
var customerLastName: string = "Smith"
var customerAge: number =25


type Customer= {firstName: string, lastName: string, active: boolean} // you can also create your own custom type

var firstCustomer: Customer = {
    firstName: "Mary",
    lastName:"Jane",
    active: true,

}

/* NOTE: TypeScript helps to control the data integrity to make sure you won't assign a wrong values to the variables
         so your code will be better protected from craching during the execution. 
         while in JavaScript(JS) ypu can not do that. In JS you can find out that you made a mistake
         with the typing or assigning the wrong value anly during the runtime when your code basically crash. */
