//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function getAverageOfNumbers(num1, num2, num3, num4, num5) {
   let total = num1 + num2 + num3 + num4 + num5;
   let avg = (total/5).toFixed(1);
   return avg;
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
console.log(getAverageOfNumbers(5, 10, 15, 20, 25));


let frontEndCourse = 1.2121;
let backEndCourse = 13.32;
let designStudioCourse = 14;
let webDesignCourse = 21;
let databaseCourse = 22;


let averageScore = getAverageOfNumbers(frontEndCourse, backEndCourse, designStudioCourse, webDesignCourse, databaseCourse);

console.log(averageScore);

if(averageScore >= 70){
    alert("Congratulations..");
} else {
    alert("Sorry, Review required..");
}