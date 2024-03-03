"use strict";
//This is a program that determines a person’s stage of life using if-else chain 
let personsAge = 80;
if (personsAge < 2) {
    console.log("The Person is a Baby.");
}
else if (personsAge >= 2 && personsAge < 4) {
    console.log("The Person is a Toddler.");
}
else if (personsAge >= 4 && personsAge < 13) {
    console.log("The Person is a Kid.");
}
else if (personsAge >= 13 && personsAge < 20) {
    console.log("The Person is a Teenager.");
}
else if (personsAge >= 20 && personsAge < 65) {
    console.log("The Person is a Adult.");
}
else {
    console.log("The Person is an elder.");
}
