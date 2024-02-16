// alert('Hy..');

// Important Variables
const teamNumber = 6;
let userFirstName;
const groupMember1 = 'Bhargav';
const groupMember2 = 'Karishma';
const groupMember3 = 'Aishvarya';
const groupMember4 = 'Readdy';
const groupMember5 = 'Saran';
let welcomeMessage = 'Hello, Welcome ';
let denialMessage = 'Sorry, Access denied!';
let customMessage = '';

// Getting Team Number Information
const whichTeam = prompt('Which Team Are You Belong to (Write Number)...');

// Validate number is empty or null passed by user
if (whichTeam == null || whichTeam == '') {
   alert('Please enter the Team number you belongs to.');
} else {
   // Validate user enterted team number and Group's team number is matching or not
   if (whichTeam == teamNumber) {
      // Getting User's First name
      userFirstName = prompt('Enter your first name:');

      /**
       * If user verified then, Adding Member information + Last Name
       * Otherwise, display sorry message
       */
      switch (userFirstName) {
         case groupMember1:
            customMessage = welcomeMessage + groupMember1 + ' Suthar';
            break;
         case groupMember2:
            customMessage = welcomeMessage + groupMember2 + ' Patel';
            break;
         case groupMember3:
            customMessage = welcomeMessage + groupMember3 + ' Rajnikant';
            break;
         case groupMember4:
            customMessage = welcomeMessage + groupMember4 + ' Kolapate';
            break;
         case groupMember5:
            customMessage = welcomeMessage + groupMember5 + ' Manuit';
            break;
         default:
            customMessage = denialMessage;
            break;
      }

      // Print Custom Message
      alert(customMessage);
   } else {
      alert(denialMessage);
   }
}
