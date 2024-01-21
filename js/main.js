"use strict"
// If condition

var myGrade = 50;

if (myGrade === 500) {
    console.log("OK")
    if (5 > 4) console.log("Thank you")
}
else if (myGrade > 0) console.log(" GT 0")
else {
    console.log("Not OK");
}



/* ? ************************************************** Operators *************************************/

/***********************! Arithmatic operators *****************/
/**** Unary operators ****/

var x = 5;

console.log(x)



console.log(++x)
console.log(x++)
console.log(x)
console.log(--x)
console.log(x--)

/**** Binary operators ****/
// + - * / 
// %

console.log(10 / 3)
console.log(12 % 3)
/***********************! Relational operators *****************/
// > >= < <= 
// == value
// === value & data type

console.log(5 == 5)
console.log(5 != 5)


console.log(5 === "5")
console.log(5 !== "5")


/***********************! Assignment operators *****************/
// =
// += -= *= /=
var y = 4;
console.log(y)
y += 5;
console.log(y)
/***********************! Logical operators *****************/
// && || !

if (5 > 4 && 10 > 9) console.log("OK")
else console.log("NO")


if (5 > 4 || 10 > 90) console.log("OK")
else console.log("NO")

if (!false) console.log("NOOOOOOOO")

/*********************************** Switch *********************************************/

var t = 1;

switch (t) {
    case 1:
        console.log("One")
        break;
    case 2:
    case 3:
        console.log("Two or Three")
        break;
    default:
        console.log("Not above")
        break;
}

/******************************************************* */

// b = 7;

// console.log(b)





/********************************************** Loops ***********************************************/

for (var i = 1; i <= 10; i++) {
    console.log(i)
}

for (var i = 10; i > 0; i--) {
    console.log(i)
}


var persons = ["Mohamed", "Mahmoud", "Omar", "Ahmed", "Ali"];

for (let index = 0; index < persons.length; index++) {
    const element = persons[index];
    console.log(element)
}

var o = 1
while (o <= 5) {
    console.log(o)
    o++
}

console.log("*****************")
var u = 1

do {
    console.log(u)
    u++
} while (u <= 5);


