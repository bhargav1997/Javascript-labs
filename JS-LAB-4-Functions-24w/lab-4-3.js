//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG

//################## CREATE YOUR checkTemp FUNCTION

//This function will check the temperature whether its too cold or hot
//It expects to receive temperature
//It will return boolean value, whether its hot/cold, then returns true, otherwise false
function checkTemp(currentTemp) {
   // Check for, temperature is too hot or too cold
   if (currentTemp > 30 || currentTemp <= -10) {
      return false;
   }

   return true;
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
let currentTemperature = prompt('Please Enter Current Temperature:');

// check user input some temperature value or not
if (currentTemperature != null && currentTemperature != '') {
   let currentTempStatus = checkTemp(currentTemperature);
   if (currentTempStatus) {
      alert('You’re good, have a nice walk!');
   } else {
      alert('Yikes! This is no weather for dog walking!');
   }
}
