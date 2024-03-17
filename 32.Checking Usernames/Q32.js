"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Owais", "Admin", "Zain", "Abdullah", "Ali", "Salaar"];
let new_users = ["Waleed", "Owais", "Wajahat", "ALI", "Qasim"];
new_users.forEach(newUserName => {
    if (current_users.some(current_users => current_users.toLowerCase() === newUserName.toLowerCase())) {
        console.log("Username is not Available, Enter a new username");
    }
    else {
        console.log("Username is Available");
    }
});
