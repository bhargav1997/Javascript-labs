//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
// alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input
const validUserName = "dart";
const validPassword = "vader";

//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var userName = prompt("Enter Username:");

// alert("You type: " + userName + " UserName")

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Your typed Username:"+userName);

//5. CREATE POPUP BOX FOR PASSWORD
var password = prompt("Enter Password:");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Your typed Password:"+password);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
if(validUserName == userName && validPassword == password) {
	alert("Welcome Back "+ userName);
	console.log('Login Successful.');
}
//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else {
	alert("Invalid Username/Password!");
	console.log('Loging Fail.');
}