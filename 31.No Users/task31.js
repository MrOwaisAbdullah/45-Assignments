"use strict";
let userName = ["Owais", "Admin", "Zain", "Abdullah", "Ali", "Salaar"];
userName = [];
if (userName.length === 0) {
    console.log("Oops! We Need to find Some New Users");
}
else {
    for (let i = 0; i < userName.length; i++) {
        if (userName[i] === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${userName[i]}, thank you for logging in again.`);
        }
    }
}
