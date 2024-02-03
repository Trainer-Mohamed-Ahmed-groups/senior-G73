/*
// Create a loop that display the names of people and order 

// Example : ["Mohamed","Ali","Khaled"]
// Solution :
// 1- Mohamed
// 2- Ali
// 3- Khaled

var persons = ["Mohamed", "Ali", "Khaled"]

for (let index = 0; index < persons.length; index++) {
    const element = persons[index];
    console.log(index + 1 + " - " + element)
}



// Create a loop that display the names of people that starts with m 
// Example : ["Mohamed", "Ali", "Khaled" , "Mariem"]
// Solution: Mohamed



var persons2 = ["Mohamed", "Ali", "Khaled", "mariem"]

for (let index = 0; index < persons2.length; index++) {
    const element = persons2[index];
    if (element[0] === 'M' || element[0] === 'm') {
        console.log(element);
    }
}
// NOTE : that will be easier with string methods in th future




// Create a loop that give you the even numbers from 1 to 50

for (let counter = 0; counter <= 50; counter += 2) {
    if (counter != 0) console.log(counter)
}
console.log("------------------")

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0 &&  i !== 0) {
        console.log(i)
    }
}

*/

// Create an array with numbers and function sum even numbers only

var myNumbers = [1, 2, 3, 5, 4, 6, 8, 7, 9, 23, 4, 5, 6, 56, 45, 43, 342, 43],
    sum = 0

function evenFinder(num) {
    if (num % 2 === 0 && num !== 0) return true
}

function setSum(num) { sum += num }

for (let x = 0; x < myNumbers.length; x++) {
    const element = myNumbers[x];
    if (evenFinder(element)) { setSum(element) }
}


console.log(sum)