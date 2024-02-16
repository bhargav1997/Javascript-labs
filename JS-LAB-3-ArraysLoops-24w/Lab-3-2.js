//LAB 3 - ARRAYS & LOOPS - PART 2

//PM TEAM MEMBER ARRAY
let ourTeam = ['Bhargav', 'Saran', 'Aish', 'Karishma', 'Vaibhav'];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log('Team Members: ', ourTeam);

//REMOVE LAST MEMBER
console.log('Removed Person:', ourTeam.pop());

console.log('Remove Last Member After Array:', ourTeam);

//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift('Sean');

console.log('Add Element Front of Array: ', ourTeam);
//REARRANGE THE ARRAY ALPHABETICALLY

ourTeam.sort();
console.log('Sorted Array: ', ourTeam);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log('We have ' + ourTeam.length + ' people in our group.');

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for (let i = 0; i < ourTeam.length; i++) {
   console.log('Hello, ' + ourTeam[i] + 'Member #ID ' + (i + 1));
}
