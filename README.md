# FAN-FUN_WEB_DEV-LAB6
1. Download “StarterCode_Lab6” from the FOL Submission Folder “Lab 6”, rename the html file with your
first name followed by an underscore and then “Lab6”.
2. Your Web Page will serve as User Creation Tool. Where the site admins can also view user data using the same form.
3. Create a constructor for the User object, with the following parameters: firstName lastName age phone email
4. Create an array to store the users objects in global scope.
5. In Global scope, create some users objects and store them in the global users array.
6. Create a function that outputs the users in the Array to the userOutput area in the following format:
• userIndex (or id) starting from 1
• the first letter of the users first name followed by a “.” Dot
• the users last name
This function will be called when the page loads after the users have been added to the array and after a new user has been created.
7. Create the following functionality for the buttons on the webpage:
   Create: When the Create button is pressed:
• Retrieve the values from the form
• Using your constructor, create a new User Object with the values from
the form
• Add the newly created user to the array
• Clear the form elements of data
• Call the function you created in Step 6;
    Show User Details: When this button is pressed:
• Prompt the user for the user index (shown in the list from Step 6)
• Using that index, display the corresponding user details by writing them
to the forms input fields
▪ If the index is out of range of the bounds of the array, alert the
user that they entered an invalid index
(See Sample Output Below);
Clear: When the Clear button is pressed • Clear the form of its values
8. When you are done, ZIP your files and submit to the Lab 6 folder