//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var checkUserLikeToJoin;
var subscriberMail;

//==== LOGIC =============

checkUserLikeToJoin = confirm("Would you like to Join mailing List.");

// Check if user wants to subscribe or not
if(checkUserLikeToJoin === true) {
    subscriberMail = prompt("Please Enter you email Address", "me@example.com");

    // Check for Valid Email or not 
    if(subscriberMail == "" || subscriberMail == null || subscriberMail == "me@example.com") {
        alert("Thank you, but your mail is not valid.")
    } else {
        alert("Thank you, our next newsletter will be sent to "+ subscriberMail);
    }
} else {
    alert("Thank you, We will not bother you again!");
}