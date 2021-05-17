// Add your code here
/* let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
}; */


/* let configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
}; */

/* fetch("http://localhost:3000/dogs", configurationObject)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        console.log(object);
    });
 */

/* let userData = {
    userName: "Bob",
    userEmail: "bob@gmail.com"
} */
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name, 
            email
        })
    })
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })

}

// declared function submitData, takes 2 arguments: name & email
// use fetch on desired URL path, call return on it so it will be visible on the page
// within the fetch block, I set the method to be POST because I am sending data, not retrieving data (retrieving = GET)
// also within the block, I set the headers (also makes data visible)
// also within the block, I set the content of the response body to be parsed and stringified (specifically, the name & email, which I passed thru the function)
// I use .then to retrieve the response and return it JSON parsed
// since I used .then() and .then() returns a Promise Object, I call on .then() again
// the second .then() sets the object's inner HTML equal to object["id"]
// I use .catch to raise errors and set the innerHTML equal to the error message if an error occurs



