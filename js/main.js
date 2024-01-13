console.log("Hello Javascript")

var username = "Mohamed";

console.log(username)
console.log("Hello : " + username)

// This on line comment

/* This 
is 
multi 
lines 
comment
*/

/*? Allowed
_ A-Z a-z 1-9
- $
*/


/*Not allowed
- Start with number 
- Spaces 
- Kebab-case
- reserved word
- & * # @ % 
*/

/* Js is case senstive */

/******************** Primitive data types ***********************/

// String
var str = "This is string"
console.log(str)
console.log(typeof str)

console.log("*****************")
// Number
var num = 45;
console.log(num)
console.log(typeof num)
console.log("*****************")

// undefined
var undef;
console.log(undef);
console.log(typeof undef)
console.log("*****************")

// null
var nul = document.getElementById("test");
console.log(nul);
console.log(typeof nul)

console.log("*****************")
// Boolean 
var boolTrue = true;
console.log(boolTrue)
console.log(typeof boolTrue)
console.log("*****************")

/******************** Non primitive data types ***********************/

// array 
var students = ["Ali", "Mohamed", "Khaled", "Omar", 8];

console.log(students)
console.log(students.length)
console.log(students[2])
console.log(students[5])
console.log(typeof students)

console.log("*****************")

// Object

var bird = {
    name: "eagle",
    price: 50,
    numOfLegs: 2,
    children: ["test", 'test2']
}

// Property name (key) : value
console.log(bird)

// Bracket notation
console.log(bird["name"])

// Dot notation
console.log(bird.numOfLegs)

// Function

// => void function

function sayHello() {
    console.log("Hello")
}
var sayHello2 = function () {
    console.log("Hello 2")
}

sayHello()

sayHello2()


console.log("*****************")


// => Value returning function

function addNumbers(a, b) {
    return a + b
}

console.log(addNumbers(4, 5))
console.log(addNumbers(34, 50))