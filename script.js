// Get elements
let firstInput = document.getElementById("first");
let lastInput = document.getElementById("last");
let button = document.getElementById("button");
let outputDiv = document.getElementById("output");

// Array of people
let people = [];

// When the button is clicked, add the person
button.addEventListener("click", addPerson);

function addPerson() {

    // Create a new person object
    let person = {
        first: firstInput.value,
        last: lastInput.value
    };

    // Add the person into the array
    people.push(person);

    // Sort array by last name
    people.sort((a, b) => {
        if (a.last > b.last) return 1;
        if (a.last < b.last) return -1;
        return 0;
    });

    // Build the output HTML
    let output = "";

    for (let i = 0; i < people.length; i++) {
        output += "FIRST: " + people[i].first + "<br>";
        output += "LAST: " + people[i].last + "<br>";
        output += "<hr>";
    }

    // Update the page
    outputDiv.innerHTML = output;

    // Clear inputs
    firstInput.value = "";
    lastInput.value = "";
}
