// for (let i = 65; i <= 90; i++) {
//     console.log(String.fromCharCode(i))
// }

// for (let i = 97; i <= 122; i++) {
//     console.log(String.fromCharCode(i))
// }

// for (let i = 65; i <= 122; i++) {
//     if(i> 90 && i < 97) continue
//     console.log(String.fromCharCode(i))
// }


var persons = ["Ali", "Sayed", "Khaled", "Sief"];

console.log(Array.from(persons, person => person.toUpperCase()));
