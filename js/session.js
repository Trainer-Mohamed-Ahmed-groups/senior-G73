// JSON




console.log("****************** JSON ********************");

// var person = "{'name': 'Mohamed','title': 'Frontend','id': 1}"

var person_json = `{
    "name": "Mohamed",
    "title": "Frontend",
    "id": 1
}`
console.log(person_json)
console.log(typeof person_json)
console.log(JSON.parse(person_json))


console.log("****************** JS ********************");

var person_js = {
    name: "Mohamed",
    title: "Frontend",
    id: 1
}

console.log(person_js)
console.log(typeof person_js)
console.log(JSON.stringify(person_js))


/***************************************************************/

// XMLHttpRequest

// XML 
// HTTP


var session_list = document.getElementById("sessionList")

console.log(session_list)

function getPosts() {
    const postsRequest = new XMLHttpRequest();

    postsRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.response)

            for (let index = 0; index < response.length; index++) {
                const post = response[index];
                session_list.innerHTML += `<li>${post.title}</li>`
            }
        }
    }

    postsRequest.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts"
    )

    postsRequest.send()
}

// getPosts()

var products_container = document.getElementById("productsContainer")

console.log(products_container)



function getProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(res => {
            for (let index = 0; index < res.length; index++) {
                const product = res[index];
                products_container.innerHTML += `
                                        <div class="card">
                                            <img src=${product.image} alt="image">
                                            <div>${product.title}</div>
                                            <div>${product.price}</div>
                                        </div>`
            }
        }
        )
}

getProducts()

var test2 = function (txt) {
    return ("Hello from test 2 " + txt)
}

console.log(test2(" This is text "))


var test = () => "Hello from test" + txt


console.log(test(" This is text "))