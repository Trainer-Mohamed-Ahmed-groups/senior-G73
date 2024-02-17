function myFn() {
    console.log("test")
}

// let firstInterval = setInterval(myFn, 500)


function stopMyInterval() {
    clearInterval(firstInterval)
}

/***********************************************************/

function myFn2() {
    console.log("test")
}

let firstTimeout = setTimeout(myFn2, 5000)

function stopMyTimeout() {
    clearTimeout(firstTimeout);
}

console.log("Hello")

/************************************** Built in objects ***************************************/

console.log(Math.max(45, 45, 48, 4, 51, 12))
console.log(Math.min(45, 45, 48, 4, 51, 12))

console.log(Math.round(3.3))
console.log(Math.ceil(3.1))
console.log(Math.floor(3.9))

console.log(Math.pow(5, 3))
console.log(Math.sqrt(25))
console.log(Math.PI)
console.log(Math.random() * 10); // returns a random number between 0 and 1 exclusive
console.log(Math.round(Math.random() * 10));

var employees = ["Ali", "Ibrahim", "Yasser", "Mohamed", "Omar"];

console.log(employees[Math.floor(Math.random() * employees.length)])