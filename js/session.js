'use strict';
for (let i = 0; i < 10; i++) {
    console.log(i)
    if (i === 5) break;
}
console.log("*************************")

for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i)
}

console.log("*************************")

// Function scope 
function test() {
    var x = 6
}
// Error
// console.log(x)


//////// Block scope
{
    let y = 8
}
// Error
// console.log(y) 

console.log(z)

var z = 5

const e = 8;

console.log(e)
// e = 9
console.log(e)

sayHello()

function sayHello() {
    console.log("Hoisted")
}


// sayNo()

// console.log(sayNo)

var sayNo = function () {
    console.log("Not hoisted")
}






console.log(5 + 5)
console.log(5 + "5")


console.log(5 * 5)
console.log(5 * "5")

console.log(5 * "f5")
console.log(typeof (5 * "f5"))

console.log(true + true + false)

if (5 > 2) {
    // Code
}
console.log(+"44")
console.log(parseInt("55.22"))
console.log(parseFloat("55.22"))