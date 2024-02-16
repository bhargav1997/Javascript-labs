let movie1 = "Maestro";
let movie2 = "Spider-Man";
let movie3 = "Totem";
let movie4 = "Loop Track";
let movie5 = "The Holdovers";
let movie6 = "Godzilla Minus One";
let movie7 = "Poor Things";

// Created an empty array, for storing movies list
let moviesTop7 = [];

// Adding, movie to the movie array
moviesTop7.push(movie1);
moviesTop7.push(movie2);
moviesTop7.push(movie3);
moviesTop7.push(movie4);
moviesTop7.push(movie5);
moviesTop7.push(movie6);
moviesTop7.push(movie7);

let check = true;

while(check == true) {
    let movieNumber = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");

    // Validating user's input
    if(movieNumber == "" || movieNumber == null || movieNumber == "Pick a number: 1-7" || movieNumber > 7 || movieNumber < 1 ) {
        // Ask Again
        alert("Please enter a number between 1 and 7!");
    } else {
        alert(`Number ${movieNumber} on the list is ${moviesTop7[movieNumber]}`)
        // break the loop
        check = false;
    }    
}

console.log("Top 7 Movies:");

for(let i = 0; i < moviesTop7.length; i++) {
    console.log(`Movie ${i+1} : ${moviesTop7[i]}`);
}