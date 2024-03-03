var current_users = ["Owais", "Admin", "Zain", "Abdullah", "Ali", "Salaar"];
var new_users = ["Waleed", "Owais", "Wajahat", "ALI", "Qasim"];
new_users.forEach(function (newUserName) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === newUserName.toLowerCase(); })) {
        console.log("Username is not Available, Enter a new username");
    }
    else {
        console.log("Username is Available");
    }
});
