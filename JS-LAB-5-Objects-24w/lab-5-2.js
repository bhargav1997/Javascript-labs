//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
let bankCustomer = {
    firstName: 'Bhargav',
    lastName: 'Suthar',
    accountBalance: 500.25,
    interestRate: 1.03, // 3% interest rate
    multipleAccounts: true,
    makeDeposit: function(amount) {
        bankCustomer.accountBalance += amount;
        return `Thank you, your current balance is now $${bankCustomer.accountBalance.toFixed(2)}`;
    },
    makeWithdrawal: function(amount) {
        if (amount <= bankCustomer.accountBalance) {
            bankCustomer.accountBalance -= amount;
            return `Thank you, your current balance is now $${bankCustomer.accountBalance.toFixed(2)}`;
        } else {
            return "Sorry, you have no funds to withdraw!!";
        }
    },
    addInterest:  function() {
        if(bankCustomer.multipleAccounts ===  true) {
            let newInterestRate = bankCustomer.interestRate + 0.005;
            let interstAmount = newInterestRate * bankCustomer.accountBalance;
            return `Thank you, your current balance is $${interstAmount.toFixed(2)}`;
        } else {
            let updatedAmount = bankCustomer.interestRate * bankCustomer.accountBalance;
            return `Thank you, your current balance is $${updatedAmount.toFixed(2)}`;    
        }
     },
    getAccountBalance: function() {
        return bankCustomer.accountBalance.toFixed(2);
    }
}

console.log("Starting balance:", bankCustomer.getAccountBalance());

//3. Add your first method and test it. Remember, the methods will change the properties of the object.
console.log(bankCustomer.makeDeposit(200));

console.log("New balance after deposit:", bankCustomer.getAccountBalance());

//4. Add your second method and test it.
console.log(bankCustomer.makeWithdrawal(75));

//5. Create the required output to complete steps 6-10 of the lab.
console.log("New balance after withdrawal:", bankCustomer.getAccountBalance());

//6. Once everything is working, tackle the Stretch Goal!
console.log(bankCustomer.addInterest());

console.log('Interest amount:', bankCustomer.interestRate);

// bankCustomer.multipleAccounts = true;

console.log(bankCustomer.addInterest());

console.log('Interest amount:', bankCustomer.interestRate);