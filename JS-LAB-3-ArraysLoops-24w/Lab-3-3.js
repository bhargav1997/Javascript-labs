//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var shoppingCartItems = [];

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
let validateCheck = false;
let totalValue = 0;

while(validateCheck === false) {
	//GET ITEM COST FROM USER
	let userValue = prompt("Enter Cart Value in $");

	// Convert to Number
	// let numUserVal = parseInt(userValue);

	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	totalValue = totalValue + parseInt(userValue);

	//PUSH ITEM COST TO CART ARRAY
	shoppingCartItems.push(userValue);

	if(totalValue >= 35) {
		//SEND POPUP MESSAGE TO USER
		alert("Your shipping for this order will be free!");

		//breaking the loop
		validateCheck = true;
	}
}
// Showing total cost to user
console.log("Item prices: " + shoppingCartItems.join('|'));

alert("Your Total Cart Value is:"+ totalValue+"$");
	
	

	
	
	
	

	
	
	




//SEND OUTPUT TO CONSOLE

