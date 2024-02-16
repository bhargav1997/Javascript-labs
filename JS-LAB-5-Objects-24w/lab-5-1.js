//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

let myObject = {
    name: "Bhargav",
    age: 26,
    profession: 'Student',
    interests: ['Technology', 'Cricket', 'Programing', 'Gaming'],
    getBasicInfo: function() {
        let info = `My name is ${myObject.name}, and I'm ${myObject.profession}`;
        return info;
    }
}

console.log("My Name is ", myObject.name);

// alert("My name is " + myObject.name + " and  I'm " + myObject.profession);

console.log(myObject.getBasicInfo());