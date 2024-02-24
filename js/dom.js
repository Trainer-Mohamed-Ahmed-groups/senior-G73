var test_id = document.getElementById("testId"),
    test_class = document.getElementsByClassName("testClass"),
    test_tags = document.getElementsByTagName("div"),
    test_name = document.getElementsByName("education")

console.log(test_id)
console.log(test_class)
console.log(test_tags)
console.log(test_tags[0])
console.log(test_name)
console.log(test_name[0])
console.log(test_name[0])


console.log(document.body)
/****************************************************/

var test_id2 = document.querySelector("#testId"),
    test_tags2 = document.querySelectorAll('div'),
    test_class2 = document.querySelector('.testClass .client')



console.log(test_id2)
console.log(test_tags2)
console.log(test_class2)
console.log(test_class2.outerHTML)
console.log(test_class2.innerHTML)
console.log(test_class2.textContent)
// test_class2.innerHTML = "<b>From JS</b>"
// test_class2.textContent = "<b>From JS</b>"
/*************************************** */
var parent = document.getElementById("parent")
console.log(parent)
console.log(parent.children)
console.log(parent.childNodes)