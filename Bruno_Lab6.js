// Array to contain the users objects
var users = [];

// Get the input information
var inputFirst = document.getElementById("userFirst");
var inputLast = document.getElementById("userLast");
var inputAge = document.getElementById("userAge");
var inputPhone = document.getElementById("userPhone");
var inputEmail = document.getElementById("userEmail");

// Create the user object Contructor
function User(first, last, age, phone, email) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.phone = phone;
    this.email = email;
}

// Create some users objects and store them in the array - constructor calss
users.push(new User("Mathew", "Smith", 23, "555–123–4567", "msmith@example.com"));
users.push(new User("Lisa", "Ivory", 20, "555–234–5678", "livory@example.com"));
users.push(new User("Howard", "White", 31, "555–345–6789", "hwhite@example.com"));
users.push(new User("Karen", "Smith", 27, "555–456–7890", "ksmith@example.com"));

// call the function when loads after the users have been added to the array
usersOutput();

// Function that outputs the users in the array to the usersOutput area
function usersOutput() {
    // Get the area to output
    var outputArea = document.querySelector("#usersOutput");
    outputArea.innerHTML = ""; // Clear

    // Loop through array
    // for (var i = 0; i < users.length; i++) {
    // 	var tempUser = users[i]; // variable to refer to the property in the object
    // 	// output
    // 	outputArea.innerHTML += (i + 1) + ": " + (tempUser.firstName).charAt(0) + ". " + tempUser.lastName + "<br>";
    // }

    // // other way is using .forEach(tempUser, index)
    users.forEach(function (tempUser, i) {
        outputArea.innerHTML += (i + 1) + ": " + tempUser.firstName.charAt(0) + ". " + tempUser.lastName + "<br>";
    })
}

// adding funtionality for create button (using .addEventListener)
var createBtn = document.getElementById("createUser");
createBtn.addEventListener("click", function () {
    // with the constructor create a new user object and add to the array 
    // condition to create a new user object is first and last name cannot be null and cannot be an empty string
    // it was used .trim() in order to not accept ONLY spaces
    if (inputFirst.value !== null && inputFirst.value.trim() !== "" && inputLast.value !== null && inputLast.value.trim() !== "") {
        users.push(new User(inputFirst.value, inputLast.value, inputAge.value, inputPhone.value, inputEmail.value));

        // Clear the form
        clearForm();

        // display the array after a new user has been created
        usersOutput();
    }
    else {
        alert("First and Last names are required!");
    }
})

// Show user Details
function userDetails() {
    // Ask the user index
    var indexOfUser = prompt("Enter the user Index");

    // Check if the index entered is valid
    if (indexOfUser > users.length || indexOfUser <= 0) {
        alert("You entered an invalid index. Please, try again!");
        userDetails();
    }
    else {
        inputFirst.value = users[indexOfUser - 1].firstName;
        inputLast.value = users[indexOfUser - 1].lastName;
        inputAge.value = users[indexOfUser - 1].age;
        inputPhone.value = users[indexOfUser - 1].phone;
        inputEmail.value = users[indexOfUser - 1].email;
    }
}

// function to clear the form
function clearForm() {
    inputFirst.value = "";
    inputLast.value = "";
    inputAge.value = "";
    inputPhone.value = "";
    inputEmail.value = "";
}
